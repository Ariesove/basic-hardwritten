//11;36
function parent(name, sex) {
  this.name = name
  this.sex = sex
}

function child(age) {
  this.age = age

}

child.prototype = new parent()

