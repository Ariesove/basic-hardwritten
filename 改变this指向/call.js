function call(thisages, ...args) {
  let context = thisages ? thisages : window
  let _this = this

  context.func = _this;
  let res = context.func(...args)


  delete context.func
  return res

}


ass.call(obj, 'scx')