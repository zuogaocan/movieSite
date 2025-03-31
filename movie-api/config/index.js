require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  apiBaseUrl: process.env.API_BASE_URL || 'https://json02.heimuer.xyz/api.php/provide/vod',
  environment: process.env.NODE_ENV || 'development',
  // 播放解析接口
  playerParseUrl: 'https://hoplayer.com/index.html'
}; 