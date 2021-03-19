// components/UserItem/UserItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userAvatarUrl: {
      type: String,
    },
    userNickName: {
      type: String,
    },
    userRole: {
      type: String,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isRotate: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleRotate() {
      this.setData({
        isRotate: !this.data.isRotate,
      })
    },
  },
})
