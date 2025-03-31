<template>
  <div class="home">
    <div class="container">
      <div class="welcome-section">
        <h1>欢迎使用在线影视资源播放系统</h1>
        <p>输入关键词搜索你想看的影视资源</p>
        <div class="search-container">
          <el-input
            v-model="keyword"
            placeholder="请输入电影、电视剧名称"
            class="home-search-input"
            clearable
            @keyup.enter="handleSearch"
          >
            <template #append>
              <el-button @click="handleSearch" type="primary">搜索</el-button>
            </template>
          </el-input>
        </div>
        
        <div class="example-keywords">
          <span>热门搜索：</span>
          <el-tag
            v-for="item in hotKeywords"
            :key="item"
            class="keyword-tag"
            @click="quickSearch(item)"
          >
            {{ item }}
          </el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const keyword = ref('');

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

const handleSearch = () => {
  if (keyword.value.trim()) {
    router.push({
      name: 'search',
      query: { keyword: keyword.value }
    });
  }
};

const quickSearch = (word) => {
  keyword.value = word;
  handleSearch();
};
</script>

<style scoped>
.home {
  padding: 40px 0;
}

.welcome-section {
  text-align: center;
  padding: 60px 0;
  max-width: 600px;
  margin: 0 auto;
}

.welcome-section h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.welcome-section p {
  font-size: 16px;
  margin-bottom: 30px;
  color: #666;
}

.search-container {
  margin-bottom: 20px;
}

.home-search-input {
  width: 100%;
}

.example-keywords {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.keyword-tag {
  cursor: pointer;
  transition: all 0.3s;
}

.keyword-tag:hover {
  transform: scale(1.05);
}
</style> 