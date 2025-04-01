<template>
  <div class="home-container">
    <div class="search-box">
      <h1 class="site-title">影视资源播放站</h1>
      <p class="site-desc">搜索并在线观看最新影视资源</p>
      
      <div class="search-form">
        <input 
          v-model="keyword" 
          @keyup.enter="searchMovies"
          type="text" 
          class="search-input" 
          placeholder="输入影片名称、演员或导演..."
        />
        <button class="search-btn" @click="searchMovies">搜索</button>
      </div>
      
      <!-- 添加站点选择器 -->
      <div class="site-selector">
        <el-select v-model="selectedSite" placeholder="选择资源站" size="large">
          <el-option
            v-for="site in sites"
            :key="site.id"
            :label="site.name"
            :value="site.id"
          />
        </el-select>
      </div>
    </div>
    
    <div class="features">
      <div class="feature">
        <div class="feature-icon">🔍</div>
        <div class="feature-title">快速搜索</div>
        <div class="feature-desc">智能匹配多个资源站点的影视内容</div>
      </div>
      
      <div class="feature">
        <div class="feature-icon">🎬</div>
        <div class="feature-title">在线播放</div>
        <div class="feature-desc">无需下载，直接在线观看高清视频</div>
      </div>
      
      <div class="feature">
        <div class="feature-icon">📱</div>
        <div class="feature-title">移动友好</div>
        <div class="feature-desc">适配各种设备，随时随地观看</div>
      </div>
    </div>
    
    <!-- <div class="admin-link-container">
      <router-link to="/admin" class="admin-link">
        <span class="admin-icon">⚙️</span>
        <span class="admin-text">管理中心</span>
      </router-link>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { siteApi } from '@/api';
import { ElMessage } from 'element-plus';

const router = useRouter();
const keyword = ref('');

// 站点相关
const sites = ref([]);
const selectedSite = ref('');

// 加载站点列表
const loadSites = async () => {
  try {
    const data = await siteApi.getAllSites();
    console.log('首页站点数据:', data);
    
    // 确保sites初始化为数组
    sites.value = [];
    
    if (data && Array.isArray(data)) {
      // 只显示激活的站点
      sites.value = data.filter(site => site.active === true);
      console.log('首页可用站点:', sites.value);
      
      // 如果没有选中的站点，默认选择第一个
      if (!selectedSite.value && sites.value.length > 0) {
        selectedSite.value = sites.value[0].id;
        console.log('首页默认选中站点:', selectedSite.value);
      }
    } else {
      console.error('站点数据格式错误:', data);
    }
  } catch (err) {
    console.error('加载站点列表失败:', err);
  }
};

// 热门搜索关键词
const hotKeywords = [
  '不良人',
  '庆余年',
  '三体',
  '狂飙',
  '鬼灭之刃',
  '星际穿越',
  '满江红'
];

const searchMovies = () => {
  if (!keyword.value.trim()) return;
  
  console.log('首页执行搜索，选中站点:', selectedSite.value);
  
  // 确保站点参数始终传递，即使是默认站点
  router.push({
    name: 'search',
    query: { 
      keyword: keyword.value.trim(),
      source: selectedSite.value || 'default'
    }
  });
};

const quickSearch = (word) => {
  keyword.value = word;
  searchMovies();
};

onMounted(() => {
  loadSites();
});
</script>

<style scoped>
.home-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.search-box {
  margin-bottom: 60px;
}

.site-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: var(--title-color);
}

.site-desc {
  font-size: 1.2rem;
  color: var(--text-color-secondary);
  margin-bottom: 30px;
}

.search-form {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  flex: 1;
  padding: 12px 20px;
  font-size: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 4px 0 0 4px;
  outline: none;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: var(--primary-color);
}

.search-btn {
  padding: 12px 24px;
  font-size: 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-btn:hover {
  background-color: var(--primary-color-dark);
}

.site-selector {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
  flex-wrap: wrap;
  gap: 20px;
}

.feature {
  flex: 1;
  min-width: 200px;
  padding: 20px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--title-color);
}

.feature-desc {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
}

.admin-link-container {
  margin-top: 40px;
}

.admin-link {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--card-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s;
}

.admin-link:hover {
  background-color: var(--primary-color-light);
  border-color: var(--primary-color);
}

.admin-icon {
  font-size: 1.2rem;
  margin-right: 8px;
}

.admin-text {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .site-title {
    font-size: 2rem;
  }
  
  .search-form {
    flex-direction: column;
  }
  
  .search-input {
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .search-btn {
    border-radius: 4px;
  }
  
  .features {
    flex-direction: column;
  }
}
</style> 