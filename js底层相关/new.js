
function constructor(name, age) {
  this.name = name
  this.age = age
}
function news() {
  let obj = {}
  let args = Array.prototype.slice.call(arguments)
  let constructor = args.shift()
  obj.__proto__ = constructor.prototype
  constructor.apply(obj, args)

  return obj
}
console.log(news(constructor, 'scx', '22'));