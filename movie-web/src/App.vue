<template>
  <div id="app">
    <header class="site-header">
      <div class="header-container">
        <router-link to="/" class="site-logo">
          影视资源播放
        </router-link>
        
        <nav class="site-nav">
          <router-link to="/" class="nav-item">首页</router-link>
          <!-- <router-link to="/admin" class="nav-item">管理中心</router-link> -->
        </nav>
      </div>
    </header>
    
    <main class="site-main">
      <router-view />
    </main>
    
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-content">
          影视资源在线播放系统 &copy; {{ new Date().getFullYear() }}
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const keyword = ref('');

const handleSearch = () => {
  if (keyword.value.trim()) {
    router.push({
      name: 'search',
      query: { keyword: keyword.value }
    });
  }
};
</script>

<style>
/* 全局样式变量 */
:root {
  --primary-color: #1890ff;
  --primary-color-light: #e6f7ff;
  --primary-color-dark: #096dd9;
  --secondary-color: #d9d9d9;
  --success-color: #52c41a;
  --warning-color: #faad14;
  --error-color: #f5222d;
  --info-color: #1890ff;
  
  --success-bg: #f6ffed;
  --error-bg: #fff2f0;
  --warning-bg: #fffbe6;
  
  --bg-color: #fff;
  --card-bg-color: #fff;
  --disabled-bg: #f5f5f5;
  
  --text-color: #333;
  --text-color-secondary: #666;
  --title-color: #333;
  
  --border-color: #e8e8e8;
  
  --header-height: 60px;
  --footer-height: 60px;
}

/* 深色模式样式变量 */
@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #1890ff;
    --primary-color-light: #112136;
    --primary-color-dark: #0050b3;
    
    --bg-color: #121212;
    --card-bg-color: #1f1f1f;
    --disabled-bg: #292929;
    
    --text-color: #e0e0e0;
    --text-color-secondary: #a0a0a0;
    --title-color: #e6e6e6;
    
    --border-color: #303030;
  }
}

/* 基础样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-color);
  background-color: var(--bg-color);
}

a {
  color: var(--primary-color);
  text-decoration: none;
}

ul, ol {
  list-style: none;
}

/* 布局样式 */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.site-header {
  height: var(--header-height);
  background-color: var(--card-bg-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
}

.site-nav {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: var(--text-color);
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: var(--primary-color);
  background-color: var(--primary-color-light);
}

.site-main {
  flex: 1;
  padding-bottom: 40px;
}

.site-footer {
  height: var(--footer-height);
  background-color: var(--card-bg-color);
  border-top: 1px solid var(--border-color);
}

.footer-container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-content {
  color: var(--text-color-secondary);
  text-align: center;
  font-size: 0.9rem;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .header-container {
    padding: 0 15px;
  }
  
  .site-logo {
    font-size: 1.3rem;
  }
  
  .nav-item {
    padding: 6px 8px;
    font-size: 0.9rem;
  }
}
</style> 