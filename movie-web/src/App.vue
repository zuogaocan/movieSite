<template>
  <div class="app">
    <header class="app-header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <router-link to="/">影视资源播放</router-link>
          </div>
          <div class="search-box">
            <el-input
              v-model="keyword"
              placeholder="搜索电影、电视剧"
              class="search-input"
              @keyup.enter="handleSearch"
            >
              <template #append>
                <el-button @click="handleSearch">搜索</el-button>
              </template>
            </el-input>
          </div>
        </div>
      </div>
    </header>

    <main class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="app-footer">
      <div class="container">
        <p>© 2023 在线影视资源播放系统</p>
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
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo a {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color);
}

.search-box {
  width: 400px;
}

.app-main {
  flex: 1;
}

.app-footer {
  background-color: #f2f2f2;
  padding: 20px 0;
  font-size: 14px;
  color: #666;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 10px;
  }
  
  .search-box {
    width: 100%;
  }
}
</style> 