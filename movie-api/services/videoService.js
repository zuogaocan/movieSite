const httpClient = require('../utils/httpClient');
const responseParser = require('../utils/responseParser');
const config = require('../config');

/**
 * 视频服务类 - 处理视频资源的获取和解析
 */
class VideoService {
  /**
   * 搜索视频资源
   * @param {string} keyword - 搜索关键词
   * @returns {Array} 格式化后的视频列表
   */
  async searchVideos(keyword) {
    try {
      const encodedKeyword = encodeURIComponent(keyword);
      const url = `${config.apiBaseUrl}/?ac=list&wd=${encodedKeyword}`;
      
      const response = await httpClient.get(url);
      
      if (response.code !== 1) {
        throw new Error('接口返回错误: ' + response.msg);
      }
      
      return responseParser.parseSearchResults(response.list || []);
    } catch (error) {
      console.error('搜索视频失败:', error);
      throw error;
    }
  }

  /**
   * 获取视频详情
   * @param {string} id - 视频ID
   * @returns {Object} 格式化后的视频详情
   */
  async getVideoDetail(id) {
    try {
      const url = `${config.apiBaseUrl}/?ac=detail&ids=${id}`;
      
      const response = await httpClient.get(url);
      
      if (response.code !== 1 || !response.list || response.list.length === 0) {
        throw new Error('获取视频详情失败');
      }
      
      return responseParser.parseVideoDetail(response.list[0]);
    } catch (error) {
      console.error('获取视频详情失败:', error);
      throw error;
    }
  }
}

module.exports = new VideoService(); 