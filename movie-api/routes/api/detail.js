const express = require('express');
const router = express.Router();
const videoService = require('../../services/videoService');

/**
 * @route   GET /api/detail
 * @desc    获取视频详情
 * @param   {string} id - 视频ID
 * @returns {object} 视频详情信息
 */
router.get('/', async (req, res, next) => {
  try {
    const { id } = req.query;
    
    if (!id) {
      return res.status(400).json({
        code: 400,
        message: '缺少视频ID参数'
      });
    }
    
    const videoDetail = await videoService.getVideoDetail(id);
    
    if (!videoDetail) {
      return res.status(404).json({
        code: 404,
        message: '未找到视频信息'
      });
    }
    
    res.json({
      code: 0,
      message: 'success',
      data: videoDetail
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router; 