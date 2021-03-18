
function constructor(name, age) {
  this.name = name
  this.age = age
}
function news() {
  let obj = {}
  let args = Array.prototype.slice.call(arguments)//转变为数组，然后取出第一个参数就是构造函数
  let constructor = args.shift()
  obj.__proto__ = constructor.prototype
  constructor.apply(obj, args)

  return obj
}
console.log(news(constructor, 'scx', '22'));