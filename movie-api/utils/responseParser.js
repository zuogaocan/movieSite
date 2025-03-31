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
      playFrom: item.vod_play_from
    }));
  }

  /**
   * 解析视频详情
   * @param {Object} videoData - 原始视频详情数据
   * @returns {Object} 格式化后的视频详情
   */
  parseVideoDetail(videoData) {
    // 解析播放地址
    const playUrls = this.parsePlayUrls(videoData.vod_play_url || '');
    
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
      episodes: playUrls
    };
  }

  /**
   * 解析播放地址
   * @param {string} playUrlStr - 原始播放地址字符串
   * @returns {Array} 格式化的播放地址列表
   */
  parsePlayUrls(playUrlStr) {
    if (!playUrlStr) return [];
    
    // 分集分隔符通常是 "#"
    return playUrlStr.split('#').map(item => {
      const [episode, url] = item.split('$');
      if (!url) return null;
      
      return {
        episode,
        url,
        // 添加解析后的播放地址
        parseUrl: `https://hoplayer.com/index.html?url=${(url)}`
      };
    }).filter(Boolean); // 过滤无效项
  }
}

module.exports = new ResponseParser(); 