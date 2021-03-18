//16：34-
//递归思路：首先明确，这个函数什么功能：使数组有序
//归并思想就是一分为二，然后使左数组，有序，然后使右数组有序，然后再合并，合并这个就等价于这个函数的功能
//想的时候只想第一层，不深想，就是把一个数组，拆分两半，然后让他们排序。因为是数组，所以需要多次比较
function guibing(arr) {
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