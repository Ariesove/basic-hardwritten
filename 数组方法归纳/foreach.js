[1, 2, 3].forEach(function (value, index, arr) {
  arr[index] = 2
})//修正认知，就是foreach更多的是用来去循环的，它其实是没有这个返回值的，然后对元素每一项进行修改。


Array.prototype.forEach = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('必须是函数')//抛出类型错误，通过实例化一个对象
  }
  let arr = this
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }

}