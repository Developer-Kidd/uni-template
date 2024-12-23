/*
 * 小程序版本更新检测
 * author: zhijie
 */
export const useUpdate = () => {
  let updateManager: UniNamespace.UpdateManager | undefined; // 更新管理实例

  /*
   * 获取updateManager
   * @return UniNamespace.UpdateManager | undefined
   */
  const getUpdateManager = (): UniNamespace.UpdateManager | undefined => {
    if (!uni.canIUse("getUpdateManager")) return;
    if (updateManager) return updateManager;
    return uni.getUpdateManager();
  };

  /*
   * 检查当前版本是否有更新
   */
  const checkUpdate = () => {
    updateManager = getUpdateManager();
    if (!updateManager) return; // 不支持updateManager
    // 检测是否有新版本
    updateManager.onCheckForUpdate(res => {
      // 请求完新版本信息的回调
      if (res.hasUpdate) {
        handleUpdate();
      }
    });
  };

  /*
   * 更新方法
   */
  const handleUpdate = () => {
    if (!updateManager) return;
    updateManager.onUpdateReady(() => {
      uni.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启应用？",
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager && updateManager.applyUpdate();
          }
        }
      });
    });
    updateManager.onUpdateFailed(function (res) {
      uni.showModal({
        title: "已经有新版本了哟~",
        content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
      });
    });
  };

  return {
    checkUpdate
  };
};
