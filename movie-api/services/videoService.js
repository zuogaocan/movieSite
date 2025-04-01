const httpClient = require('../utils/httpClient');
const responseParser = require('../utils/responseParser');
const config = require('../config');
const fs = require('fs');
const path = require('path');

// 站点配置文件路径
const sitesConfigPath = path.join(__dirname, '../config/sites.json');

// 读取站点配置
const getSiteConfig = (siteId) => {
  try {
    const data = fs.readFileSync(sitesConfigPath, 'utf8');
    const sitesConfig = JSON.parse(data);
    
    if (!siteId) {
      return sitesConfig.sites.find(site => site.id === 'default') || null;
    }
    
    return sitesConfig.sites.find(site => site.id === siteId) || null;
  } catch (error) {
    console.error('读取站点配置失败:', error);
    return null;
  }
};

// 图片URL缓存，减少重复请求
const imageCache = new Map();

/**
 * 视频服务类 - 处理视频资源的获取和解析
 */
class VideoService {
  /**
   * 搜索视频资源
   * @param {string} keyword - 搜索关键词
   * @param {Object} options - 搜索选项
   * @param {string} options.source - 资源来源站点ID
   * @param {number} options.page - 页码 
   * @param {number} options.pageSize - 每页条数
   * @returns {Array} 格式化后的视频列表
   */
  async searchVideos(keyword, options = {}) {
    try {
      const { source, page = 1, pageSize = 24 } = options;
      const encodedKeyword = encodeURIComponent(keyword);
      
      console.log(`[Service] 搜索视频: 关键词=${keyword}, 站点=${source || '默认'}, 页码=${page}, 每页=${pageSize}`);
      
      // 获取站点配置
      const siteConfig = getSiteConfig(source);
      if (!siteConfig) {
        console.warn(`找不到站点配置: ${source}，使用默认站点`);
        // 使用默认站点继续处理
        return this._searchWithSite(keyword, encodedKeyword, page, getSiteConfig('default'));
      }
      
      // 使用指定站点
      return this._searchWithSite(keyword, encodedKeyword, page, siteConfig);
    } catch (error) {
      console.error('搜索视频失败:', error);
      return { list: [], total: 0 }; // 返回空结果
    }
  }

  /**
   * 使用指定站点进行搜索
   * @private
   */
  async _searchWithSite(keyword, encodedKeyword, page, siteConfig) {
    if (!siteConfig) return { list: [], total: 0 };

    try {
      const apiBaseUrl = siteConfig.apiBaseUrl;
      const url = `${apiBaseUrl}/?ac=list&wd=${encodedKeyword}&pg=${page}`;
      
      console.log(`[Service] 使用站点(${siteConfig.id})API: ${url}`);
      
      const response = await httpClient.get(url);
      
      if (response.code !== 1) {
        throw new Error('接口返回错误: ' + response.msg);
      }
      
      // 解析搜索结果
      const results = responseParser.parseSearchResults(response.list || []);
      let total = response.total || results.length || 0;
      
      // 获取所有无图片的结果，不再限制数量
      const resultsNeedingImages = results
        .filter(item => !item.coverImage && item.id);
      
      if (resultsNeedingImages.length > 0) {
        console.log(`[Service] 需要获取图片的结果数: ${resultsNeedingImages.length}`);
        
        // 批量获取详情
        await Promise.all(
          resultsNeedingImages.map(async (item) => {
            // 检查缓存
            if (imageCache.has(item.id)) {
              item.coverImage = imageCache.get(item.id);
              console.log(`[Service] 使用缓存图片: ${item.id}`);
              return;
            }
            
            try {
              const detailUrl = `${apiBaseUrl}/?ac=detail&ids=${item.id}`;
              const detailResponse = await httpClient.get(detailUrl);
              
              if (detailResponse.code === 1 && detailResponse.list && detailResponse.list.length > 0) {
                const detail = detailResponse.list[0];
                if (detail.vod_pic) {
                  // 更新所有相同ID的结果
                  const imageUrl = detail.vod_pic;
                  results.forEach(r => {
                    if (r.id === item.id) {
                      r.coverImage = imageUrl;
                    }
                  });
                  
                  // 添加到缓存
                  imageCache.set(item.id, imageUrl);
                }
              }
            } catch (err) {
              console.warn(`[Service] 获取图片失败: ${err.message}`);
            }
          })
        );
      }
      
      // 添加站点信息
      const enhancedResults = results.map(item => ({
        ...item,
        source: siteConfig.id,
        sourceName: siteConfig.name
      }));
      
      return {
        list: enhancedResults,
        total
      };
    } catch (error) {
      console.error(`[Service] 站点(${siteConfig.id})搜索错误:`, error);
      return { list: [], total: 0 };
    }
  }

  /**
   * 获取视频详情
   * @param {string} id - 视频ID
   * @param {string} source - 资源来源，默认为空，表示使用默认源
   * @returns {Object} 格式化后的视频详情
   */
  async getVideoDetail(id, source) {
    try {
      console.log(`[Service] 获取视频详情: ID=${id}, 站点=${source || '默认'}`);
      
      // 获取站点配置
      const siteConfig = getSiteConfig(source);
      if (!siteConfig) {
        console.warn(`找不到站点配置: ${source}，使用默认站点`);
        // 尝试使用默认站点
        const defaultConfig = getSiteConfig('default');
        if (!defaultConfig) {
          throw new Error('无法找到默认站点配置');
        }
        
        // 使用默认站点继续
        const apiBaseUrl = defaultConfig.apiBaseUrl;
        const url = `${apiBaseUrl}/?ac=detail&ids=${id}`;
        
        console.log(`[Service] 使用默认站点API: ${url}`);
        
        const response = await httpClient.get(url);
        
        if (response.code !== 1 || !response.list || response.list.length === 0) {
          throw new Error('获取视频详情失败');
        }
        
        // 传递播放器URL和站点ID给解析器
        const result = responseParser.parseVideoDetail(response.list[0], {
          playerUrl: defaultConfig.playerUrl,
          siteId: defaultConfig.id
        });
        
        // 添加源站信息
        result.source = defaultConfig.id;
        result.sourceName = defaultConfig.name;
        
        return result;
      }
      
      // 使用指定站点
      const apiBaseUrl = siteConfig.apiBaseUrl;
      const url = `${apiBaseUrl}/?ac=detail&ids=${id}`;
      
      console.log(`[Service] 使用站点(${siteConfig.id})API: ${url}`);
      
      const response = await httpClient.get(url);
      
      if (response.code !== 1 || !response.list || response.list.length === 0) {
        throw new Error('获取视频详情失败');
      }
      
      // 传递播放器URL和站点ID给解析器
      const result = responseParser.parseVideoDetail(response.list[0], {
        playerUrl: siteConfig.playerUrl,
        siteId: siteConfig.id
      });
      
      // 添加源站信息
      result.source = siteConfig.id;
      result.sourceName = siteConfig.name;
      
      return result;
    } catch (error) {
      console.error('获取视频详情失败:', error);
      return null; // 返回null而不是抛出错误，避免前端崩溃
    }
  }
}

module.exports = new VideoService(); 