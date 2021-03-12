// //9：27
// function flatten(arr) {
//   let stack = [...arr]
//   let res = []
//   while (stack.length) {
//     let n = stack.pop()
//     if (Array.isArray(n)) {
//       stack.push(...n)
//     } else {
//       res.push(n)
//     }
//   }
//   return res.reverse()


// }
// flatten([1, [[2], 3], 4, [2]])



function flatten(arr) {
  let stack = [...arr]
  let res = []

  while (stack.length) {

    let s = stack.pop()
    if (Array.isArray(s)) {
      stack.push(...s)
    } else {
      res.push(s)
    }

  }
  return res.reverse()//



}


flatten([1, 2, [2, 3]])