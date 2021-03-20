// 云函数入口文件
const cloud = require('wx-server-sdk')
const { shuffleArray } = require('./utils/shuffleArray')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV,
})

const db = cloud.database()

const roomCollection = db.collection('room')

const allRoomNumberArr = Array(9999)
  .fill(0)
  .map((value, index) => ({ [index + 1]: 1 }))

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const { gameType, isJoinGame, memberNum, normalWolfNum, specialCharacter, avatarUrl, nickName } = event
    const openId = cloud.getWXContext().OPENID

    const normalCharacter = {
      1: {
        normalMan: {
          id: 0,
          iconType: 'icon-ren',
          itemName: '普通村民',
          isSelected: 1,
          roleInfo: '普通村民:非常普通的村民。',
        },
        normalWolf: {
          id: 1,
          iconType: 'icon-lang1',
          itemName: '普通狼人',
          isSelected: 1,
          roleInfo: '普通狼人:非常普通的狼人。',
        },
      },
      2: {
        normalMan: {
          id: 0,
          iconType: 'icon-ren',
          itemName: '忠臣',
          isSelected: 1,
          roleInfo: '忠臣:亚瑟的忠臣。',
        },
        normalWolf: '',
      },
    }

    // 生成普通人，普通狼人，特殊角色的数组
    const specialCharacterNum = specialCharacter.reduce((pre, cur) => {
      return cur.isSelected === 1 ? pre + 1 : pre
    }, 0)
    const normalManNum = memberNum - specialCharacterNum - normalWolfNum
    const normalManArr = Array(normalManNum).fill(normalCharacter[gameType].normalMan)
    const normalWolfArr = Array(normalWolfNum).fill(normalCharacter[gameType].normalWolf)
    const selectedSpecialCharacterArr = specialCharacter.filter(item => item.isSelected === 1)

    // 合并数组，打乱顺序
    const leftRoomRolesNow = [...normalManArr, ...normalWolfArr, ...selectedSpecialCharacterArr]
    shuffleArray(leftRoomRolesNow)
    const selectedRoomRolesNow = []

    let myRole = ''
    let roomNumber = -1

    //判断创建者是否参加游戏，参加先处理创建者的角色，再处理存入数据库的数据
    if (isJoinGame === '1') {
      myRole = leftRoomRolesNow.pop()
      selectedRoomRolesNow.push({ ...myRole, avatarUrl, nickName, openId })
    }

    // 查询并生成1-9999的房间号
    const { data: allRoomArrNow } = await roomCollection.get()
    const allRoomNumberArrNow = allRoomArrNow.map(room => room.roomNumber)
    for (let roomNumberNow of allRoomNumberArrNow) {
      allRoomNumberArr[roomNumberNow - 1][roomNumberNow] = 0
    }
    const allowedRoomNumberArr = allRoomNumberArr.filter((roomNumberObj, index) => roomNumberObj[index + 1] === 1)
    shuffleArray(allowedRoomNumberArr)
    roomNumber = parseInt(Object.keys(allowedRoomNumberArr.pop())[0]) || -1

    //提交至数据库
    await roomCollection.add({
      data: {
        roomNumber,
        gameType,
        memberNum,
        normalWolfNum,
        isJoinGame,
        specialCharacter,
        leftRoomRolesNow,
        selectedRoomRolesNow,
        creatorOpenId: openId,
        createTime: Date.now(),
      },
    })

    // 返回创建玩家的信息，角色，房间号
    return {
      roomNumber,
      memberNum,
      normalWolfNum,
      isJoinGame,
      specialCharacter,
      leftRoomRolesNow,
      myRole,
    }
  } catch (error) {
    console.error(error)
  }
}
