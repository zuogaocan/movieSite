<template>
  <div class="search-page">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">搜索结果: {{ keyword }}</h1>
      </div>
      
      <div v-if="loading" class="loading-container">
        <el-skeleton :rows="5" animated />
      </div>
      
      <div v-else-if="error" class="error-container">
        <el-empty :description="error" />
      </div>
      
      <div v-else-if="!movies.length" class="empty-container">
        <el-empty description="未找到相关影片，请尝试其他关键词" />
      </div>
      
      <div v-else class="search-results">
        <div class="movie-grid">
          <div 
            v-for="movie in movies" 
            :key="movie.id" 
            class="movie-card" 
            @click="goToDetail(movie.id)"
          >
            <div class="movie-poster">
              <img 
                :src="movie.coverImage" 
                :alt="movie.name"
                @error="handleImageError"
              >
            </div>
            <div class="movie-info">
              <div class="movie-title">{{ movie.name }}</div>
              <div class="movie-desc">{{ movie.type }} / {{ movie.status }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { movieApi } from '@/api';
import { ElMessage } from 'element-plus';
import { noImageBase64 } from '@/assets/images/no-image';

const route = useRoute();
const router = useRouter();
const keyword = computed(() => route.query.keyword || '');
const movies = ref([]);
const loading = ref(false);
const error = ref('');
const placeholderImage = noImageBase64;

// 图片加载失败处理
const handleImageError = (e) => {
  console.log('图片加载失败，使用占位图');
  e.target.src = placeholderImage;
};

// 获取搜索结果
const fetchSearchResults = async () => {
  if (!keyword.value) return;
  
  console.log('开始搜索关键词:', keyword.value);
  loading.value = true;
  error.value = '';
  
  try {
    const data = await movieApi.search(keyword.value);
    console.log('搜索API返回原始数据:', data);
    
    const searchResults = data || [];
    console.log('处理后的搜索结果数量:', searchResults.length);
    
    if (searchResults.length > 0) {
      // 为每个搜索结果项获取详细信息
      const detailedResults = await Promise.all(
        searchResults.map(async (item) => {
          if (!item.id) return item;
          
          try {
            // 获取详细信息
            const detailData = await movieApi.getDetail(item.id);
            if (detailData) {
              console.log(`获取到 ${item.name} 的详细信息:`, detailData);
              return {
                ...item,
                ...detailData,
                // 确保使用详情的图片URL
                coverImage: detailData.coverImage || item.coverImage
              };
            }
          } catch (detailErr) {
            console.error(`无法获取 ${item.name} 的详细信息:`, detailErr);
          }
          return item;
        })
      );
      
      movies.value = detailedResults;
    } else {
      movies.value = [];
      console.log('搜索结果为空，显示空结果提示');
    }
  } catch (err) {
    console.error('搜索失败:', err);
    error.value = '搜索失败，请稍后重试';
    ElMessage.error('搜索失败，请稍后重试');
  } finally {
    loading.value = false;
  }
};

// 跳转到详情页
const goToDetail = (id) => {
  router.push({ name: 'detail', params: { id } });
};

// 监听关键词变化
watch(() => route.query.keyword, () => {
  fetchSearchResults();
});

onMounted(() => {
  fetchSearchResults();
});
</script>

<style scoped>
.search-page {
  padding: 20px 0;
}

.loading-container,
.error-container,
.empty-container {
  margin: 40px 0;
  display: flex;
  justify-content: center;
}

.movie-card {
  cursor: pointer;
}

.movie-poster {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  padding-top: 140%; /* 设置宽高比 10:14 */
}

.movie-poster img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.movie-poster img:hover {
  transform: scale(1.05);
}

.movie-info {
  padding: 10px;
}

.movie-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-desc {
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style> 