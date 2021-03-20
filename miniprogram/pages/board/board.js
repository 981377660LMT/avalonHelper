import create from '../../utils/create'
import store from '../../store/index'

const db = wx.cloud.database()

create.Page(store, {
  data: {
    roomNumber: -1,
    shouldRoomMember: 9,
    roomMemberNow: [],
    isShowTips: false,
    isShowWereWolf: true,
    isShowAvalon: false,
  },

  onLoad: function (options) {
    let { isAfterCreateRoom, roomNumber, shouldRoomMember } = options
    this.roomNumber = parseInt(roomNumber)
    shouldRoomMember = parseInt(shouldRoomMember)

    if (isAfterCreateRoom === '1') {
      this.setData({
        roomNumber,
        shouldRoomMember,
      })
    } else {
      // 法官再一次回到房间，取出之前进入房间时存在store里的数据
      const { roomNumber, memberNum, selectedRoomRolesNow } = this.store.data.roomInfo.targetRoom
      this.setData({
        roomNumber,
        roomMemberNow: selectedRoomRolesNow,
        shouldRoomMember: memberNum,
      })
    }
  },

  onReady: function () {
    // 监听房间人数变化
    if (this.data.roomMemberNow.length !== this.data.shouldRoomMember) {
      const rn = this.store.data.roomInfo.targetRoom?.roomNumber || this.roomNumber

      this.watcher = db
        .collection('room')
        .where({
          roomNumber: rn,
        })
        .watch({
          onChange: snapshot => {
            this.getRoomInfoByRoomNumber(rn)
          },
          onError: err => {
            console.error('the watch closed because of error', err)
          },
        })
    }
  },

  onUnload: function () {
    this.watcher && this.watcher.close()
    this.store.data.roomInfo = {}
  },

  async getRoomInfoByRoomNumber(roomNumber) {
    try {
      const roomInfo = await db
        .collection('room')
        .where({
          roomNumber,
        })
        .get()
      const { selectedRoomRolesNow } = roomInfo.data[0]
      this.setData({
        roomMemberNow: selectedRoomRolesNow,
      })
    } catch (error) {
      console.log(error)
    }
  },

  // 点击固定悬浮时
  onClickHelp() {
    this.setData({
      isShowTips: true,
    })
  },

  changeTabs(e) {
    const currentTab = e.detail.activeKey
    if (currentTab === '1') {
      this.setData({
        isShowWereWolf: true,
        isShowAvalon: false,
      })
    } else {
      this.setData({
        isShowWereWolf: false,
        isShowAvalon: true,
      })
    }
  },
})
