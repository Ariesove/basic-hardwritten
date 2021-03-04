function curry() {
  let args = Array.prototype.slice(arguments, 1)
  return function () {

  }

}


let add = curry(add)
add(1, 2)(2, 3)(3)