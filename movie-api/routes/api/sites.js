const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// 站点配置文件路径
const sitesConfigPath = path.join(__dirname, '../../config/sites.json');

// 读取站点配置
const readSitesConfig = () => {
  try {
    const data = fs.readFileSync(sitesConfigPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('读取站点配置失败:', error);
    return { sites: [] };
  }
};

// 写入站点配置
const writeSitesConfig = (config) => {
  try {
    fs.writeFileSync(sitesConfigPath, JSON.stringify(config, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('写入站点配置失败:', error);
    return false;
  }
};

/**
 * @route   GET /api/sites
 * @desc    获取所有站点配置
 * @returns {object} 站点配置列表
 */
router.get('/', (req, res) => {
  const config = readSitesConfig();
  res.json({
    code: 0,
    message: 'success',
    data: config.sites
  });
});

/**
 * @route   GET /api/sites/:id
 * @desc    获取单个站点配置
 * @param   {string} id - 站点ID
 * @returns {object} 站点配置信息
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const config = readSitesConfig();
  const site = config.sites.find(site => site.id === id);
  
  if (!site) {
    return res.status(404).json({
      code: 404,
      message: '站点不存在'
    });
  }
  
  res.json({
    code: 0,
    message: 'success',
    data: site
  });
});

/**
 * @route   POST /api/sites
 * @desc    添加新站点
 * @body    {object} site - 站点配置信息
 * @returns {object} 添加结果
 */
router.post('/', (req, res) => {
  const newSite = req.body;
  
  // 验证必要字段
  if (!newSite.id || !newSite.name || !newSite.apiBaseUrl) {
    return res.status(400).json({
      code: 400,
      message: '缺少必要字段 (id, name, apiBaseUrl)'
    });
  }
  
  const config = readSitesConfig();
  
  // 检查ID是否已存在
  if (config.sites.some(site => site.id === newSite.id)) {
    return res.status(400).json({
      code: 400,
      message: '站点ID已存在'
    });
  }
  
  // 添加时间戳
  newSite.addTime = new Date().toISOString();
  newSite.active = newSite.active !== false; // 默认为激活状态
  
  // 添加新站点
  config.sites.push(newSite);
  
  if (writeSitesConfig(config)) {
    res.json({
      code: 0,
      message: '添加成功',
      data: newSite
    });
  } else {
    res.status(500).json({
      code: 500,
      message: '站点配置保存失败'
    });
  }
});

/**
 * @route   PUT /api/sites/:id
 * @desc    更新站点配置
 * @param   {string} id - 站点ID
 * @body    {object} site - 站点配置信息
 * @returns {object} 更新结果
 */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedSite = req.body;
  
  const config = readSitesConfig();
  const siteIndex = config.sites.findIndex(site => site.id === id);
  
  if (siteIndex === -1) {
    return res.status(404).json({
      code: 404,
      message: '站点不存在'
    });
  }
  
  // 保留原始ID和添加时间
  updatedSite.id = id;
  updatedSite.addTime = config.sites[siteIndex].addTime;
  
  // 更新站点
  config.sites[siteIndex] = updatedSite;
  
  if (writeSitesConfig(config)) {
    res.json({
      code: 0,
      message: '更新成功',
      data: updatedSite
    });
  } else {
    res.status(500).json({
      code: 500,
      message: '站点配置保存失败'
    });
  }
});

/**
 * @route   DELETE /api/sites/:id
 * @desc    删除站点
 * @param   {string} id - 站点ID
 * @returns {object} 删除结果
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  // 禁止删除默认站点
  if (id === 'default') {
    return res.status(400).json({
      code: 400,
      message: '不能删除默认站点'
    });
  }
  
  const config = readSitesConfig();
  const siteIndex = config.sites.findIndex(site => site.id === id);
  
  if (siteIndex === -1) {
    return res.status(404).json({
      code: 404,
      message: '站点不存在'
    });
  }
  
  // 删除站点
  config.sites.splice(siteIndex, 1);
  
  if (writeSitesConfig(config)) {
    res.json({
      code: 0,
      message: '删除成功'
    });
  } else {
    res.status(500).json({
      code: 500,
      message: '站点配置保存失败'
    });
  }
});

/**
 * @route   PATCH /api/sites/:id/status
 * @desc    更新站点状态(激活/禁用)
 * @param   {string} id - 站点ID
 * @body    {boolean} active - 是否激活
 * @returns {object} 更新结果
 */
router.patch('/:id/status', (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  
  if (typeof active !== 'boolean') {
    return res.status(400).json({
      code: 400,
      message: '参数错误，active必须为布尔值'
    });
  }
  
  const config = readSitesConfig();
  const siteIndex = config.sites.findIndex(site => site.id === id);
  
  if (siteIndex === -1) {
    return res.status(404).json({
      code: 404,
      message: '站点不存在'
    });
  }
  
  // 更新状态
  config.sites[siteIndex].active = active;
  
  if (writeSitesConfig(config)) {
    res.json({
      code: 0,
      message: active ? '站点已激活' : '站点已禁用',
      data: config.sites[siteIndex]
    });
  } else {
    res.status(500).json({
      code: 500,
      message: '站点配置保存失败'
    });
  }
});

/**
 * @route   POST /api/sites/test
 * @desc    测试站点API是否可用
 * @body    {string} apiBaseUrl - 站点API地址
 * @returns {object} 测试结果
 */
router.post('/test', async (req, res) => {
  const { apiBaseUrl } = req.body;
  
  if (!apiBaseUrl) {
    return res.status(400).json({
      code: 400,
      message: '缺少API地址'
    });
  }
  
  try {
    const axios = require('axios');
    const testUrl = `${apiBaseUrl}/?ac=detail&wd=test`;
    
    const response = await axios.get(testUrl, { timeout: 5000 });
    
    if (response.data && (response.data.code === 1 || response.data.list)) {
      res.json({
        code: 0,
        message: 'API测试成功',
        data: {
          valid: true,
          message: 'API接口有效'
        }
      });
    } else {
      res.json({
        code: 0,
        message: 'API测试失败',
        data: {
          valid: false,
          message: '接口返回数据格式不符合要求'
        }
      });
    }
  } catch (error) {
    res.json({
      code: 0,
      message: 'API测试失败',
      data: {
        valid: false,
        message: error.message
      }
    });
  }
});

module.exports = router; 