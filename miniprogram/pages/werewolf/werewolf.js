import create from '../../utils/create'
import store from '../../store/index'
import recommendRoles from '../../utils/recommendRoles'

// '1'代表狼人杀，'2'代表阿瓦隆
let gameType = '0'
let isJoinGame = '1'
const db = wx.cloud.database()

create.Page(store, {
  data: {
    roomNumber: -1,
    memberNum: 9,
    normalWolfNum: 3,
    specialCharacter: [
      {
        id: 2,
        iconType: 'icon-yanjing',
        itemName: '预言家',
        isSelected: 1,
        roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
      },
      {
        id: 3,
        iconType: 'icon-dunpai',
        itemName: '守卫',
        isSelected: 0,
        roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
      },
      {
        id: 4,
        iconType: 'icon-mofayuyinxunlian',
        itemName: '女巫',
        isSelected: 1,
        roleInfo:
          '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
      },
      {
        id: 5,
        iconType: 'icon-demon-hunter',
        itemName: '猎人',
        isSelected: 0,
        roleInfo:
          '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
      },
      {
        id: 6,
        iconType: 'icon-baffled',
        itemName: '白痴',
        isSelected: 0,
        roleInfo:
          '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
      },
      {
        id: 7,
        iconType: 'icon-qiubitezhijian',
        itemName: '丘比特',
        isSelected: 1,
        roleInfo:
          '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
      },
      {
        id: 8,
        iconType: 'icon-yincang',
        itemName: '隐狼',
        isSelected: 0,
        roleInfo:
          '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
      },
      {
        id: 9,
        iconType: 'icon-bingdu',
        itemName: '狼美人',
        isSelected: 0,
        roleInfo:
          '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
      },
      {
        id: 10,
        iconType: 'icon-lang2',
        itemName: '白狼王',
        isSelected: 0,
        roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
      },
    ],
    // 是否处于选择配置阶段
    isShowModalInput: false,
    isShowRolesModal: false,
    isCreateRoom: '0',
    myRole: '???',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(store)
    const { gameType: a, isJoinGame: b, isCreateRoom: c, myRole: d } = options
    gameType = a
    isJoinGame = b
    this.setData({
      isCreateRoom: c,
      myRole: d,
    })
    console.log(gameType, isJoinGame)
    if (this.data.isCreateRoom !== '1') {
      console.log('不是创建房间进来的')
      // 不是创建房间进来的
      // 请求数据库，返回数据显示角色弹窗,返回房间号等
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  onUnload: function () {},

  onShareAppMessage: function () {},

  // 改变count数量时
  onCountChange(e) {
    console.log(e)
    const { itemId, count } = e.detail
    const itemType = itemId === '1' ? 'memberNum' : 'normalWolfNum'

    this.setData({
      [itemType]: count,
    })
  },

  // 改变特殊角色时
  onSelectChange(e) {
    let { itemId, checked } = e.detail
    checked = checked === true ? 1 : 0
    itemId = parseInt(itemId)

    this.changeSpecialCharacter(itemId, checked)
  },

  /**
   * 改变角色数据
   * @param {String} roleId
   * @param {Number} isSelected
   */
  changeSpecialCharacter(roleId, isSelected) {
    const rawArr = this.data.specialCharacter
    const resultArr = rawArr.map(character => {
      if (character.id === roleId) {
        character.isSelected = isSelected
      }
      return character
    })

    this.setData({
      specialCharacter: resultArr,
    })

    console.log(this.data.specialCharacter)
  },

  // 添加自定义角色时
  onTapAddRole() {
    this.setData({
      isShowModalInput: true,
    })
  },

  // 确认添加自定义角色时
  onModalInputConfirm(e) {
    const { input } = e.detail
    this.addSpecialCharacter(input)
  },

  // 增加角色
  addSpecialCharacter(itemName) {
    const id = this.data.specialCharacter.slice(-1)[0]['id'] + 1
    const newSpecialCharacter = {
      id,
      itemName,
      iconType: 'icon-weizhi',
      isSelected: 1,
      roleInfo: `${itemName}：这是一个自定义角色。`,
    }

    this.setData({
      specialCharacter: [...this.data.specialCharacter, newSpecialCharacter],
    })

    wx.showToast({
      title: '添加角色成功',
      icon: 'success',
      duration: 1000,
    })

    console.log(this.data.specialCharacter)
  },

  // 使用推荐配置时:注意每种人数推荐配置应该有多种,
  onUseRecommendation() {
    const { normalWolfNum, specialCharacter } = recommendRoles({ gameType, memberNum: this.data.memberNum })
    console.log(normalWolfNum, specialCharacter)
    this.setData({
      normalWolfNum,
      specialCharacter,
    })

    wx.showToast({
      title: '已使用推荐配置',
      icon: 'success',
      duration: 1000,
    })
  },

  // 点击开始时
  onStartGame() {
    // 需要验证
    if (this.validateRoles()) {
      this.showRolesModal()
    }
  },

  showRolesModal() {
    this.setData({
      isShowRolesModal: true,
    })
  },

  onRolesModalConfirm() {
    console.log('房间开始创建')

    wx.showLoading({
      title: '正在创建房间',
      mask: true,
    })
    // 然后提交服务器，不带isCreateRoom重新加载页面
    wx.cloud
      .callFunction({
        name: 'createRoom',
        data: {
          gameType,
          isJoinGame,
          memberNum: this.data.memberNum,
          normalWolfNum: this.data.normalWolfNum,
          specialCharacter: this.data.specialCharacter,
          avatarUrl: this.store.data.userInfo.avatarUrl,
          nickName: this.store.data.userInfo.nickName,
        },
      })
      .then(res => {
        wx.showToast({
          title: '创建房间成功',
          icon: 'success',
          duration: 1500,
          mask: false,
        })
        console.log(res)
      })
      .catch(err => {
        wx.showToast({
          title: '创建房间失败',
          icon: 'error',
          duration: 1500,
          mask: false,
        })
      })
  },

  // 验证选择的角色
  validateRoles() {
    const specialCharacterNum = this.data.specialCharacter.reduce((pre, cur) => {
      return cur.isSelected === 1 ? pre + 1 : pre
    }, 0)
    const isRolesNumReasonable = specialCharacterNum + this.data.normalWolfNum <= this.data.memberNum
    // console.log(specialCharacterNum, isRolesNumReasonable)

    if (!isRolesNumReasonable) {
      wx.showToast({
        title: '人数超出范围',
        icon: 'error',
        duration: 2000,
      })
      return false
    }

    return true
  },

  showRolesModal() {
    this.setData({
      isShowRolesModal: true,
    })
  },

  // 点击固定悬浮前往角色页面时
  onClickHelp() {
    console.log(1)
    wx.lin.showActionSheet({
      itemList: [
        {
          name: '今日不再出现此类内容',
        },
        {
          name: '屏蔽',
        },
      ],
    })
  },
})
