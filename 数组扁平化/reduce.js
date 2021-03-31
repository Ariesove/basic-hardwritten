//9：23思路：就是,这里记忆点在于这个参数的个数，以及累加器的值，没传值，就是第一个元素，如果传递了值得话就是你所传递得值。
[1, 2, 3].reduce((acc, curvalue, index, arr) => {
  return acc + curvalue

}, initvalue)
function reduce(fn, initvalue) {
  let arr = this
  let len = arguments.length
  let acc = len === 1 ? arr[i] : initvalue
  let indexvalue = len === 1 ? 1 : 0

  for (let i = indexvalue; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr)//每一次得结束都是下一次得开始，迭代，不断的累加。
  }
  return acc

}