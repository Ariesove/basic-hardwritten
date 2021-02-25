//首先来回顾一下map是怎么用的
let arrr = [123213, 233344]


Array.prototype.maps = function (callback, thisargs) {
  if (typeof callback !== 'function') {
    throw Error('不是函数')
  }
  let array = this;
  let res = [];
  thisargs = thisargs ? thisargs : array;

  for (let i = 0; i < array.length; i++) {
    res.push(callback.call(thisargs, array[i], i, array))
  }
  return res

}
let a = arrr.maps((value, index, arr) => {
  return index
})
console.log(a);
