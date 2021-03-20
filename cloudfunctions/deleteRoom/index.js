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
    // 一个房间至多存在2+0.5小时
    const noMoreThanTwoHours = Date.now() - 2 * 3600 * 1000

    await roomCollection
      .where({
        createTime: db.command.lte(noMoreThanTwoHours),
      })
      .remove()
  } catch (error) {
    console.error(error)
  }
}
