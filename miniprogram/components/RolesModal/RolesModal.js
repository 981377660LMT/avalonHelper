// components/RolesModal/RolesModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    roles: {
      type: Array,
    },
    gameType: {
      type: String,
    },
    isShowRolesModal: {
      type: Boolean,
    },
    memberNum: {
      type: Number,
    },
    normalWolfNum: {
      type: Number,
      value: 0,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    specialCharaterNum: 0,
  },

  observers: {
    roles: function (roles) {
      this.setData({
        specialCharaterNum: roles.reduce((pre, cur) => {
          return cur.isSelected === 1 ? pre + 1 : pre
        }, 0),
      })
    },
  },

  // attached() {
  //   this.setSpecialCharacterNum()
  // },
  /**
   * 组件的方法列表
   */
  methods: {
    confirm() {
      console.log(1)
      this.triggerEvent('onRolesModalConfirm')
    },
  },
})
