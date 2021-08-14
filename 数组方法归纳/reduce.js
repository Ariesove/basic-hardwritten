//15:28 --39//失败
// reduce
//reduce就是说，要去用到这个，累加值，并且就是需要用到这些值
// [1, 2, 3].reduce((accumulate, curvalue, curindex, arr) => prevalue + curindex, initvalue)


function reduce(fn, initvalue) {
  let arr = this
  let len = arguments.length
  let acc = len === 1 ? arr[0] : initvalue
  let indexvalue = len === 1 ? 1 : 0

  for (let i = indexvalue; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr)//每一次得结束都是下一次得开始，迭代，不断的累加。
  }
  return acc

}


// reduce 20:47-58

//9:11-18
[1, 2, 3].reduce((accumulate, curvalue, curindex, arr) => {
  return accumulate
}, initvalue)

function reduce(callback, initvalue) {
  let arguments = arguments
  let _this = this
  let accumulate = arguments.length === 1 ? _this[0] : initvalue
  let initindex = arguments.length === 1 ? 0 : 1
  for (let i = curindex; i < _this.length; i++) {
    accumulate = callback(accumulate, _this[i], i, _this)
  }
  return accumulate
}