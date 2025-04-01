/**
 * 响应数据解析工具
 */
class ResponseParser {
  /**
   * 解析搜索结果
   * @param {Array} list - 原始搜索结果列表
   * @returns {Array} 格式化后的搜索结果
   */
  parseSearchResults(list) {
    return list.map(item => ({
      id: item.vod_id,
      name: item.vod_name,
      type: item.type_name,
      year: item.vod_year,
      area: item.vod_area,
      status: item.vod_remarks,
      updateTime: item.vod_time,
      playFrom: item.vod_play_from,
      coverImage: item.vod_pic
    }));
  }

  /**
   * 解析视频详情
   * @param {Object} videoData - 原始视频详情数据
   * @param {Object} options - 附加选项
   * @param {string} options.playerUrl - 播放器解析接口
   * @param {string} options.siteId - 站点ID
   * @returns {Object} 格式化后的视频详情
   */
  parseVideoDetail(videoData, options = {}) {
    // 解析播放地址
    const playUrls = this.parsePlayUrls(videoData.vod_play_url || '', {
      playFrom: videoData.vod_play_from,
      playerUrl: options.playerUrl,
      siteId: options.siteId
    });
    
    console.log(`[Parser] 解析到 ${playUrls.length} 个播放地址`);
    
    return {
      id: videoData.vod_id,
      name: videoData.vod_name,
      coverImage: videoData.vod_pic,
      type: videoData.type_name,
      year: videoData.vod_year,
      area: videoData.vod_area,
      status: videoData.vod_remarks,
      director: videoData.vod_director,
      actor: videoData.vod_actor,
      description: videoData.vod_blurb || videoData.vod_content,
      score: videoData.vod_score,
      updateTime: videoData.vod_time,
      playFrom: videoData.vod_play_from,
      episodes: playUrls,
      source: options.siteId || 'default'
    };
  }

  /**
   * 解析播放地址
   * @param {string} playUrlStr - 原始播放地址字符串
   * @param {Object} options - 附加选项
   * @param {string} options.playFrom - 播放源信息
   * @param {string} options.playerUrl - 播放器解析接口
   * @param {string} options.siteId - 站点ID
   * @returns {Array} 格式化的播放地址列表
   */
  parsePlayUrls(playUrlStr, options = {}) {
    if (!playUrlStr) return [];
    
    console.log(`[Parser] 开始解析播放地址: ${playUrlStr.substring(0, 100)}...`);
    console.log(`[Parser] 播放源信息: ${options.playFrom || '未提供'}`);
    
    // 获取播放器解析接口
    const playerUrl = options.playerUrl || 'https://hoplayer.com/index.html?url=';
    const siteId = options.siteId || 'default';
    const isNonFanResource = siteId === 'ffzy'; // 是否为非凡资源
    
    try {
      // 直接检查是否有$$$分隔符，表示有多个播放源
      if (playUrlStr.includes('$$$')) {
        // 分割播放源
        const playUrlArray = playUrlStr.split('$$$');
        let playFromArray = ['默认线路'];
        
        // 如果提供了播放源信息，也按$$$分割
        if (options.playFrom && options.playFrom.includes('$$$')) {
          playFromArray = options.playFrom.split('$$$');
        }
        
        console.log(`[Parser] 检测到 ${playUrlArray.length} 个播放源`);
        
        // 对于非凡资源，我们知道第二个源通常是m3u8格式
        if (isNonFanResource && playUrlArray.length > 1) {
          // 找到包含m3u8的源索引（通常是第二个，索引为1）
          let m3u8Index = 1; // 默认使用第二个源
          
          // 或者在playFromArray中查找包含"m3u8"的源
          const foundIndex = playFromArray.findIndex(from => 
            from.toLowerCase().includes('m3u8'));
          
          if (foundIndex !== -1 && foundIndex < playUrlArray.length) {
            m3u8Index = foundIndex;
          }
          
          console.log(`[Parser] 选择使用第 ${m3u8Index+1} 个播放源 (m3u8格式)`);
          
          // 解析m3u8格式的播放地址
          const m3u8SourceName = playFromArray[m3u8Index] || 'M3U8线路';
          const m3u8SourceUrls = playUrlArray[m3u8Index];
          
          // 使用m3u8源解析剧集
          return m3u8SourceUrls.split('#').map((item, index) => {
            const parts = item.split('$');
            if (parts.length < 2) return null;
            
            const episode = parts[0];
            const url = parts[1];
            
            if (!url) return null;
            
            // 确保URL是完整的
            let fullUrl = url.trim();
            if (fullUrl.startsWith('//')) {
              fullUrl = `https:${fullUrl}`;
            } else if (!fullUrl.startsWith('http')) {
              fullUrl = `https://${fullUrl}`;
            }
            
            // 为m3u8链接使用专用播放器
            const parseUrl = `https://jx.jsonplayer.com/player/?url=${encodeURIComponent(fullUrl)}`;
            
            return {
              episode,
              url: fullUrl,
              parseUrl,
              source: siteId,
              sourceName: m3u8SourceName,
              isM3u8: true
            };
          }).filter(Boolean);
        }
        
        // 如果不是特定资源或者没有多个源，合并所有源的剧集
        let allEpisodes = [];
        
        // 遍历每个播放源
        for (let i = 0; i < playUrlArray.length; i++) {
          const sourceName = i < playFromArray.length ? playFromArray[i] : `线路${i+1}`;
          const sourceUrls = playUrlArray[i];
          const isM3u8Source = sourceName.toLowerCase().includes('m3u8') || 
                              sourceUrls.toLowerCase().includes('.m3u8');
          
          // 解析当前源的所有剧集
          const episodes = sourceUrls.split('#').map((item, index) => {
            const parts = item.split('$');
            if (parts.length < 2) return null;
            
            const episode = parts[0];
            const url = parts[1];
            
            if (!url) return null;
            
            // 确保URL是完整的
            let fullUrl = url.trim();
            if (fullUrl.startsWith('//')) {
              fullUrl = `https:${fullUrl}`;
            } else if (!fullUrl.startsWith('http')) {
              fullUrl = `https://${fullUrl}`;
            }
            
            // 选择适当的播放器
            let parseUrl;
            if (isM3u8Source || fullUrl.includes('.m3u8')) {
              parseUrl = `https://jx.jsonplayer.com/player/?url=${encodeURIComponent(fullUrl)}`;
            } else {
              parseUrl = `${playerUrl}${encodeURIComponent(fullUrl)}`;
            }
            
            return {
              episode,
              url: fullUrl,
              parseUrl,
              source: siteId,
              sourceName,
              isM3u8: isM3u8Source || fullUrl.includes('.m3u8')
            };
          }).filter(Boolean);
          
          allEpisodes = [...allEpisodes, ...episodes];
        }
        
        // 如果存在m3u8格式的剧集，优先返回这些剧集
        const m3u8Episodes = allEpisodes.filter(ep => ep.isM3u8);
        if (m3u8Episodes.length > 0) {
          console.log(`[Parser] 返回 ${m3u8Episodes.length} 个m3u8格式播放地址`);
          return m3u8Episodes;
        }
        
        return allEpisodes;
      }
      
      // 如果没有$$$分隔符，按照传统方式解析
      return playUrlStr.split('#').map((item, index) => {
        const parts = item.split('$');
        if (parts.length < 2) return null;
        
        const episode = parts[0];
        const url = parts[1];
        
        if (!url) return null;
        
        // 确保URL是完整的
        let fullUrl = url.trim();
        if (fullUrl.startsWith('//')) {
          fullUrl = `https:${fullUrl}`;
        } else if (!fullUrl.startsWith('http')) {
          fullUrl = `https://${fullUrl}`;
        }
        
        // 选择适当的播放器
        let parseUrl;
        if (fullUrl.includes('.m3u8')) {
          parseUrl = `https://jx.jsonplayer.com/player/?url=${encodeURIComponent(fullUrl)}`;
        } else {
          parseUrl = `${playerUrl}${encodeURIComponent(fullUrl)}`;
        }
        
        return {
          episode,
          url: fullUrl,
          parseUrl,
          source: siteId,
          sourceName: '默认线路',
          isM3u8: fullUrl.includes('.m3u8')
        };
      }).filter(Boolean);
    } catch (error) {
      console.error(`[Parser] 解析播放地址出错:`, error);
      return [];
    }
  }
}

module.exports = new ResponseParser(); 