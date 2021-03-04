perso.bind(a, 's')('s', '4')


function bind(thisages) {
  let _this = this

  let args = Array.prototype.slice(arguments, 1)

  return res = function () {
    let args2 = Array.prototype.slice(arguments)
    let arg = args.concat(args2)
    if (res instanceof _this) {
      _this.apply(res, arg)
    } else {
      _this.apply(thisages, arg)
    }
    res.prototype = _this.prototype
  }

}

let b = new perso('scx')