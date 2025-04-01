<template>
  <div class="admin-container">
    <h1 class="admin-title">站点管理</h1>
    
    <div class="admin-actions">
      <button class="btn btn-primary" @click="showAddSiteModal">添加新站点</button>
    </div>
    
    <!-- 站点列表 -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <div class="loading-text">加载中...</div>
    </div>
    
    <div v-else-if="error" class="error-container">
      <div class="error-message">{{ error }}</div>
      <button class="btn btn-primary" @click="loadSites">重试</button>
    </div>
    
    <div v-else-if="sites.length === 0" class="empty-container">
      <div class="empty-message">没有可用的站点配置</div>
      <button class="btn btn-primary" @click="showAddSiteModal">添加站点</button>
    </div>
    
    <div v-else class="site-list">
      <div v-for="site in sites" :key="site.id" class="site-card">
        <div class="site-header">
          <div class="site-name" :class="{ 'inactive': !site.active }">
            <span class="site-badge" :class="{ 'active': site.active }"></span>
            {{ site.name }}
          </div>
          <div class="site-actions">
            <button class="btn btn-sm" :class="site.active ? 'btn-warning' : 'btn-success'" @click="toggleSiteStatus(site)">
              {{ site.active ? '禁用' : '激活' }}
            </button>
            <button class="btn btn-sm btn-info" @click="editSite(site)">编辑</button>
            <button class="btn btn-sm btn-danger" @click="confirmDeleteSite(site)" :disabled="site.id === 'default'">删除</button>
          </div>
        </div>
        
        <div class="site-details">
          <div class="site-detail">
            <span class="detail-label">站点ID:</span>
            <span class="detail-value">{{ site.id }}</span>
          </div>
          <div class="site-detail">
            <span class="detail-label">API地址:</span>
            <span class="detail-value">{{ site.apiBaseUrl }}</span>
          </div>
          <div class="site-detail">
            <span class="detail-label">播放器接口:</span>
            <span class="detail-value">{{ site.playerUrl }}</span>
          </div>
          <div class="site-detail">
            <span class="detail-label">添加时间:</span>
            <span class="detail-value">{{ formatDate(site.addTime) }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 添加/编辑站点模态框 -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">{{ editingSite ? '编辑站点' : '添加新站点' }}</h2>
          <button class="modal-close" @click="closeModal">&times;</button>
        </div>
        
        <div class="modal-body">
          <div class="form-group">
            <label for="site-id">站点ID *</label>
            <input 
              id="site-id" 
              v-model="siteForm.id" 
              class="form-control" 
              :disabled="editingSite"
              placeholder="英文字符和数字，如 ffzy"
              :class="{ 'invalid': validationErrors.id }"
            />
            <div v-if="validationErrors.id" class="error-text">{{ validationErrors.id }}</div>
          </div>
          
          <div class="form-group">
            <label for="site-name">站点名称 *</label>
            <input 
              id="site-name" 
              v-model="siteForm.name" 
              class="form-control" 
              placeholder="如 非凡资源站"
              :class="{ 'invalid': validationErrors.name }"
            />
            <div v-if="validationErrors.name" class="error-text">{{ validationErrors.name }}</div>
          </div>
          
          <div class="form-group">
            <label for="site-api">API地址 *</label>
            <div class="input-group">
              <input 
                id="site-api" 
                v-model="siteForm.apiBaseUrl" 
                class="form-control" 
                placeholder="如 http://ffzy5.tv/api.php/provide/vod"
                :class="{ 'invalid': validationErrors.apiBaseUrl }"
              />
              <button class="btn btn-secondary" @click="testApi">测试</button>
            </div>
            <div v-if="validationErrors.apiBaseUrl" class="error-text">{{ validationErrors.apiBaseUrl }}</div>
            <div v-if="apiTestResult" class="api-test-result" :class="{ 'success': apiTestResult.valid, 'error': !apiTestResult.valid }">
              {{ apiTestResult.message }}
            </div>
          </div>
          
          <div class="form-group">
            <label for="site-player">播放器接口</label>
            <input 
              id="site-player" 
              v-model="siteForm.playerUrl" 
              class="form-control" 
              placeholder="如 https://svip.ffzyplay.com/?url="
            />
            <div class="form-hint">播放器接口用于解析视频地址，格式通常为 URL前缀?url=</div>
          </div>
          
          <div class="form-group">
            <div class="checkbox">
              <input id="site-active" type="checkbox" v-model="siteForm.active">
              <label for="site-active">站点激活</label>
            </div>
            <div class="form-hint">只有激活的站点才会出现在搜索选项中</div>
          </div>
        </div>
        
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="closeModal">取消</button>
          <button class="btn btn-primary" @click="saveSite" :disabled="saving">
            {{ saving ? '保存中...' : '保存' }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- 确认删除模态框 -->
    <div v-if="showDeleteConfirm" class="modal-overlay" @click="cancelDelete">
      <div class="modal-container confirm-modal" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">确认删除</h2>
          <button class="modal-close" @click="cancelDelete">&times;</button>
        </div>
        
        <div class="modal-body">
          <p>确定要删除站点 <strong>{{ siteToDelete?.name }}</strong> 吗？此操作不可恢复。</p>
        </div>
        
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="cancelDelete">取消</button>
          <button class="btn btn-danger" @click="deleteSite" :disabled="deleting">
            {{ deleting ? '删除中...' : '删除' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { siteApi } from '@/api';

// 站点列表
const sites = ref([]);
const loading = ref(true);
const error = ref('');

// 模态框状态
const showModal = ref(false);
const editingSite = ref(false);
const saving = ref(false);
const apiTestResult = ref(null);
const validationErrors = reactive({});

// 删除确认
const showDeleteConfirm = ref(false);
const siteToDelete = ref(null);
const deleting = ref(false);

// 表单数据
const siteForm = reactive({
  id: '',
  name: '',
  apiBaseUrl: '',
  playerUrl: '',
  active: true
});

// 加载站点列表
const loadSites = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    const data = await siteApi.getAllSites();
    sites.value = data;
  } catch (err) {
    console.error('加载站点失败:', err);
    error.value = '加载站点列表失败，请稍后重试';
  } finally {
    loading.value = false;
  }
};

// 显示添加站点模态框
const showAddSiteModal = () => {
  editingSite.value = false;
  resetForm();
  showModal.value = true;
};

// 显示编辑站点模态框
const editSite = (site) => {
  editingSite.value = true;
  
  // 复制站点数据到表单
  Object.keys(siteForm).forEach(key => {
    if (key in site) {
      siteForm[key] = site[key];
    }
  });
  
  showModal.value = true;
};

// 关闭模态框
const closeModal = () => {
  showModal.value = false;
  apiTestResult.value = null;
  validationErrors.value = {};
};

// 重置表单
const resetForm = () => {
  Object.keys(siteForm).forEach(key => {
    siteForm[key] = key === 'active' ? true : '';
  });
  apiTestResult.value = null;
  validationErrors.value = {};
};

// 测试API
const testApi = async () => {
  if (!siteForm.apiBaseUrl) {
    apiTestResult.value = {
      valid: false,
      message: '请输入API地址再测试'
    };
    return;
  }
  
  try {
    const result = await siteApi.testSiteApi(siteForm.apiBaseUrl);
    apiTestResult.value = result;
  } catch (err) {
    apiTestResult.value = {
      valid: false,
      message: '测试失败: ' + (err.message || '未知错误')
    };
  }
};

// 验证表单
const validateForm = () => {
  const errors = {};
  
  if (!siteForm.id) {
    errors.id = '站点ID不能为空';
  } else if (!/^[a-zA-Z0-9_-]+$/.test(siteForm.id)) {
    errors.id = '站点ID只能包含字母、数字、下划线和连字符';
  }
  
  if (!siteForm.name) {
    errors.name = '站点名称不能为空';
  }
  
  if (!siteForm.apiBaseUrl) {
    errors.apiBaseUrl = 'API地址不能为空';
  } else if (!siteForm.apiBaseUrl.startsWith('http')) {
    errors.apiBaseUrl = 'API地址必须以http或https开头';
  }
  
  validationErrors.id = errors.id || '';
  validationErrors.name = errors.name || '';
  validationErrors.apiBaseUrl = errors.apiBaseUrl || '';
  
  return Object.keys(errors).length === 0;
};

// 保存站点
const saveSite = async () => {
  if (!validateForm()) {
    return;
  }
  
  saving.value = true;
  
  try {
    if (editingSite.value) {
      // 更新站点
      await siteApi.updateSite(siteForm.id, {
        name: siteForm.name,
        apiBaseUrl: siteForm.apiBaseUrl,
        playerUrl: siteForm.playerUrl,
        active: siteForm.active
      });
    } else {
      // 添加站点
      await siteApi.addSite(siteForm);
    }
    
    // 重新加载站点列表
    await loadSites();
    closeModal();
  } catch (err) {
    console.error('保存站点失败:', err);
    alert('保存站点失败: ' + (err.message || '未知错误'));
  } finally {
    saving.value = false;
  }
};

// 切换站点状态
const toggleSiteStatus = async (site) => {
  try {
    await siteApi.updateSiteStatus(site.id, !site.active);
    // 重新加载站点列表
    await loadSites();
  } catch (err) {
    console.error('更新站点状态失败:', err);
    alert('更新站点状态失败: ' + (err.message || '未知错误'));
  }
};

// 确认删除站点
const confirmDeleteSite = (site) => {
  if (site.id === 'default') {
    alert('默认站点不能删除');
    return;
  }
  
  siteToDelete.value = site;
  showDeleteConfirm.value = true;
};

// 取消删除
const cancelDelete = () => {
  showDeleteConfirm.value = false;
  siteToDelete.value = null;
};

// 删除站点
const deleteSite = async () => {
  if (!siteToDelete.value) return;
  
  deleting.value = true;
  
  try {
    await siteApi.deleteSite(siteToDelete.value.id);
    // 重新加载站点列表
    await loadSites();
    showDeleteConfirm.value = false;
    siteToDelete.value = null;
  } catch (err) {
    console.error('删除站点失败:', err);
    alert('删除站点失败: ' + (err.message || '未知错误'));
  } finally {
    deleting.value = false;
  }
};

// 格式化日期
const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (e) {
    return dateString || '未知';
  }
};

onMounted(() => {
  loadSites();
});
</script>

<style scoped>
.admin-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.admin-title {
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: var(--title-color, #333);
}

.admin-actions {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
}

.loading-container,
.error-container,
.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 20px 0;
  background-color: var(--card-bg-color, #fff);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--primary-color, #1890ff);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-message {
  color: var(--error-color, #f5222d);
  margin-bottom: 15px;
}

.empty-message {
  color: var(--text-color-secondary, #999);
  margin-bottom: 15px;
}

.site-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 20px;
}

.site-card {
  background-color: var(--card-bg-color, #fff);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.site-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.site-header {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color-light, #e6f7ff);
  border-bottom: 1px solid var(--border-color, #eee);
}

.site-name {
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: var(--title-color, #333);
}

.site-name.inactive {
  color: var(--text-color-secondary, #999);
}

.site-badge {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 8px;
}

.site-badge.active {
  background-color: var(--success-color, #52c41a);
}

.site-actions {
  display: flex;
  gap: 10px;
}

.site-details {
  padding: 15px 20px;
}

.site-detail {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}

.detail-label {
  width: 100px;
  color: var(--text-color-secondary, #999);
  margin-right: 10px;
}

.detail-value {
  flex: 1;
  word-break: break-all;
}

/* 模态框样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-container {
  background-color: var(--bg-color, #fff);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.confirm-modal {
  max-width: 400px;
}

.modal-header {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color, #eee);
}

.modal-title {
  margin: 0;
  font-size: 1.4rem;
  color: var(--title-color, #333);
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-color-secondary, #999);
}

.modal-body {
  padding: 20px;
  flex: 1;
  overflow-y: auto;
}

.modal-footer {
  padding: 15px 20px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  border-top: 1px solid var(--border-color, #eee);
}

/* 表单样式 */
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-color, #333);
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-color, #d9d9d9);
  border-radius: 4px;
  font-size: 1rem;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-color, #1890ff);
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.form-control.invalid {
  border-color: var(--error-color, #f5222d);
}

.form-control:disabled {
  background-color: var(--disabled-bg, #f5f5f5);
  cursor: not-allowed;
}

.form-hint {
  margin-top: 5px;
  font-size: 0.9rem;
  color: var(--text-color-secondary, #999);
}

.error-text {
  color: var(--error-color, #f5222d);
  font-size: 0.9rem;
  margin-top: 5px;
}

.input-group {
  display: flex;
}

.input-group .form-control {
  flex: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.checkbox {
  display: flex;
  align-items: center;
}

.checkbox input {
  margin-right: 8px;
}

.api-test-result {
  margin-top: 8px;
  padding: 8px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.api-test-result.success {
  background-color: var(--success-bg, #f6ffed);
  border: 1px solid var(--success-color, #52c41a);
  color: var(--success-color, #52c41a);
}

.api-test-result.error {
  background-color: var(--error-bg, #fff2f0);
  border: 1px solid var(--error-color, #f5222d);
  color: var(--error-color, #f5222d);
}

/* 按钮样式 */
.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-sm {
  padding: 5px 10px;
  font-size: 0.9rem;
}

.btn-primary {
  background-color: var(--primary-color, #1890ff);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--primary-color-dark, #096dd9);
}

.btn-secondary {
  background-color: var(--secondary-color, #d9d9d9);
  color: var(--text-color, #333);
}

.btn-secondary:hover:not(:disabled) {
  background-color: #c0c0c0;
}

.btn-danger {
  background-color: var(--error-color, #f5222d);
  color: white;
}

.btn-danger:hover:not(:disabled) {
  background-color: #d32029;
}

.btn-warning {
  background-color: var(--warning-color, #faad14);
  color: white;
}

.btn-warning:hover:not(:disabled) {
  background-color: #d48806;
}

.btn-success {
  background-color: var(--success-color, #52c41a);
  color: white;
}

.btn-success:hover:not(:disabled) {
  background-color: #389e0d;
}

.btn-info {
  background-color: var(--info-color, #1890ff);
  color: white;
}

.btn-info:hover:not(:disabled) {
  background-color: #096dd9;
}

@media (max-width: 768px) {
  .site-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .site-actions {
    margin-top: 10px;
  }
  
  .modal-container {
    width: 90%;
  }
}
</style> 