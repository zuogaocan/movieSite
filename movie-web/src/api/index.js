import axios from 'axios'

// 为了调试，添加baseURL的日志
console.log('API baseURL设置为:', '/api');

const api = axios.create({
  baseURL: '/api',
  timeout: 30000,
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
  response => {
    console.log(`API响应[${response.config.url}]:`, response.data);
    const { data } = response
    console.log('API原始响应数据:', data);
    
    // 判断业务状态码
    if (data.code === 0) {
      return data.data
    }
    // 其他情况，直接返回原始数据供后续处理
    return data.list || data;
  },
  error => {
    console.error(`API错误[${error.config?.url || '未知'}]:`, error);
    return Promise.reject(error);
  }
)

// 站点服务API
const siteApi = {
  async getAllSites() {
    try {
      const response = await api.get('/sites');
      console.log('站点API原始响应:', response);
      
      // 处理不同的返回格式情况
      if (!response) return [];
      
      // 如果直接返回了数组
      if (Array.isArray(response)) {
        return response;
      }
      
      // 如果返回的是对象，且包含data字段
      if (response.data && Array.isArray(response.data)) {
        return response.data;
      }
      
      // 如果返回的是对象，且包含list字段
      if (response.list && Array.isArray(response.list)) {
        return response.list;
      }
      
      // 如果是其他格式，尝试转换或返回空数组
      console.error('未知的站点数据格式:', response);
      return [];
    } catch (error) {
      console.error('获取站点列表失败:', error);
      return [];
    }
  },
  
  // 获取单个站点详情
  async getSiteById(id) {
    try {
      return await api.get(`/sites/${id}`);
    } catch (error) {
      console.error(`获取站点详情失败 (${id}):`, error);
      return null;
    }
  },
  
  // 添加新站点
  async addSite(siteData) {
    try {
      return await api.post('/sites', siteData);
    } catch (error) {
      console.error('添加站点失败:', error);
      throw error;
    }
  },
  
  // 更新站点
  async updateSite(id, siteData) {
    try {
      return await api.put(`/sites/${id}`, siteData);
    } catch (error) {
      console.error(`更新站点失败 (${id}):`, error);
      throw error;
    }
  },
  
  // 删除站点
  async deleteSite(id) {
    try {
      return await api.delete(`/sites/${id}`);
    } catch (error) {
      console.error(`删除站点失败 (${id}):`, error);
      throw error;
    }
  },
  
  // 更新站点状态
  async updateSiteStatus(id, active) {
    try {
      return await api.patch(`/sites/${id}/status`, { active });
    } catch (error) {
      console.error(`更新站点状态失败 (${id}):`, error);
      throw error;
    }
  },
  
  // 测试站点API
  async testSiteApi(apiBaseUrl) {
    try {
      return await api.post('/sites/test', { apiBaseUrl });
    } catch (error) {
      console.error('测试站点API失败:', error);
      throw error;
    }
  }
};

// 格式化搜索结果
const formatSearchResults = (data) => {
  if (!data) return [];
  
  // 如果返回的是数组，直接格式化
  if (Array.isArray(data)) {
    return data.map(formatItem);
  }
  
  // 如果是对象，并且有list字段，处理list字段
  if (data.list && Array.isArray(data.list)) {
    return data.list.map(formatItem);
  }
  
  return [];
};

// 解析剧集信息
function parseEpisodes(item) {
  if (!item) return [];
  
  // 已经是格式化好的剧集
  if (item.episodes && Array.isArray(item.episodes)) {
    // 格式化每个剧集的URL
    return item.episodes.map(ep => ({
      ...ep,
      url: ep.url ? formatUrl(ep.url) : ''
    }));
  }
  
  // 尝试解析不同的剧集格式
  const episodes = [];
  
  // 处理播放地址
  if (item.vod_play_url) {
    // 解析播放地址，格式可能是"第1集$http://xxx.mp4#第2集$http://yyy.mp4"
    const lines = item.vod_play_url.split('#');
    lines.forEach((line, index) => {
      const parts = line.split('$');
      if (parts.length >= 2) {
        episodes.push({
          episode: parts[0].replace(/第|集/g, '').trim() || `${index + 1}`,
          url: formatUrl(parts[1].trim())
        });
      }
    });
  }
  
  console.log('解析的剧集列表:', episodes);
  return episodes;
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

// 默认占位图片
const placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNi0xOVQxMTowMTowOSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDYtMTlUMTE6MDU6MzUrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDYtMTlUMTE6MDU6MzUrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZjM3NDU3ZTUtNDdmZS1m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';

// 格式化单个项目
function formatItem(item) {
  if (!item) return null;
  
  // 深拷贝，避免修改原对象
  const result = { ...item };
  
  // 格式化封面图片
  let coverImage = '';
  
  // 提取图片URL
  if (result.img) {
    coverImage = result.img;
    delete result.img;
  } else if (result.pic) {
    coverImage = result.pic;
    delete result.pic;
  } else if (result.cover) {
    coverImage = result.cover;
    delete result.cover;
  } else if (result.vod_pic) {
    coverImage = result.vod_pic;
    delete result.vod_pic;
  } else if (result.coverImage) {
    coverImage = result.coverImage;
  }
  
  // 确保图片URL格式正确
  result.coverImage = coverImage ? formatUrl(coverImage) : placeholderImage;
  console.log('处理后的图片URL:', result.coverImage);
  
  // 从影片名生成动态图片URL (当无图片时使用)
  if (!coverImage) {
    result.coverImage = `https://via.placeholder.com/300x450/2c3e50/ffffff?text=${encodeURIComponent(result.name || '未知电影')}`;
    console.log('使用动态生成的图片URL:', result.coverImage);
  }
  
  // 格式化影片名称
  if (result.title) {
    result.name = result.title;
    delete result.title;
  } else if (result.vod_name) {
    result.name = result.vod_name;
    delete result.vod_name;
  }
  
  // 格式化年份
  if (result.vod_year) {
    result.year = result.vod_year;
    delete result.vod_year;
  }
  
  // 格式化导演
  if (result.vod_director) {
    result.director = result.vod_director;
    delete result.vod_director;
  }
  
  // 格式化演员
  if (result.vod_actor) {
    result.actor = result.vod_actor;
    delete result.vod_actor;
  }
  
  // 格式化地区
  if (result.vod_area) {
    result.area = result.vod_area;
    delete result.vod_area;
  }
  
  // 保存源站ID
  if (result.source_id || result.sourceId) {
    result.sourceId = result.source_id || result.sourceId;
  }
  
  // 处理站点数据
  if (result.site) {
    result.site = result.site;
  }
  
  // 解析播放列表
  if (result.episodes) {
    result.episodes = parseEpisodes(result);
  }
  
  return result;
}

// 电影相关API
const movieApi = {
  // 获取所有可用资源站点
  async getResourceSites() {
    try {
      // 从站点API获取站点列表
      const sites = await siteApi.getAllSites();
      // 只返回激活的站点
      return sites.filter(site => site.active).map(site => ({
        name: site.name,
        key: site.id
      }));
    } catch (error) {
      console.error('获取资源站点失败:', error);
      // 返回默认站点
      return [
        { name: '默认资源站', key: 'default' }
      ];
    }
  },
  
  // 搜索电影
  async search(keyword, options = {}) {
    try {
      const { page = 1, pageSize = 24, source } = options;
      const params = {
        keyword,
        page,
        pageSize
      };
      
      // 强制传递source参数，确保后端能识别站点
      if (source) {
        params.source = source;
        console.log('使用指定站点搜索:', source);
      } else {
        console.log('未指定站点，使用默认站点搜索');
        params.source = 'default'; // 显式指定默认站点
      }
      
      console.log('完整搜索参数:', params);
      const response = await api.get('/search', { params });
      
      console.log('搜索API返回原始数据:', response);
      
      // 处理异常数据格式
      if (!response) {
        console.error('搜索API返回空数据');
        return { list: [], total: 0 };
      }
      
      // 标准化返回结果
      let resultList = [];
      let total = 0;
      
      if (Array.isArray(response)) {
        resultList = formatSearchResults(response);
        total = resultList.length;
      } else if (typeof response === 'object') {
        if (response.list) {
          resultList = formatSearchResults(response.list);
          total = response.total || resultList.length;
        } else if (response.data) {
          resultList = formatSearchResults(response.data);
          total = response.total || resultList.length;
        }
      }
      
      console.log(`格式化后的结果: ${resultList.length}条数据`);
      
      return {
        list: resultList,
        total: total
      };
    } catch (error) {
      console.error('搜索失败:', error);
      return { list: [], total: 0 };
    }
  },
  
  // 获取电影详情
  async getDetail(id, source) {
    try {
      const params = {};
      
      // 如果指定了站点来源，添加到请求参数
      if (source) {
        params.source = source;
      }
      
      const data = await api.get(`/detail/${id}`, { params });
      return formatItem(data);
    } catch (error) {
      console.error('获取详情失败:', error);
      return null;
    }
  }
};

// 导出API
export {
  movieApi,
  siteApi
};
export default movieApi; 