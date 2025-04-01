const express = require('express');
const router = express.Router();
const videoService = require('../../services/videoService');

/**
 * @route   GET /api/search
 * @desc    搜索视频资源
 * @param   {string} keyword - 搜索关键词
 * @param   {string} source - (可选) 站点来源ID
 * @param   {number} page - (可选) 页码
 * @param   {number} pageSize - (可选) 每页条数
 * @returns {object} 搜索结果列表
 */
router.get('/', async (req, res, next) => {
  try {
    const { keyword, source, page = 1, pageSize = 24 } = req.query;
    
    if (!keyword) {
      return res.status(400).json({
        code: 400,
        message: '缺少关键词参数'
      });
    }
    
    console.log(`[API] 搜索请求: 关键词=${keyword}, 站点=${source || '默认'}, 页码=${page}, 每页=${pageSize}`);
    
    // 传入完整的参数，包括站点、分页信息
    const results = await videoService.searchVideos(keyword, {
      source,
      page: parseInt(page),
      pageSize: parseInt(pageSize)
    });
    
    res.json({
      code: 0,
      message: 'success',
      data: results
    });
  } catch (error) {
    console.error('[API] 搜索错误:', error);
    next(error);
  }
});

module.exports = router; 