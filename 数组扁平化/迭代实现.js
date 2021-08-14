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

//22:14 思路：就是说这个，利用循环模拟递归，用出栈，来模拟函数，出栈的一个过程

let a = [1, 2, 3, [2, [23, 2], 3, 4]]

function flatten(a) {
  let res = []
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      flatten(a[i])
    } else {
      res.push(a[i])
    }
  }

}

function flatten(a) {
  let stack = [...a]
  let len = stack.length
  let res = []
  while (len) {
    let p = stack.pop()
    if (Array.isArray(p)) {
      stack.push(...p)
    } else {
      res.push(p)
    }
    len--
  }
  return res.reverse()
}
