[1, 2, 3].forEach(function (value, index, arr) {
  return value + index
})


Array.prototype.forEach = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('必须是函数')//抛出类型错误，通过实例化一个对象
  }
  let arr = this
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }

}