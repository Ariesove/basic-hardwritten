//8;39--8:44 递归实现
// 梳理思路，首先所谓这个。
//递归过关。
function flatten(arr) {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      flatten(item)
    } else {
      res.push(item)
    }

  }
  return res
}

console.log(flatten([1, [2, [3, 4, [5]]]]))

