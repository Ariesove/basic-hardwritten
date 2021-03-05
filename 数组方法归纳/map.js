
[1, 2, 3].map(function (value, index, arr) {
  return value + index
}, thisages)
//map可以改变内部回调的this指向。
[1, 3, 5]

function map(callback, thisages) {
  if (typeof callback !== 'function') {
    throw new TypeError('必须是函数')

  }
  let arr = this;
  let thisages = thisages ? thisages : arr //需要来改变this的指向
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(callback.call(thisages, arr[i], i, arr))//去在调用函数的同时来改变这个this的指向。
  }
  return res//map是返回一个数组的

}