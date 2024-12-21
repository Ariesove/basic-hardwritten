

// instanceofs(true, Object)
// function instanceofs(left, right) {
//   let leftproto = left.__proto__
//   let rightproto = right.prototype
//   while (true) {
//     if (leftproto == null) {
//       return false
//     }
//     if (leftproto === rightproto) {
//       return true
//     } else {
//       leftproto = leftproto.__proto__
//     }

//   }
// }

let instanceOf = (left, right) => {
  //返回对象原型，或者叫隐式原型
  let _proto = Object.getPrototypeOf(left);
  let Protype = right.prototype

  while (true) {
    if (_proto === Protype) {
      return true
    }
    // 返回对象原型
    _proto = Object.getPrototypeOf(left);
    if (_proto === null) {
      return false
    }
  }

}

let test = instanceOf({}, Object)
console.log('test', test)