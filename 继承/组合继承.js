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

child.prototype = new parent()//第一次调用这个父构造函数
child.prototype.constructor = child//修改这个原型constructor指向

let a = new child()//第二次调用这个父构造函数
