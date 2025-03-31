import axios from 'axios'

// 为了调试，添加baseURL的日志
console.log('API baseURL设置为:', '/api');

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    const { data } = response
    console.log('API原始响应数据:', data);
    
    // 判断业务状态码
    if (data.code === 0) {
      return data.data
    }
    // 其他情况，直接返回原始数据供后续处理
    return data.list || data;
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 格式化搜索结果
const formatSearchResults = (data) => {
  if (!data) return [];
  
  // 如果是数组，直接处理
  if (Array.isArray(data)) {
    return data.map(formatItem);
  }
  
  // 如果是对象且有list属性，处理list
  if (data.list && Array.isArray(data.list)) {
    return data.list.map(formatItem);
  }
  
  return [];
};

// 解析剧集列表
function parseEpisodes(item) {
  // 如果已经有格式化好的剧集列表，直接返回
  if (item.episodes && Array.isArray(item.episodes) && item.episodes.length > 0) {
    // 确保每个剧集有完整的URL
    return item.episodes.map(ep => ({
      ...ep,
      url: formatUrl(ep.url)
    }));
  }
  
  // 从playFrom和vod_play_url字段解析剧集
  const playFrom = item.playFrom || item.vod_play_from || '';
  const playUrl = item.playUrl || item.vod_play_url || '';
  
  console.log('解析剧集数据:', { playFrom, playUrl });
  
  if (!playUrl) {
    console.warn('没有可用的播放链接数据');
    return [];
  }
  
  try {
    // 解析播放源和播放地址
    const episodes = [];
    
    // 处理包含#分隔符的情况
    if (playUrl.includes('#')) {
      const episodeList = playUrl.split('#');
      
      episodeList.forEach((ep, index) => {
        // 每个剧集格式可能是 "标题$URL"
        let title = `第${index + 1}集`;
        let url = ep;
        
        // 处理含有$分隔符的情况
        if (ep.includes('$')) {
          const parts = ep.split('$');
          title = parts[0] || title;
          url = parts[1] || '';
        }
        
        if (url) {
          episodes.push({
            episode: title,
            url: formatUrl(url),
            title: title
          });
        }
      });
    } 
    // 处理其他格式
    else {
      // 单集情况，直接添加
      episodes.push({
        episode: '1',
        url: formatUrl(playUrl),
        title: '完整版'
      });
    }
    
    console.log('解析后的剧集列表:', episodes);
    return episodes;
  } catch (error) {
    console.error('解析剧集出错:', error);
    return [];
  }
}

// 格式化URL，确保是完整的HTTP URL
function formatUrl(url) {
  if (!url) return '';
  
  // 移除URL两端的空白
  const trimmedUrl = url.trim();
  
  // 如果URL以//开头，添加https:
  if (trimmedUrl.startsWith('//')) {
    return `https:${trimmedUrl}`;
  }
  
  // 如果URL不是以http开头，添加https://
  if (!trimmedUrl.startsWith('http')) {
    return `https://${trimmedUrl}`;
  }
  
  return trimmedUrl;
}

// 格式化单个项目
function formatItem(item) {
  if (!item) return null;
  
  console.log('格式化前的原始项:', item);
  
  // 标准化图片URL
  let coverImage = '';
  
  // 尝试从多个可能的字段获取图片URL
  const possibleFields = ['vod_pic', 'pic', 'img', 'image', 'cover', 'coverImage', 'poster'];
  for (const field of possibleFields) {
    if (item[field] && typeof item[field] === 'string' && item[field].length > 5) {
      coverImage = item[field];
      break;
    }
  }
  
  console.log('提取的原始图片URL:', coverImage);
  
  // 处理图片URL
  if (coverImage) {
    // 修复常见的URL问题
    
    // 1. 移除两端空白
    coverImage = coverImage.trim();
    
    // 2. 如果URL是以//开头，添加https:
    if (coverImage.startsWith('//')) {
      coverImage = `https:${coverImage}`;
    }
    // 3. 如果URL以单个斜杠开头，可能是相对路径，添加基本域名
    else if (coverImage.startsWith('/') && !coverImage.startsWith('//')) {
      // 针对相对路径，添加一个合理的基础URL
      coverImage = `https://img9.doubanio.com${coverImage}`;
    }
    // 4. 如果URL不是以http开头，尝试添加协议
    else if (!coverImage.startsWith('http')) {
      coverImage = `https://${coverImage}`;
    }
    
    // 5. 对一些特殊的图片服务器进行处理
    if (coverImage.includes('doubanio') || coverImage.includes('douban.com')) {
      // 确保豆瓣图片使用HTTPS
      coverImage = coverImage.replace('http://', 'https://');
    }
  } else {
    // 如果没有找到有效的图片URL，根据影片类型和名称选择占位图
    
    // 为特定资源指定图片URL
    if (item.name && item.name.includes('画江湖之不良人')) {
      coverImage = 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2878191342.jpg';
    } 
    else if (item.name && item.name.includes('国产')) {
      coverImage = 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2876499586.jpg';
    }
    else if (item.type && item.type.includes('国产')) {
      coverImage = 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2866568694.jpg';
    }
    else if (item.type && item.type.includes('动漫')) {
      coverImage = 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2620083596.jpg';
    }
    else {
      // 默认占位图
      coverImage = 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png';
    }
  }
  
  console.log('处理后的图片URL:', coverImage);
  
  const formattedItem = {
    id: item.vod_id || item.id || '',
    name: item.vod_name || item.name || item.title || '',
    type: item.vod_type || item.type || '',
    year: item.vod_year || item.year || '',
    area: item.vod_area || item.area || '',
    status: item.vod_remarks || item.remarks || item.status || '',
    score: item.vod_score || item.score || '',
    director: item.vod_director || item.director || '',
    actor: item.vod_actor || item.actor || '',
    description: item.vod_content || item.content || item.description || '',
    updateTime: item.vod_time || item.time || item.updateTime || '',
    episodes: parseEpisodes(item),
    // 使用已经处理过的图片URL
    coverImage: coverImage,
    // 保留原始字段值
    vod_pic: item.vod_pic || '',
    pic: item.pic || ''
  };
  
  console.log('格式化后的项:', formattedItem);
  
  return formattedItem;
}

// 影片相关接口
const movieApi = {
  // 搜索影片
  search: async (keyword) => {
    try {
      // 移除重复的/api前缀
      const response = await api.get(`/search?keyword=${encodeURIComponent(keyword)}`);
      console.log('搜索API请求URL:', `/search?keyword=${encodeURIComponent(keyword)}`);
      return formatSearchResults(response);
    } catch (error) {
      console.error('搜索API调用失败:', error);
      return [];
    }
  },
  
  // 获取影片详情
  getDetail: async (id) => {
    try {
      console.log(`获取ID为 ${id} 的影片详情`);
      // 移除重复的/api前缀
      const response = await api.get(`/detail?id=${id}`);
      
      // 记录原始响应数据，便于调试
      console.log('详情API原始响应:', response);
      
      // 处理详情数据
      if (response) {
        const formattedItem = formatItem(response);
        return formattedItem;
      }
      return null;
    } catch (error) {
      console.error('详情API调用失败:', error);
      return null;
    }
  }
};

export { movieApi };

export default api 