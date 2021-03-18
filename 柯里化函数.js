function curry(bar, ...args) {
  return function () {
    args = [...args, ...arguments]//每次都再缓存这个单个参数

    if (args.length < bar.length) {
      return curry(bar, ...args)//当参数个数不符合条件的时候，就继续调用，然后
    } else {
      bar.apply(null, args)//只有当参数个数和初始函数里的参数个数一致，才可以去调用这个函数。
    }
  }
}


//柯里化理解
//
function add(a) {
  //a
  return function (b) {
    return function (c) {
      return a + b + c
    }//这里用到了闭包的特性

  }//也就是说所谓的柯里化就是将多个参数的函数转变为具有单个参数的函数
  //只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

}
let a = add(1)
let b = a(2)
let c = b(3)


add(1, 2, 3)
add(1)(2)(3)