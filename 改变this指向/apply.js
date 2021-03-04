function apply(thisage, args) {
  let _this = this
  context = thisage ? thisage : window;//考虑可能为空指向
  context.fuc = _this//记住是先挂载函数在去调用函数
  let res = context.fuc(...args)

  delete context.fuc
  return res
  //最后再去返回函数执行的结果。

}




ass.apply(obj, [1, 2, 3])

