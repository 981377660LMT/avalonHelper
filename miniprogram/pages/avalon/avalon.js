import create from '../../utils/create'
import store from '../../store/index'

create.Page(store, {
  /**
   * 页面的初始数据
   */
  data: {
    roomNumber: -1,
    memberNum: 9,
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
    isSelectRole: false,
  },
  // 改变count数量时
  onCountChange(e) {
    console.log(e)
  },
  // 改变特殊角色时
  onSelectChange(e) {
    console.log(e)
  },
  // 点击固定悬浮时
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { gameType, isJoinGame, isCreateRoom } = options
    console.log(options)
    // 如果options里有isCreateRoom，则不请求当前的房间号
    // 请求数据库，返回数据显示角色弹窗,返回房间号等
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
