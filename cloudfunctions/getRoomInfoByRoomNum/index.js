// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

const db = cloud.database()

const roomCollection = db.collection('room')

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const { inputRoomNumber, avatarUrl, nickName } = event
    const openId = cloud.getWXContext().OPENID
    let { data: targetRoom } = await roomCollection
      .where({
        roomNumber: inputRoomNumber,
      })
      .get()
    targetRoom = targetRoom[0]

    //不存在此房间时
    if (!targetRoom) {
      return {
        openId,
        roomStatus: 404,
      }
    }

    const roomOpenIdArr = targetRoom.selectedRoomRolesNow.map(role => role.openId)
    let myRole = targetRoom.selectedRoomRolesNow.find(role => role.openId === openId) || {}

    //房间满员时
    if (targetRoom.memberNum === targetRoom.selectedRoomRolesNow.length) {
      if (!roomOpenIdArr.includes(openId)) {
        return {
          openId,
          roomStatus: 403,
        }
      } else {
        return {
          openId,
          myRole,
          targetRoom,
          roomStatus: 200,
        }
      }
    }

    let selectedRoomRolesNow = targetRoom.selectedRoomRolesNow
    // 当前房间未满员，需要判断此房间是否包含当前用户以及是否为法官
    if (!roomOpenIdArr.includes(openId) && openId !== targetRoom.creatorOpenId) {
      myRole = targetRoom.leftRoomRolesNow.pop()
      selectedRoomRolesNow.push({ ...myRole, avatarUrl, nickName, openId })

      await roomCollection
        .where({
          roomNumber: targetRoom.roomNumber,
        })
        .update({
          data: {
            selectedRoomRolesNow,
            leftRoomRolesNow: db.command.pop(),
          },
        })
        .then()

      let { data: newTargetRoom } = await roomCollection
        .where({
          roomNumber: targetRoom.roomNumber,
        })
        .get()
      newTargetRoom = newTargetRoom[0]

      return {
        openId,
        myRole,
        targetRoom: newTargetRoom,
        roomStatus: 200,
      }
    }

    return {
      openId,
      myRole,
      targetRoom,
      roomStatus: 200,
    }

    //有空缺，需要判断用户之前使用加入过

    //判断为第一次加入房间
  } catch (error) {
    console.error(error)
  }
}
