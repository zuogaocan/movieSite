<template>
  <div class="player-container">
    <div class="player-wrapper">
      <div v-if="loading" class="loading-container">
        <el-skeleton animated />
      </div>
      
      <div v-else-if="error" class="error-container">
        <el-empty :description="error">
          <el-button @click="$router.back()" type="primary">返回</el-button>
        </el-empty>
      </div>
      
      <template v-else-if="movie">
        <div class="player-header">
          <h1 class="player-title">
            {{ movie.name }} 
            <span v-if="currentEpisode" class="player-episode">第{{ currentEpisode }}集</span>
          </h1>
        </div>
        
        <div class="player-box">
          <!-- 使用iframe播放器替代DPlayer -->
          <iframe 
            v-if="iframeUrl" 
            :src="iframeUrl" 
            frameborder="0" 
            scrolling="no" 
            allowfullscreen="true"
            class="player-iframe"
          ></iframe>
          
          <!-- 保留DPlayer作为备选 -->
          <div v-else ref="playerRef" class="dplayer"></div>
        </div>
        
        <div class="player-info">
          <el-card>
            <template #header>
              <div class="player-info-header">
                <div>当前播放: {{ movie.name }} {{ currentEpisode ? `第${currentEpisode}集` : '' }}</div>
                <div class="player-controls">
                  <el-button 
                    size="small" 
                    @click="playPrevious" 
                    :disabled="!hasPrevious"
                  >
                    上一集
                  </el-button>
                  <el-button 
                    size="small" 
                    @click="playNext" 
                    :disabled="!hasNext"
                    type="primary"
                  >
                    下一集
                  </el-button>
                </div>
              </div>
            </template>
            
            <div class="episode-list" v-if="movie.episodes && movie.episodes.length">
              <div class="episodes-title">选集</div>
              <div class="episodes-grid">
                <el-button
                  v-for="item in movie.episodes"
                  :key="item.episode"
                  @click="playEpisode(item.episode)"
                  :type="item.episode === currentEpisode ? 'primary' : ''"
                  class="episode-btn"
                >
                  {{ item.episode }}
                </el-button>
              </div>
            </div>
          </el-card>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { movieApi } from '@/api';
import { ElMessage } from 'element-plus';
import DPlayer from 'dplayer';
import Hls from 'hls.js';
import { noImageBase64 } from '@/assets/images/no-image';

const route = useRoute();
const router = useRouter();
const movieId = computed(() => route.params.id);
const currentEpisode = computed(() => route.params.episode || '');
const sourceId = computed(() => route.query.source || ''); // 添加源站点ID

const movie = ref(null);
const loading = ref(false);
const error = ref('');
const player = ref(null);
const playerRef = ref(null);
const iframeUrl = ref(''); // 存储iframe的URL

const placeholderImage = noImageBase64;

// 获取解析url - 使用原始解析接口
const getParseUrl = (url) => {
  console.log('使用hoplayer解析接口播放:', url);
  return `https://hoplayer.com/index.html?url=${(url)}`;
};

// 初始化播放器 - 修改为直接使用iframe播放
const initPlayer = (url) => {
  if (!url || typeof url !== 'string') {
    console.error('无效的视频URL:', url);
    error.value = '无效的视频地址';
    return;
  }
  
  console.log('准备播放视频URL:', url);
  
  // 检查URL格式
  if (!url.startsWith('http')) {
    console.warn('URL格式可能不正确，尝试添加协议:', url);
    url = 'https:' + url;
  }
  
  // 直接使用解析接口生成iframe URL
  const parseUrl = getParseUrl(url);
  console.log('设置iframe解析URL:', parseUrl);
  iframeUrl.value = parseUrl;
  
  // 清理旧的DPlayer实例
  if (player.value) {
    player.value.destroy();
    player.value = null;
  }
};

// 获取当前剧集播放地址
const getCurrentPlayUrl = () => {
  if (!movie.value || !movie.value.episodes || !movie.value.episodes.length) {
    console.error('没有可用的剧集信息');
    return '';
  }
  
  console.log('所有剧集:', movie.value.episodes);
  console.log('当前剧集值:', currentEpisode.value);
  
  // 首先尝试找到完全匹配的剧集
  let episode = movie.value.episodes.find(ep => ep.episode === currentEpisode.value);
  
  // 如果没有找到，尝试模糊匹配
  if (!episode && movie.value.episodes.length > 0) {
    // 尝试把currentEpisode转为数字后匹配
    const episodeNum = parseInt(currentEpisode.value);
    if (!isNaN(episodeNum)) {
      // 找到最接近的剧集
      episode = movie.value.episodes.find(ep => {
        const epNum = parseInt(ep.episode);
        return !isNaN(epNum) && epNum === episodeNum;
      });
    }
    
    // 如果还是没找到，就使用第一集
    if (!episode) {
      episode = movie.value.episodes[0];
      console.log('未找到匹配剧集，使用第一集:', episode);
    }
  }
  
  if (!episode) {
    console.error('无法找到有效的剧集');
    return '';
  }
  
  console.log('找到的剧集:', episode);
  
  // 确保URL是字符串
  if (!episode.url || typeof episode.url !== 'string') {
    console.error('剧集URL无效:', episode);
    return '';
  }
  
  // 尝试返回剧集URL，如果URL不是以http开头，添加https:
  const url = episode.url.trim();
  if (url.startsWith('//')) {
    return `https:${url}`;
  } else if (!url.startsWith('http')) {
    return `https://${url}`;
  }
  
  return url;
};

// 获取影片详情
const fetchMovieDetail = async () => {
  if (!movieId.value) return;
  
  loading.value = true;
  error.value = '';
  
  try {
    // 传入站点来源参数
    const data = await movieApi.getDetail(movieId.value, sourceId.value);
    movie.value = data;
    
    if (!data) {
      error.value = '未找到该影片';
      return;
    }
    
    // 初始化播放器
    const playUrl = getCurrentPlayUrl();
    if (playUrl) {
      initPlayer(playUrl);
    } else {
      error.value = '未找到播放地址';
    }
  } catch (err) {
    console.error('获取详情失败:', err);
    error.value = '获取影片详情失败，请稍后重试';
    ElMessage.error('获取影片详情失败');
  } finally {
    loading.value = false;
  }
};

// 播放指定剧集
const playEpisode = (episode) => {
  router.push({ 
    name: 'play', 
    params: { id: movieId.value, episode },
    query: { source: sourceId.value } // 保持站点来源ID
  });
};

// 是否有上一集
const hasPrevious = computed(() => {
  if (!movie.value || !movie.value.episodes || !currentEpisode.value) return false;
  const currentIndex = movie.value.episodes.findIndex(ep => ep.episode === currentEpisode.value);
  return currentIndex > 0;
});

// 是否有下一集
const hasNext = computed(() => {
  if (!movie.value || !movie.value.episodes || !currentEpisode.value) return false;
  const currentIndex = movie.value.episodes.findIndex(ep => ep.episode === currentEpisode.value);
  return currentIndex < movie.value.episodes.length - 1 && currentIndex !== -1;
});

// 播放上一集
const playPrevious = () => {
  if (!hasPrevious.value) return;
  
  const currentIndex = movie.value.episodes.findIndex(ep => ep.episode === currentEpisode.value);
  const prevEpisode = movie.value.episodes[currentIndex - 1].episode;
  playEpisode(prevEpisode);
};

// 播放下一集
const playNext = () => {
  if (!hasNext.value) return;
  
  const currentIndex = movie.value.episodes.findIndex(ep => ep.episode === currentEpisode.value);
  const nextEpisode = movie.value.episodes[currentIndex + 1].episode;
  playEpisode(nextEpisode);
};

// 监听剧集变化
watch(() => currentEpisode.value, () => {
  if (movie.value) {
    const playUrl = getCurrentPlayUrl();
    if (playUrl) {
      initPlayer(playUrl);
    }
  }
});

// 销毁播放器
onBeforeUnmount(() => {
  if (player.value) {
    player.value.destroy();
  }
});

onMounted(() => {
  fetchMovieDetail();
});

// 获取海报URL的函数简化为直接使用coverImage或占位图
const getPosterUrl = (movie) => {
  return (movie && movie.coverImage) ? movie.coverImage : placeholderImage;
};
</script>

<style scoped>
.player-header {
  margin-bottom: 20px;
  color: var(--light-text-color);
}

.player-title {
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.player-episode {
  font-size: 16px;
  margin-left: 10px;
  color: #aaa;
}

.loading-container,
.error-container {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--light-text-color);
}

.player-info {
  margin-top: 20px;
}

.player-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.episodes-title {
  margin-bottom: 10px;
  font-weight: 600;
}

.episodes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 8px;
}

.episode-btn {
  padding: 8px;
}

.player-box {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 7%; /* 减小高度比例以减少黑边 */
  background-color: #000;
  overflow: hidden;
  border-radius: 4px;
}

.dplayer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.player-iframe {
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style> 