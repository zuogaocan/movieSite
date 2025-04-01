const express = require('express');
const router = express.Router();
const videoService = require('../../services/videoService');

/**
 * @route   GET /api/detail/:id
 * @desc    获取视频详情
 * @param   {string} id - 视频ID (路径参数)
 * @param   {string} source - (可选) 站点来源ID (查询参数)
 * @returns {object} 视频详情信息
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { source } = req.query;
    
    if (!id) {
      return res.status(400).json({
        code: 400,
        message: '缺少视频ID参数'
      });
    }
    
    console.log(`[API] 详情请求: ID=${id}, 站点=${source || '默认'}`);
    
    const videoDetail = await videoService.getVideoDetail(id, source);
    
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
    console.error('[API] 获取详情错误:', error);
    next(error);
  }
});

/**
 * 兼容旧版本API，保留/api/detail?id=xxx格式
 */
router.get('/', async (req, res, next) => {
  try {
    const { id, source } = req.query;
    
    if (!id) {
      return res.status(400).json({
        code: 400,
        message: '缺少视频ID参数'
      });
    }
    
    console.log(`[API] 详情请求(旧): ID=${id}, 站点=${source || '默认'}`);
    
    const videoDetail = await videoService.getVideoDetail(id, source);
    
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
    console.error('[API] 获取详情错误:', error);
    next(error);
  }
});

module.exports = router; 