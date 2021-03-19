// components/ModalInput/ModalInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '请输入内容',
    },
    isShowModalInput: {
      type: Boolean,
    },
    inputLabel: {
      type: String,
      value: '输入',
    },
    inputPlaceHolder: {
      type: String,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    input: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    confirm() {
      const input = this.data.input
      if (input.trim().length > 0) {
        this.triggerEvent('onConfirm', { input })
        this.setData({
          input: '',
        })
      }
    },
    clear() {
      this.setData({
        input: '',
      })
    },
    inputChange(e) {
      console.log(1)
      this.setData({
        input: e.detail.value,
      })
    },
  },
})
