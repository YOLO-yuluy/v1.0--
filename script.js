// 太空任务调度员 - 介绍页脚本
// 下载按钮：直接下载同目录下的安装包 EXE
// 以后传到 GitHub Pages 时，把下面改成 Release 完整 URL 即可
const downloadUrl = '太空任务调度员_安装包.exe';

document.addEventListener('DOMContentLoaded', () => {
  const dlBtn = document.getElementById('dlBtn');
  if (dlBtn) {
    dlBtn.href = downloadUrl;
    dlBtn.setAttribute('download', '太空任务调度员_安装包.exe');
  }
});
