//16：34-
//递归思路：首先明确，这个函数什么功能：使数组有序
//归并思想就是一分为二，然后使左数组，有序，然后使右数组有序，然后再合并，合并这个就等价于这个函数的功能
//想的时候只想第一层，不深想，就是把一个数组，拆分两半，然后让他们排序。因为是数组，所以需要多次比较
function guibing(arr) {
  if (arr.length < 2) {
    return arr
  }
  let mid = Math.floor(arr.length / 2)
  let leftarr = guibing(arr.slice(0, mid))
  let rightarr = guibing(arr.slice(mid))
  return Mergesort(leftarr, rightarr)


  function Mergesort(leftarr, rightarr) {
    let res = []
    while (leftarr.length && rightarr.length) {
      if (leftarr[0] >= rightarr[0]) {
        res.push(rightarr.shift())
      } else {
        res.push(leftarr.shift())
      }
    }
    while (leftarr.length) {//就是每次比较后把剩下的，放到这个数组的末尾就好，因为，之前已经比较过了就是一个有序的，大胆放
      res.push(leftarr.shift())
    }
    while (rightarr.length) {
      res.push(rightarr.shift())
    }
    return res
  }


}
console.log(guibing([2, 3, 1]));

//15：39-15:57
//首先归并排序就是，分而治之的思想，首先我现在想让这个数组有序，然后，这个大问题难以解决
//我就想来递归的处理，将整个数组有序，转变为单个元素有序，因为单个元素一定是有序的
//将数组一分为二，然后将两个数组进行排序，然后重复这个逻辑。
//所以来定义递归式，功能就是来实现数组有序，然后这个返回值就是递归函数的等价，就是将两个数组进行排序，由于不止一个所以内部需要去循环比较。。

// [1,2,1,4]

// function guibing(arr) {
//   let mid = Math.floor(arr.length / 2)
//   let left = guibing(arr.slice(0, mid))
//   let right = guibing(arr.slice(mid))
//   return Merge(guibing(left), guibing(right))

//   function Merge(l, r) {
//     let leftlen = l.length
//     let rightlen = r.length

//     let res = [] //这个res只能放在这个函数内部，因为return后的语句无法执行了
//     while (leftlen && rightlen) {
//       if (l[0] <= r[0]) {//这里注意一下，就是左边要等于，右边的情况下也要push到数组里面这样的话，就可以保证，每次左边相同的元素一直在前，如果不这样，右边元素相同的情况下，它先push相对顺序不就乱了吗
//         res.push(l.shift())
//       } else {
//         res.push(r.shift())
//       }
//     }

//     while (leftlen) {
//       res.push(l.shift())
//     }
//     while (rightlen) {
//       res.push(r.shift())
//     }

//     return res
//   }


// }
// //o(nlogn) o(n)
// //稳定排序。九九归一，非常稳 😄
// console.log(guibing([6, 3, 2, 1]));