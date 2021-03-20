// pages/about/about.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShowDialog: false,
    isShowStrategy: false,
    isShowWereWolf_1: true,
    isShowAvalon_1: false,
    isShowWereWolf_2: true,
    isShowAvalon_2: false,
  },
  onTapDialog() {
    this.setData({
      isShowDialog: true,
    })
  },

  onTapStrategy() {
    this.setData({
      isShowStrategy: true,
    })
  },

  changeFirstTabs(e) {
    const currentTab = e.detail.activeKey
    if (currentTab === '1') {
      this.setData({
        isShowWereWolf_1: true,
        isShowAvalon_1: false,
      })
    } else {
      this.setData({
        isShowWereWolf_1: false,
        isShowAvalon_1: true,
      })
    }
  },

  changeSecondTabs(e) {
    const currentTab = e.detail.activeKey
    if (currentTab === '1') {
      this.setData({
        isShowWereWolf_2: true,
        isShowAvalon_2: false,
      })
    } else {
      this.setData({
        isShowWereWolf_2: false,
        isShowAvalon_2: true,
      })
    }
  },
})
