function parent(name, sex) {
  this.name = name
  this.sex = sex

  parent.prototype.say = function () {
    console.log(111);
  }
}

function child(name, age) {
  parent.call(this, name)

}

child.prototype = Object.create(parent.prototype)//修改子类原型对象的__proto__为父构造函数的原型对象实现继承父的原型方法
child.prototype.constructor = child//修改这个原型constructor指向