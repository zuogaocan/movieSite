# 影视资源播放站点

基于 Vue3 + Node.js 构建的在线影视资源播放系统，包含前后端分离架构。

## 项目结构

本项目分为两个主要部分：

1. `movie-web`: 基于 Vue3 + Vite 构建的前端项目
2. `movie-api`: 基于 Express 构建的后端 API 服务

## 功能特性

- 在线影视资源搜索
- 多源视频播放支持
- 多站点资源切换
- 海报自动获取与占位图显示
- 剧集自动解析
- 响应式界面设计
- API 速率限制保护
- 自适应视频播放器

## 技术栈

### 前端 (movie-web)

- Vue 3 + Vite
- Vue Router
- Element Plus
- Axios
- DPlayer 视频播放器
- HLS.js 流媒体支持

### 后端 (movie-api)

- Node.js + Express
- Axios (用于代理请求)
- 多站点资源配置
- 资源站点自动切换
- CORS 支持
- 请求速率限制
- 环境变量配置

## 快速开始

### 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0

### 后端服务启动

1. 进入 API 目录
```bash
cd movie-api
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量 (可选，已提供默认配置)
```
# .env 文件示例
PORT=3000
API_BASE_URL=https://json02.heimuer.xyz/api.php/provide/vod
NODE_ENV=development
```

4. 启动服务
```bash
# 开发模式
npm run dev

# 生产模式
npm start
```

### 前端应用启动

1. 进入前端目录
```bash
cd movie-web
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 http://localhost:5173

## 多站点资源支持

本系统支持多个影视资源站点接入，通过 `movie-api/config/sites.json` 配置文件进行管理。当前已集成以下资源站点：

- 默认资源站
- 非凡资源
- 量子采集站
- 360资源站
- 华为资源
- IKUN资源
- 速播资源
- 更多站点持续添加中...

### 添加新的资源站点

要添加新的资源站点，只需编辑 `movie-api/config/sites.json` 文件，按照以下格式添加新站点配置：

```json
{
  "name": "站点名称",
  "apiBaseUrl": "https://api站点地址/api.php/provide/vod",
  "playerUrl": "https://播放器地址/index.html?url=",
  "active": true,
  "id": "站点唯一标识",
  "addTime": "添加时间"
}
```

## 部署说明

### 部署后端服务

#### 方式一：直接部署

1. 在服务器上安装 Node.js 环境
2. 上传 `movie-api` 目录到服务器
3. 进入目录并安装依赖
```bash
cd movie-api
npm install --production
```
4. 使用 PM2 启动服务
```bash
npm install -g pm2
pm2 start app.js --name "movie-api"
```

#### 方式二：使用 Docker 部署 (需创建 Dockerfile)

1. 在 `movie-api` 目录创建 Dockerfile
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

2. 构建并运行 Docker 容器
```bash
docker build -t movie-api .
docker run -d -p 3000:3000 --name movie-api movie-api
```

### 部署前端应用

#### 方式一：静态文件部署

1. 构建前端项目
```bash
cd movie-web
npm run build
```

2. 将 `dist` 目录下的文件部署到 Web 服务器 (如 Nginx)

#### Nginx 配置示例
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    root /path/to/movie-web/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 代理 API 请求到后端服务
    location /api {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

#### 方式二：Docker Compose 部署 (前后端一起)

1. 在项目根目录创建 `docker-compose.yml`
```yaml
version: '3'
services:
  api:
    build: ./movie-api
    restart: always
    ports:
      - "3000:3000"
  
  web:
    build:
      context: ./movie-web
      dockerfile: Dockerfile
    restart: always
    ports:
      - "80:80"
    depends_on:
      - api
```

2. 在 `movie-web` 创建 Dockerfile
```dockerfile
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

3. 创建 nginx.conf 配置文件
```
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://api:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

4. 启动服务
```bash
docker-compose up -d
```

## 配置说明

### 后端配置 (.env)

- `PORT`: API 服务端口，默认 3000
- `API_BASE_URL`: 默认影视资源 API 地址
- `NODE_ENV`: 环境设置 (development/production)

### 前端配置 (vite.config.js)

前端开发环境已配置代理，将 `/api` 路径的请求代理到后端服务：

```js
server: {
  port: 5173,
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true
    }
  }
}
```

## 图片处理

本系统针对资源站点返回的图片数据进行了优化处理：

1. 优先使用资源站提供的图片URL
2. 当搜索结果没有图片时，自动请求详情API获取完整图片
3. 当图片加载失败时，自动使用基于电影名生成的占位图
4. 包含图片错误处理和加载失败回退机制

## 更新日志

### 2023-04-01
- 增加多站点资源支持
- 添加站点切换功能
- 优化图片显示逻辑
- 添加图片加载失败处理机制

### 2023-03-28
- 项目初始化
- 基础功能实现

## 注意事项

1. **API 限制**
   - 后端服务已配置速率限制，每个 IP 15分钟内最多 100 个请求
   - 如需调整，修改 `app.js` 中的 rateLimit 配置

2. **视频播放**
   - 前端使用 iframe 嵌入第三方解析接口播放视频
   - 支持 HLS (m3u8) 格式视频流

3. **安全部署**
   - 生产环境建议配置 HTTPS
   - 添加适当的请求头控制
   - 部署在可靠的云服务提供商

## 常见问题

1. **视频无法播放**
   - 检查解析接口是否可用
   - 检查视频源格式是否支持
   - 确认 API 返回的播放地址是否有效

2. **接口请求失败**
   - 检查网络连接
   - 验证 API 地址是否正确
   - 查看后端日志是否有错误信息

## 许可证

MIT License

## 鸣谢

- 感谢所有开源项目的贡献者
- 特别感谢 Element Plus, Vue, Express 社区 