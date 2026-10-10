// 太空任务调度员 - 介绍页脚本
// 下载按钮：等用户给 GitHub Release URL 后替换 downloadUrl
const downloadUrl = '';
document.addEventListener('DOMContentLoaded', () => {
  const dlBtn = document.getElementById('dlBtn');
  if (dlBtn) {
    dlBtn.addEventListener('click', (e) => {
      if (!downloadUrl) {
        e.preventDefault();
        alert('下载链接待替换：把 GitHub Release 的安装包 URL 填到 script.js 顶部的 downloadUrl 即可');
      } else {
        dlBtn.href = downloadUrl;
      }
    });
  }
});