const express = require('express');
const router = express.Router();

// 导入API路由
const searchRouter = require('./api/search');
const detailRouter = require('./api/detail');
const sitesRouter = require('./api/sites');

// 主页路由
router.get('/', (req, res) => {
  res.json({
    code: 0,
    message: '影视资源API服务',
    version: '1.0.0',
    apis: [
      '/api/search - 搜索资源',
      '/api/detail - 获取详情',
      '/api/sites - 站点管理'
    ]
  });
});

// API路由
router.use('/api/search', searchRouter);
router.use('/api/detail', detailRouter);
router.use('/api/sites', sitesRouter);

module.exports = router; 