<template>
  <div class="search-container">
    <div class="search-header">
      <h1 class="search-title">搜索结果: {{ keyword }}</h1>
      
      <!-- 添加站点选择器 -->
      <div class="site-selector">
        <el-select v-model="selectedSite" placeholder="选择资源站" @change="handleSiteChange">
          <el-option
            v-for="site in sites"
            :key="site.id"
            :label="`${site.name}${siteResults[site.id] ? ' (' + siteResults[site.id] + ')' : ''}`"
            :value="site.id"
          />
        </el-select>
      </div>
    </div>
    
    <div v-if="loading" class="loading-container">
      <el-skeleton :rows="10" animated />
    </div>
    
    <div v-else-if="error" class="error-container">
      <el-empty :description="error">
        <el-button @click="searchMovies" type="primary">重试</el-button>
      </el-empty>
    </div>
    
    <div v-else-if="movies.length === 0" class="empty-container">
      <el-empty description="未找到相关影片">
        <el-button @click="$router.push('/')" type="primary">返回首页</el-button>
      </el-empty>
    </div>
    
    <div v-else class="movie-grid">
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="movie-card"
        @click="goToDetail(movie.id)"
      >
        <div class="movie-poster">
          <img
            :src="movie.coverImage || placeholderImage"
            :alt="movie.name"
            class="poster-img"
            @error="handleImageError"
          />
        </div>
        <div class="movie-info">
          <h3 class="movie-title">{{ movie.name }}</h3>
          <div class="movie-meta">
            <span v-if="movie.year" class="meta-item">{{ movie.year }}</span>
            <span v-if="movie.director" class="meta-item">导演: {{ movie.director }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="pagination-container" v-if="movies.length > 0">
      <el-pagination
        v-model:current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total"
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { movieApi, siteApi } from '@/api';
import { ElMessage } from 'element-plus';

const route = useRoute();
const router = useRouter();
const keyword = computed(() => route.query.keyword || '');
const urlSource = computed(() => route.query.source || ''); // 从URL获取站点参数
const movies = ref([]);
const loading = ref(false);
const loadingMore = ref(false);
const error = ref('');
const currentPage = ref(1);
const pageSize = ref(24);
const total = ref(0);
const placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNi0xOVQxMTowMTowOSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDYtMTlUMTE6MDU6MzUrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDYtMTlUMTE6MDU6MzUrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZjM3NDU3ZTUtNDdmZS1mYzRkLTgyYjktNmU4NzA3MDI3MjE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmYzNzQ1N2U1LTQ3ZmUtZmM0ZC04MmI5LTZlODcwNzAyNzIxOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmYzNzQ1N2U1LTQ3ZmUtZmM0ZC04MmI5LTZlODcwNzAyNzIxOSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjM3NDU3ZTUtNDdmZS1mYzRkLTgyYjktNmU4NzA3MDI3MjE5IiBzdEV2dDp3aGVuPSIyMDIzLTA2LTE5VDExOjAxOjA5KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7+HIawAADK5JREFUeJzt3W9MlPcdB/D3cVAUEMsM3B3YBgXxXP68Kqcwp1vcbGnXLk7XLEucuixZarI1abpk6brMLWkak3Vr1mVxMe2yJU6ndMnSLrWZtbRLCOtESUm9B8KDWs9CIzj54/FZH+4Oj+dP7nfACXh3fF7Ji3t+v7vnj08+PM/39/s9v5+hlFIgIvqQCd0FEFE4MSCISDAQJAQQCBITDJREJE1AUcCA2SqisCIAQKKm63PZ7RMFjZS4YYABIdKCdQciggEh0oJTLCINGBCigGOGIQIwWAEPHhNZYECINHAjDCAYCiKDASEKOL67RJQPtdxEtKI4xSKyUMuHjBgQIg04xSLSwK1NQBgQIm04xSKyYBcDZhgiMthiiLxhQIgsJKRAYkCIPGFAiDRgQIg0YECINGBAiDRgQIg0YECINGBAiDRgQIg0YECINGBAiDRwKyAA78ciMsK5JxaRdtEHKJGTgPDFD9G9YBkQogALyiSLASGyYPcE9lqGgbXkqiGJlJiQEtECwmBQ1EnJ/S8ck/RH6bYqiHUUt8/CthciLaxaDAaEKIC4DkKkAQNCpAEDQqSBW0cIAsxtJbLt0tWIhUOFyBoHDiKKEgwIkQYuLdIzGESrxoKVJfgcCEUTdvcPuPVkxTDlZwwTURBYLcDZbm4aWz7ZwMYjBKsTr1EFIrggS2R1iVJQNroXJbZYBmGCnVgUJi5dHRkQIl0YECILVtMptwPBFRMiJ6yH3KYj8r5gGJcIKWJYDZuJvOB0isiFFdVgLFG6lQ9FTCMvGBCiAGOLQWTBTTNihhFDxhzOcgZFZI3jiJAGnGJRVHMrIAC3X1FEcKtBCNHAkegYQHiGhCGgKGRX83A6QuQRWwwiazxThsgCA0LkEbtYRB7xTBkiCwwIkQbuBQTgFS2KfLZjgJT4rDnXxxdF94IlkSW3DgKM3bpLQiEHjgEXC0d2lIKQKj9DYHfCJTGjMBDcP0hhp+D7lfD5FcD/V7LwXCoKLXM9Qxm+B4kxIBRabgbADBqniERBF5RJFgNCZMFqBsElQiIixoOigNX5UV4Fo7BZtEYhZM+TcE2TwoLlI0Q+Y0CI9OCZMkTaMCBEGrAeQsQWgygwuB+EyAJbjBAKyYYFCgvXTwLjFIvIJ5xiEWnAgBBp4HZAAOBGJGb9NCJCStx4CoO/LSn1eYCh8GJ5hELKvTUK/7EeQqQBWwyigLNvRRgQIh9xikWkAQNCpEFIzlQk8pfbQSncI63+/wy+kktrGwwIhZVdCEL2zMxI5HZAWG+hsLJqGoKxfhGPuFhIZMHq3sOAEBFbDKJAsCuNMCBEGrj9qCXOPyl6sB5CpAHrIUQWrFoMN1sMPoGIQo8BIbJg3YXidIvIBwwIkQacYhFZcGM1igEh8gmfSUvhp9zZJm96w+kWkQdsMYg04D4QIsFqeAhILrVYfEgbRZVIdLGIwsLNp1AwHkQauXnSnQEhEpxi+YcBIR0YECIibK9oebyDkCgKcJGWSAPWQ4g0sZtiMSBEHrAeQqQB6yFEGjAgRBqwi0XkFVsMIuICLZE2DAgRr2oRhQFXsYgsWK5PuBUQbtCiKMB6CJEGDAgR+JRrIk24zYvIAw4cRFGCAeEDWkknq2bDzaeCE1niFIvIA6u+GJ9HS6QJF2mJNGAXi0gDBkQzrhFEH3axQoJ9K4pEXKQl8oDPpiXSgAEh4iMIvHOrN8ZFWiINGBAiDdhiEAUM7yAk8g8DQqQBp1hEYeBZC8KPk9YsEr8sWV6g5RNlKdC4SEvkI74mJ72UgmF9o0deLuEUi8gDbrOiaMEWgygoAnCDFiNCoWD9IBQimXo79Z8XEgaEgk65PTPk7ApZTqcYJ9KFq1hE4cAWgygo3Dv2cbpFZIktRjRTCoa/D6Pzg5QopAw3xwvBvlno8CkUDArpw0VaIl0YECINuA+ESDAOHERE3jAgRBrwqRREAeP2NGt1C8JFWgq0YL66gEhgzYPIIxyjKboFlVuv0iciBoQ0stvNGrQnFVH4MSBEGnDgIHLLigeEyB0MCJEGnGIRacB9IEQ+4RQLt6drADtKodHQFt1xnlOs+2N3kUiDoDYjDEi0kkrBsHicnVtLggE4BtT9v1uGhQGhaJXQGgcGhMKAASEiJxgmIg8YECINGBAiwgFuQSDSjAEh0oABISIOcEQUFgwIEfGXJRF5wM1VRJoxIEQaMCBExFUsQdWNCWO1ZY+bYxu92TtAXKQl8gknWESBwIAQSVbHeGSvhYSUIJ5HGwkYECINGBAiDRgQIg0YECINeE8skUccOIg0YECINGBAiDRgQIiIq1hE5AQDQqQB94EQEadYRHFmucPIxVu9GBCKBkrdw2kWkQU3p1iuh4TTKSLr4MQ+3zR2f/MDE0BkzSIIBCnx2Ry4/jMWahYwZkCIrBmG3ZKg9Udvf5kBoajiVshhMDK3WY1A2LUkDAmRLWXRarAeQmTNqkX5MIA+P1eVASGy4GY9ZH6c4FCrxYAQeWS1SDvfxbo8DnCKRWTb/XK6fmZ6DANCpEGYLzZxEReRBrdPgZBScCMJVsGw63a5tVHK1w9EGDccPz1S2rUmkWjB36FE1kL2iAGKJLz6k8hH7q1ZRMUNFZxiEWlg9ewPfnwKLOtgsDVCZI3jBpE3oXlmIgssFBYcOIgIAB9qRhQ4DAgRcRWLiMKCAaFIZHlLnFvLg+xiEQUFHzFApAGnWEQaMCBExGfTEmkVlDUL7gOhkHB2h5X5MUG5Ky76MSBEGnDgINKALQaRBzwGRFHCALY/dqNGbkSL7+uO9/3aMfIyMDA8FEtPe3f2/4Uw8IAQsW7/iH7TtSZ2XyOi8OE+ECIN2GIQacBFWiINGBAi4mPXiSgsGBAiDbhIS6QBn0lLQSPlyqNS3Kxb5KOQ/BRCV0gmIgyIVlKuoObvrXMlIAZDEr9cDgj3gZBOhvLpF8JuyEifzz/WYvgRkNxf5XSqh3FLFupk8v3q5/NtOcXSRimprUl37Bc6xnBrB6l7S3KMCukUE+9WRzEg+tQ+oHstS5FaAr7zXOr6WUH9OaOJsSLTNhiG6vgx1rWfZ75OqZWdY6jVnWF4HRB+vM0WWi2SqJiY18BQCobVJiilYKiFJdLp3/NvAWuPq35GcL7X3YQx9Zql4BujwixbDPPAYRWOecfO4z5yMWuTb+oNhG+B83NKFoW1LQZEn5UdSFM1q9zdUDCdnfOW9xyqTI+Yf4yEg3HQHLQWdl1P9w4aBkQfY8VnIub5f/P75odO1Hhk7SG/+FKkPxFuHbhOuVnPWC0cI/ShWMeABERumNMRKw5rlubXzdcnVD+tXjOHZV7a3p9fOp+p+HsQA8oqHIv2d+T5K3LNAzIVbNNLn49bXrMoNj+Gwtz+aVxPLCCHhlRxHo6FfbvZuliGwVvOjdD8uLmRyXp4ptZjEocxPrEI1jDzYd3iKwxIMMi3WI2cGSob6wPqFTQ/a75OZnx1WoYw4RiTrBFW03wnB5GQTnE0nJ+JL9LXOJ5mOXjt4sTe1iKr5w+kxxzl732u6vgx1vSuWdSdrh21GGHEgGgkpeGBVWXb2TSGMzUOt3yVs2FWZtpvn46Y27vM51idcDw/FGH7tJByFkYG5C4GJEiUcnbw2bUMS3F6cGYlFo6l3Hx9SvXMO+Zzvnj6SzK3Y07GEIYj/QkzIPMwIEGSr+qA84OzuOqoLbHC2b0c03J6EfM4pnVWna3cCDl39v/lOZjZGbGdHnp8PQOyAAPiJ3enu8oo+D6rKwfmJsW8BV7mzrGSHbPyuHnI3N4yjlcJcl24lSkgNgcSF2mJfBQTCXCKRUT5GBAizbgPhEgDNwMim5/3KkbkFqdYRJpxikWkAQNCpAEDQqQBF2mJNBEyBq5iEXnlYkC4SkVkxYXWxFhlQKSMLXj3FVFAqFhsScC8YhXjLxNpYizZ88WAEGnBLhaRZlykJdIgZt2bYothN/1iKIisLVkPyfrMPP1YXDJRRIrZm2JF5zZvokDLTrGWDYhUi++FJqJscS/vkKpzuYSIil2ZeWtCYDfZ4jSLqIAxv8WwDEjcMsewvDCKiBZxvR6y3CItERUo0trV+P8AhR4WVu20AuQAAAAASUVORK5CYII=';

// 站点相关数据
const sites = ref([]);
const selectedSite = ref('default');
const siteResults = ref({});  // 存储每个站点的搜索结果数量

// 加载站点列表
const loadSites = async () => {
  try {
    const data = await siteApi.getAllSites();
    console.log('站点API返回数据:', data);
    
    // 确保sites初始化为数组
    sites.value = [];
    
    if (data && Array.isArray(data)) {
      // 只显示激活的站点
      sites.value = data.filter(site => site.active === true);
      console.log('过滤后的可用站点:', sites.value);
      
      // 如果URL中有站点参数，优先使用
      if (urlSource.value) {
        selectedSite.value = urlSource.value;
      }
      // 否则，如果没有选中的站点，默认选择第一个
      else if ((!selectedSite.value || selectedSite.value === 'default') && sites.value.length > 0) {
        selectedSite.value = sites.value[0].id;
      }
      
      console.log('当前选中站点ID:', selectedSite.value);
    } else {
      console.error('站点数据格式错误:', data);
    }
    return true; // 返回成功
  } catch (err) {
    console.error('加载站点列表失败:', err);
    return false; // 返回失败
  }
};

// 懒加载相关配置
const observer = ref(null);

// 获取所有站点的搜索结果数量
const getAllSitesResults = async () => {
  if (!keyword.value) return;
  
  // 清空之前的结果
  siteResults.value = {};
  
  // 为每个站点获取搜索结果数量
  const promises = sites.value.map(async (site) => {
    try {
      const searchOptions = {
        page: 1,
        pageSize: 1,  // 只需要获取总数，所以页大小设为1
        source: site.id
      };
      
      const data = await movieApi.search(keyword.value, searchOptions);
      
      // 更新站点结果数量
      if (data && typeof data.total === 'number') {
        siteResults.value[site.id] = data.total;
      }
    } catch (err) {
      console.error(`获取站点 ${site.name} 的结果数量失败:`, err);
      siteResults.value[site.id] = 0;
    }
  });
  
  // 等待所有请求完成
  await Promise.all(promises);
};

// 搜索电影
const searchMovies = async () => {
  if (!keyword.value) return;
  
  loading.value = true;
  error.value = '';
  loadingMore.value = false;
  
  console.log('开始搜索，使用站点:', selectedSite.value);
  
  try {
    const searchOptions = {
      page: currentPage.value,
      pageSize: pageSize.value,
      source: selectedSite.value
    };
    
    console.log('搜索参数:', searchOptions);
    
    const data = await movieApi.search(keyword.value, searchOptions);
    
    console.log('搜索结果:', data);
    
    // 处理新的返回值结构
    if (data.list) {
      movies.value = data.list;
      total.value = data.total || 0;
    } else {
      // 兼容旧格式
      movies.value = Array.isArray(data) ? data : [];
      total.value = movies.value.length;
    }
    
    if (movies.value.length === 0) {
      error.value = '未找到相关影片';
    }
    
    // 获取所有站点的结果数量
    await getAllSitesResults();
    
  } catch (err) {
    console.error('搜索失败:', err);
    error.value = '搜索失败，请稍后重试';
    ElMessage.error('搜索失败');
  } finally {
    loading.value = false;
  }
};

// 修改图片错误处理函数
const handleImageError = (e) => {
  console.log('图片加载错误，使用占位图:', e.target.src);
  const movieName = e.target.alt || '未知电影';
  // 先尝试使用 base64 占位图
  if (e.target.src !== placeholderImage) {
    e.target.src = placeholderImage;
  } else {
    // 如果 base64 占位图也失败，使用在线占位图服务
    e.target.src = `https://placehold.co/300x450/2c3e50/ffffff/png?text=${encodeURIComponent(movieName)}`;
  }
};

// 跳转到详情页
const goToDetail = (id) => {
  router.push({ 
    name: 'detail', 
    params: { id },
    query: { source: selectedSite.value }
  });
};

// 处理页码变化
const handlePageChange = (page) => {
  currentPage.value = page;
  searchMovies();
};

// 处理站点变化
const handleSiteChange = () => {
  console.log('站点切换，当前选择:', selectedSite.value);
  
  // 重置为第一页
  currentPage.value = 1;
  
  // 直接调用搜索函数，让新站点生效
  searchMovies();
  
  // 然后更新URL，保留搜索关键词但更新站点ID
  router.push({
    name: 'search',
    query: {
      keyword: keyword.value,
      source: selectedSite.value
    }
  });
};

// 监听关键词变化
watch(() => keyword.value, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    currentPage.value = 1;
    searchMovies();
  }
});

onMounted(() => {
  // 先加载站点列表
  loadSites().then(() => {
    // 等站点列表加载完成后，确保selectedSite已正确设置
    console.log('站点加载完成，当前选中站点:', selectedSite.value);
    console.log('URL中的站点参数:', urlSource.value);
    
    // 确保URL中的source参数优先被使用
    if (urlSource.value && urlSource.value !== selectedSite.value) {
      console.log('使用URL中的站点参数:', urlSource.value);
      selectedSite.value = urlSource.value;
    }
    
    // 创建图片懒加载观察器
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const dataSrc = img.getAttribute('data-src');
          if (dataSrc) {
            img.src = dataSrc;
            img.removeAttribute('data-src');
            observer.value.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });
    
    // 然后执行搜索
    if (keyword.value) {
      console.log('开始执行搜索，使用站点:', selectedSite.value);
      searchMovies();
    }
  });
});

onUnmounted(() => {
  // 清理观察器
  if (observer.value) {
    observer.value.disconnect();
  }
});

// 初始化懒加载图片
const initLazyLoad = () => {
  setTimeout(() => {
    const images = document.querySelectorAll('.lazy-load');
    images.forEach(img => {
      observer.value?.observe(img);
    });
  }, 100);
};

// 添加一个监听器，在movies更新后初始化懒加载
watch(() => movies.value, () => {
  initLazyLoad();
}, { deep: true });
</script>

<style scoped>
.search-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-title {
  font-size: 1.5rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--title-color);
}

.site-selector {
  min-width: 150px;
}

.loading-container,
.error-container,
.empty-container {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
}

.movie-card {
  background-color: var(--card-bg-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.movie-poster {
  position: relative;
  width: 100%;
  height: 50%;
  overflow: hidden;
  background-color: #f0f0f0; /* 添加背景色 */
}

.poster-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
  background-color: #f0f0f0;
}

.lazy-load {
  opacity: 0;
}

.lazy-load[src] {
  opacity: 1;
}

.movie-info {
  padding: 10px;
}

.movie-title {
  font-size: 1rem;
  margin-bottom: 5px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--title-color);
}

.movie-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--text-color-secondary);
}

.meta-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pagination-container {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .search-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .movie-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
}
</style> 