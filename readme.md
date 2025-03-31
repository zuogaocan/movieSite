# 影视播放器组件说明文档

## 一、组件概述

这是一个基于 Vue3 的视频播放器组件，主要功能包括：
- 视频播放（支持 iframe 嵌入式播放）
- 剧集切换
- 自适应布局
- 错误处理和加载状态展示

## 二、主要功能模块

### 1. 播放器核心功能
```js
const getParseUrl = (url) => {
  return `https://hoplayer.com/index.html?url=${(url)}`;
};
```
- 使用 hoplayer 解析接口进行视频解析
- 支持自动补全 URL 协议
- 自动处理不规范的 URL 格式

### 2. 剧集控制
```js
const playEpisode = (episode) => {
  router.push({ name: 'play', params: { id: movieId.value, episode } });
};
```
- 支持上一集/下一集切换
- 剧集列表快速选择
- 智能剧集匹配算法

### 3. 布局与样式
```css
.player-box {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 7%;
  background-color: #000;
  overflow: hidden;
  border-radius: 4px;
}
```
- 响应式布局设计
- 自适应视频比例
- 现代化 UI 设计

## 三、主要特性

1. **智能解析**
   - 自动处理多种视频源格式
   - 支持 M3U8 流媒体
   - 自动补全协议头

2. **用户体验**
   - 流畅的剧集切换
   - 清晰的播放状态提示
   - 优雅的加载过渡

3. **错误处理**
   - 完整的错误提示系统
   - 友好的用户提示
   - 自动回退机制

## 四、使用方法

### 1. 路由配置
```js
{
  path: '/play/:id/:episode?',
  name: 'play',
  component: PlayerView
}
```

### 2. 参数说明
- `id`: 影片ID（必需）
- `episode`: 剧集号（可选）

### 3. 事件处理
- `playPrevious`: 播放上一集
- `playNext`: 播放下一集
- `playEpisode`: 播放指定剧集

## 五、注意事项

1. **URL 处理**
   - 确保视频源 URL 格式正确
   - 自动补全 HTTP/HTTPS 协议
   - 处理特殊字符转义

2. **性能优化**
   - 组件销毁时自动清理资源
   - 按需加载视频资源
   - 智能缓存处理

3. **兼容性**
   - 支持主流浏览器
   - 自适应不同屏幕尺寸
   - 优雅降级处理

## 六、后续优化建议

1. **播放器优化**
   - 添加画质切换功能
   - 支持倍速播放
   - 添加播放记录功能

2. **UI 改进**
   - 优化移动端体验
   - 添加深色模式支持
   - 优化加载动画

3. **功能扩展**
   - 添加弹幕功能
   - 支持播放列表
   - 添加收藏功能

## 七、技术栈

- Vue 3
- Vue Router
- Element Plus
- HLS.js (备选)
- DPlayer (备选)

## 八、维护说明

- 定期检查解析接口可用性
- 更新播放器内核版本
- 优化错误处理机制
- 保持与最新浏览器特性兼容
