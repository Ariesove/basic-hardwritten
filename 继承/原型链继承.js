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




//11：45---11:56 //过关，记忆桩记得去用这个，父子的原型图进行理解，放轻松，这个点每有任何问题，
//先梳理原型图再去，写
