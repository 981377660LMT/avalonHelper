//app.js
App({
  onLaunch: function () {
    this.checkUpate()

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'reijin-env-2g0um6kp5951c4b2',
        traceUser: true,
      })
    }

    this.globalData = {}
  },

  checkUpate() {
    const updateManager = wx.getUpdateManager()
    // 检测版本更新
    updateManager.onCheckForUpdate(res => {
      if (res.hasUpdate) {
        updateManager.onUpdateReady(() => {
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用',
            success(res) {
              if (res.confirm) {
                updateManager.applyUpdate()
              }
            },
          })
        })
      }
    })
  },
})
