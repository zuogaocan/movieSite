const axios = require('axios');

/**
 * HTTP请求客户端封装
 */
class HttpClient {
  /**
   * 发送GET请求
   * @param {string} url - 请求URL
   * @param {Object} params - 查询参数
   * @returns {Promise<Object>} 响应数据
   */
  async get(url, params = {}) {
    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      console.error('HTTP请求失败:', error.message);
      throw new Error(`HTTP请求失败: ${error.message}`);
    }
  }

  /**
   * 发送POST请求
   * @param {string} url - 请求URL
   * @param {Object} data - 请求体数据
   * @returns {Promise<Object>} 响应数据
   */
  async post(url, data = {}) {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('HTTP请求失败:', error.message);
      throw new Error(`HTTP请求失败: ${error.message}`);
    }
  }
}

module.exports = new HttpClient(); 