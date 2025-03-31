const express = require('express');
const router = express.Router();
const videoService = require('../../services/videoService');

/**
 * @route   GET /api/search
 * @desc    搜索视频资源
 * @param   {string} keyword - 搜索关键词
 * @returns {object} 搜索结果列表
 */
router.get('/', async (req, res, next) => {
  try {
    const { keyword } = req.query;
    
    if (!keyword) {
      return res.status(400).json({
        code: 400,
        message: '缺少关键词参数'
      });
    }
    
    const results = await videoService.searchVideos(keyword);
    
    res.json({
      code: 0,
      message: 'success',
      data: results
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router; 