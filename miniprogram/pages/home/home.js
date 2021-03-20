import create from '../../utils/create'
import store from '../../store/index'

// '1'代表狼人杀，'2'代表阿瓦隆
let gameType = '0'
let userInfo = {}
// 默认所有角色都加入游戏
let isJoinGame = '1'
let isCreateRoom = '1'

create.Page(store, {
  data: {
    isShowModalInput: false,
  },

  getUserInfo(e) {
    gameType = e.currentTarget.dataset.gametype
    userInfo = e.detail.userInfo
    isJoinGame = '1'
    store.data.userInfo = e.detail.userInfo

    // 判断用户是否授权
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          console.log('用户之前已经授权过了')
          // 跳转
          this.chooseRoom()
        } else {
          // console.log('用户之前未授权')
          if (userInfo) {
            //将userInfo存入本地storage
            console.log('第一次授权了')
            // 用户授权跳转
            this.chooseRoom()
          } else {
            wx.showModal({
              title: '使用此工具需要您的授权',
              content: '',
              showCancel: false,
              confirmColor: '#000000',
            })
          }
        }
      },
    })
  },

  // 进入房间前是创建房间还是加入房间
  chooseRoom() {
    const content = gameType === '1' ? '前往狼人杀房间' : '前往阿瓦隆房间'
    wx.showActionSheet({
      itemList: ['创建房间', '加入房间'],
      itemColor: '#000000',
      success: result => {
        console.log(typeof result.tapIndex)
        result.tapIndex === 0 ? this.createRoom() : this.joinRoom()
      },
      fail: () => {},
    })
  },

  // 创建房间者是否要加入本局游戏
  createRoom() {
    const content = gameType === '1' ? '正在创建狼人杀房间' : '正在创建阿瓦隆房间'
    wx.showModal({
      content,
      title: '请问您(房间创建者)是否参加游戏',
      showCancel: true,
      cancelText: '不参加',
      cancelColor: '#000000',
      confirmText: '参加',
      confirmColor: '#666666',
      success: e => {
        if (e.cancel) {
          console.log('开启房间，创建者不参加游戏')
          isJoinGame = '0'
        }
        this.goToSelectRoles()
      },
    })
  },

  // 创建房间者跳转路由
  goToSelectRoles() {
    console.log(gameType, isJoinGame)
    const roomType = gameType === '1' ? 'werewolf' : 'avalon'
    wx.navigateTo({
      url: `../${roomType}/${roomType}?gameType=${gameType}&isJoinGame=${isJoinGame}&isCreateRoom=${isCreateRoom}`,
      success: result => {
        console.log('建立房间成功')
      },
      fail: () => {
        console.log('建立房间失败')
      },
      complete: () => {},
    })
  },

  //////////////////////  //////////////////////
  // 加入房间
  joinRoom() {
    this.setData({
      isShowModalInput: true,
    })
  },
  // 输入房间号并确定后
  onModalInputConfirm(e) {
    // 注意获得的房间号是一个字符串
    const inputRoomNumber = parseInt(e.detail.input) || -1
    // 调用云函数发送请求，查询房间;存在且非满员时，存入当前玩家的信息
    wx.showLoading({
      title: '正在查询房间',
      mask: true,
    })
    console.log('输入的是', inputRoomNumber)
    wx.cloud
      .callFunction({
        name: 'getRoomInfoByRoomNum',
        data: {
          inputRoomNumber,
          avatarUrl: this.store.data.userInfo.avatarUrl,
          nickName: this.store.data.userInfo.nickName,
        },
      })
      .then(res => {
        // 云函数返回：有房间号以及当前玩家的角色，则根据游戏种类跳转至房间；加载房间前需要请求云函数获取房间状态；对应界面显示弹窗

        const { roomStatus, targetRoom, openId } = res.result
        console.log(res.result)

        switch (roomStatus) {
          //正常返回，路由跳转
          case 200:
            this.store.data.roomInfo = res.result
            const roomType = targetRoom.gameType === '1' ? 'werewolf' : 'avalon'
            wx.hideLoading()
            if (targetRoom.isJoinGame === '0' && openId === targetRoom.creatorOpenId) {
              wx.navigateTo({
                url: '../board/board',
                success: () => {
                  wx.showToast({
                    title: '加入房间成功',
                    icon: 'success',
                    duration: 1500,
                    mask: false,
                  })
                },
              })
            } else {
              wx.navigateTo({
                url: `../${roomType}/${roomType}`,
                success: () => {
                  wx.showToast({
                    title: '加入房间成功',
                    icon: 'success',
                    duration: 1500,
                    mask: false,
                  })
                },
              })
            }

            break

          // 房间不存在
          case 404:
            wx.showToast({
              title: '房间不存在',
              icon: 'error',
              duration: 1500,
              mask: false,
            })
            break

          // 加入了别人的满员房间
          case 403:
            wx.showToast({
              title: '房间已满员',
              icon: 'error',
              duration: 1500,
              mask: false,
            })
            break

          default:
            wx.showToast({
              title: '加入房间失败',
              icon: 'error',
              duration: 1500,
              mask: false,
            })
            break
        }
      })
      .catch(error => {
        wx.showToast({
          title: '加入房间失败',
          icon: 'error',
          duration: 1500,
          mask: false,
        })
      })
  },
})
