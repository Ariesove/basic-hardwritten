

instanceofs(true, Object)


function instanceofs(left, right) {
  let leftproto = left.__proto__
  let rightproto = right.prototype
  while (true) {
    if (leftproto == null) {
      return false
    }
    if (leftproto === rightproto) {
      return true
    } else {
      leftproto = leftproto.__proto__
    }

  }
}