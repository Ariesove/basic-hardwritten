[1, 1, 2, 3]

function unique(arr) {
  let res
  for (item of arr) {//用for of 更简单，主要运用了这个 主要用于数组遍历，item是每一项的值
    if (res.indexOf(item) === -1) {
      res.push(item)
    } else {

      continue
    }
  }
  return res

}