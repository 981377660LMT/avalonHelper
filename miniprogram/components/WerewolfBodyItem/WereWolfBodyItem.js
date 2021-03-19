// components/WerewolfBodyItem/WereWolfBodyItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemId: String,
    iconType: String,
    itemName: String,
    // 1代表选中,0代表未选中
    isSelected: Number,
  },

  options: {
    styleIsolation: 'apply-shared',
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    linchange(e) {
      const itemId = e.currentTarget.dataset.itemid
      const checked = e.detail.checked
      this.triggerEvent('onSelectChange', { itemId, checked })
    },
  },
})
