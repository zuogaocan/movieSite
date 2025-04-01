<template>
  <div class="detail-page">
    <div class="container">
      <div v-if="loading" class="loading-container">
        <el-skeleton :rows="10" animated />
      </div>
      
      <div v-else-if="error" class="error-container">
        <el-empty :description="error">
          <el-button @click="$router.back()">返回</el-button>
        </el-empty>
      </div>
      
      <template v-else-if="movie">
        <div class="detail-container">
          <div class="detail-header">
            <div class="detail-poster">
              <img 
                :src="movie.coverImage" 
                :alt="movie.name"
                @error="handleImageError"
              >
            </div>
            
            <div class="detail-info">
              <h1 class="detail-title">{{ movie.name }}</h1>
              
              <div class="detail-meta">
                <div class="detail-item" v-if="movie.score">
                  <span class="detail-label">评分:</span>
                  <el-rate
                    v-model="movieScore"
                    disabled
                    text-color="#ff9900"
                  />
                  <span>{{ movie.score }}</span>
                </div>
                
                <div class="detail-item" v-if="movie.type">
                  <span class="detail-label">类型:</span>
                  <span>{{ movie.type }}</span>
                </div>
                
                <div class="detail-item" v-if="movie.director">
                  <span class="detail-label">导演:</span>
                  <span>{{ movie.director }}</span>
                </div>
                
                <div class="detail-item" v-if="movie.actor">
                  <span class="detail-label">演员:</span>
                  <span>{{ movie.actor }}</span>
                </div>
                
                <div class="detail-item" v-if="movie.area">
                  <span class="detail-label">地区:</span>
                  <span>{{ movie.area }}</span>
                </div>
                
                <div class="detail-item" v-if="movie.year">
                  <span class="detail-label">年份:</span>
                  <span>{{ movie.year }}</span>
                </div>
                
                <div class="detail-item" v-if="movie.status">
                  <span class="detail-label">状态:</span>
                  <span>{{ movie.status }}</span>
                </div>
                
                <div class="detail-item" v-if="movie.updateTime">
                  <span class="detail-label">更新时间:</span>
                  <span>{{ movie.updateTime }}</span>
                </div>
              </div>
              
              <div class="detail-desc" v-if="movie.description">
                <div class="detail-label">剧情简介:</div>
                <p>{{ movie.description }}</p>
              </div>
            </div>
          </div>
          
          <div class="episodes-container" v-if="movie.episodes && movie.episodes.length">
            <h2 class="episodes-title">选集播放</h2>
            <div class="episodes-grid">
              <el-button
                v-for="item in movie.episodes"
                :key="item.episode"
                @click="playVideo(movie.id, item.episode)"
                :type="item.episode === currentEpisode ? 'primary' : ''"
                class="episode-btn"
              >
                {{ item.episode }}
              </el-button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { movieApi } from '@/api';
import { ElMessage } from 'element-plus';
import { noImageBase64 } from '@/assets/images/no-image';

const route = useRoute();
const router = useRouter();
const movieId = computed(() => route.params.id);
const currentEpisode = computed(() => route.query.episode || '');
const sourceId = computed(() => route.query.source || '');

const movie = ref(null);
const loading = ref(false);
const error = ref('');

const placeholderImage = noImageBase64;

// 获取海报URL
const getPosterUrl = (movie) => {
  if (!movie) return placeholderImage;
  
  // 直接使用已处理过的coverImage字段
  const url = movie.coverImage || '';
  console.log('详情页图片URL:', url); // 调试用
  
  // 如果URL为空或无效，使用默认图片
  if (!url || url === 'null' || url === 'undefined') {
    return placeholderImage;
  }
  
  return url;
};

// 计算评分
const movieScore = computed(() => {
  if (!movie.value || !movie.value.score) return 0;
  return parseFloat(movie.value.score) / 2; // 假设评分是10分制，转为5分制
});

// 获取影片详情
const fetchMovieDetail = async () => {
  if (!movieId.value) return;
  
  loading.value = true;
  error.value = '';
  
  try {
    const data = await movieApi.getDetail(movieId.value, sourceId.value);
    movie.value = data;
    console.log('详情数据:', movie.value); // 调试用
    
    if (!data) {
      error.value = '未找到该影片';
    }
  } catch (err) {
    console.error('获取详情失败:', err);
    error.value = '获取影片详情失败，请稍后重试';
    ElMessage.error('获取影片详情失败');
  } finally {
    loading.value = false;
  }
};

// 播放视频
const playVideo = (id, episode) => {
  router.push({ 
    name: 'play', 
    params: { id, episode },
    query: { source: sourceId.value }
  });
};

// 图片加载失败处理
const handleImageError = (e) => {
  console.log('详情页图片加载失败，使用占位图');
  e.target.src = placeholderImage;
};

onMounted(() => {
  fetchMovieDetail();
});
</script>

<style scoped>
.detail-page {
  padding: 20px 0;
}

.loading-container,
.error-container {
  margin: 40px 0;
  display: flex;
  justify-content: center;
}

.episode-btn {
  min-width: 60px;
  margin: 5px;
}

.detail-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
</style> 