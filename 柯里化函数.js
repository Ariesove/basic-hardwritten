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
//15:00-15:15
//柯里化//通过
//思路：首先所谓的柯里化就是将多个参数的函数转变为具有单个参数的函数（并接受原函数的第一个参数），并且去返回
//就是将函数包装为一个柯里化函数，这样去接受第一个参数并保存，然后多次调用这个函数，最终参数条件符合再最终去调用这个原函数
//作用就是实现参数复用。
function add(a, b, c) {
  return a + b + c

}

let f = curry(add(1, 2, 3))
f(1)(2)(3)

function curry(func, ...args) {


  return function () {
    args = [...args, ...arguments]
    if (args.length < func.length) {
      return curry(func, ...args)//这里用这个。。。参数其实就是 1，2，3 你每次参数传递的时候就是用到这个参数，我一直以为是又解构了忘记了函数传递参数，是直接进行传递的
    } else {
      return func.apply(null, args)
    }
  }

}