// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[array[i], array[j]] = [array[j], array[i]]
//   }
// }
// arr = [1, 2, 3, 4, 5]
// shuffleArray(arr)
// console.log(arr)

const a = Array(9999)
  .fill(0)
  .map((value, index) => ({ [index + 1]: 1 }))
  .slice(-1)

console.log(a)
