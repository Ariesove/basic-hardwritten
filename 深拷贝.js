a = {
  a: 1,
  b: {
    a: 1
  }
}

function deepclone(obj) {

  if (obj !== null && typeof obj !== 'object') {
    throw new TypeError('必须是数组或对象，并且不能为空')

  }
  let res = []
  if (obj instanceof Array) {
    res = []
  } else {
    res = {}
  }
  for (key in obj) {
    if (obj.hasOwnPropoty(obj[key])) {
      continue
    }
    res[key] = deepclone(obj[key]) //对于这个递归的逻辑还是不清楚
  }
  return res

}