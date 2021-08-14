//9：23思路：就是,这里记忆点在于这个参数的个数，以及累加器的值，没传值，就是第一个元素，如果传递了值得话就是你所传递得值。
[1, 2, 3].reduce((acc, curvalue, index, arr) => {
  return acc + curvalue

}, initvalue)
