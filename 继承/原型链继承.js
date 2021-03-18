//11;36
function parent(name, sex) {
  this.name = name
  this.sex = sex
  parent.prototype.say = function () {
    console.log(111);
  }
}

function child(name, age) {
  this.age = age
  parent.call(this, name)

}
//8：55 原型链继承--9:03
//1. 
child.prototype = new parent()
child.prototype.constructor = child




