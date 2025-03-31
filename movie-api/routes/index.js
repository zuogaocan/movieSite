const express = require('express');
const router = express.Router();

// 导入API路由
const searchRouter = require('./api/search');
const detailRouter = require('./api/detail');

// API路由
router.use('/api/search', searchRouter);
router.use('/api/detail', detailRouter);

// 根路径
router.get('/', (req, res) => {
  res.json({
    message: '视频资源API服务',
    version: '1.0.0',
    endpoints: [
      {
        path: '/api/search',
        method: 'GET',
        description: '搜索视频资源',
        params: ['keyword']
      },
      {
        path: '/api/detail',
        method: 'GET',
        description: '获取视频详情',
        params: ['id']
      }
    ]
  });
});

module.exports = router; 