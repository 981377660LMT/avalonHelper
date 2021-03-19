// components/WereWolfHeadItem/WereWolfHeadItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemId: String,
    itemName: String,
    itemQuantifier: String,
    count: Number,
    min: Number,
    max: Number,
  },
  options: {
    styleIsolation: 'apply-shared',
  },
  observers: {
    // count: () => {
    //   this.setData({
    //     observeMax: Math.floor(this.data.count / 2),
    //   })
    // },
  },
  /**
   * 组件的初始数据
   */
  data: {
    // observeMax: 4,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    lintap(e) {
      const count = e.detail.count
      const itemId = e.currentTarget.dataset.itemid
      this.triggerEvent('onTapCount', { itemId, count })
    },
  },
})
