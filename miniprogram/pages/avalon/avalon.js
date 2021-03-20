import create from '../../utils/create'
import store from '../../store/index'
import recommendRoles from '../../utils/recommendRoles'

// '1'代表狼人杀，'2'代表阿瓦隆
let gameType = '2'
let isJoinGame = '1'
const db = wx.cloud.database()

create.Page(store, {
  /**
   * 页面的初始数据
   */
  data: {
    roomNumber: -1,
    memberNum: 9,
    normalWolfNum: 0,
    specialCharacter: [
      {
        id: 2,
        iconType: 'icon-huangguan1',
        itemName: '梅林',
        isSelected: 1,
        roleInfo: '梅林：知道除了莫德雷德以外的坏人牌。',
      },
      {
        id: 3,
        iconType: 'icon-yanjing',
        itemName: '派西维尔',
        isSelected: 1,
        roleInfo: '派西维尔：知道梅林和莫甘娜，但不知道分别是谁。',
      },
      {
        id: 4,
        iconType: 'icon-huangguan',
        itemName: '莫甘娜',
        isSelected: 1,
        roleInfo:
          '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
      },
      {
        id: 5,
        iconType: 'icon-dao',
        itemName: '刺客',
        isSelected: 1,
        roleInfo: '刺客：在好人阵型3次任务成功后，独自决定，挑选一名可能是梅林的玩家刺杀，如选中，坏人胜利。',
      },
      {
        id: 6,
        iconType: 'icon-ic_peiwan',
        itemName: '奥伯伦',
        isSelected: 0,
        roleInfo: '奥伯伦：看不到其他坏人，其他坏人也看不到他（被孤立）。',
      },
      {
        id: 7,
        iconType: 'icon-yincang',
        itemName: '莫德雷德',
        isSelected: 1,
        roleInfo: '莫德雷德：无法被梅林看到的坏人。',
      },
      {
        id: 8,
        iconType: 'icon-314wushuju-youling',
        itemName: '爪牙',
        isSelected: 0,
        roleInfo: '爪牙：无特殊能力的坏人。',
      },
    ],
    // 是否处于选择配置阶段
    isShowRolesModal: false,
    isCreateRoom: '0',
    myRoleName: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { gameType: a, isJoinGame: b, isCreateRoom: c } = options

    gameType = a
    isJoinGame = b
    if (c) {
      this.setData({
        isCreateRoom: c,
      })
    }

    console.log(gameType, isJoinGame)
    if (this.data.isCreateRoom !== '1') {
      const { itemName: myRoleName } = this.store.data.roomInfo.myRole
      const { roomNumber, memberNum, normalWolfNum, specialCharacter } = this.store.data.roomInfo.targetRoom
      this.setData({
        roomNumber,
        memberNum,
        normalWolfNum,
        specialCharacter,
        myRoleName,
      })
    }
  },

  // 改变count数量时
  onCountChange(e) {
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
    console.log(this.data)
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
  },

  // 使用推荐配置时:注意每种人数推荐配置应该有多种,
  onUseRecommendation() {
    const { specialCharacter } = recommendRoles({ gameType, memberNum: this.data.memberNum })

    this.setData({
      specialCharacter,
    })

    console.log(this.data)

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
        const { isJoinGame, myRole, roomNumber, memberNum } = res.result

        // 创建者加入游戏
        if (isJoinGame === '1') {
          this.setData({
            roomNumber,
            isCreateRoom: '0',
            myRoleName: myRole.itemName,
          })
        } else {
          // 创建者不加入游戏
          wx.redirectTo({
            url: `../board/board?isAfterCreateRoom=1&roomNumber=${roomNumber}&shouldRoomMember=${memberNum}`,
          })
        }

        wx.showToast({
          title: '创建房间成功',
          icon: 'success',
          duration: 1500,
          mask: false,
        })
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
})
