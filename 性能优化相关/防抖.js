// function debance(fn, delay) {

//   let timer = null;

//   return function () {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       fn.apply(this, arguments)
//       timer = null
//     }, delay);


//   }

// }


// input.addEventListener('keyup', debance(function () {
//   console.log(input.value);
// }, 1000)
// )




///二次复盘防抖；
function debance(callback, delay) {
  let timer = null;
  let args = [...argumets];//为什么
  return function () {

    if (timer) {
      clearTimeout(timer)
    } else {
      timer = setTimeout(() => {
        callback.apply(this, args)
        timer = null
      }, delay);
    }





  }

}


input.addEventListener('keyup', debance(function () {
  console.log(input.value);
}, 1000))



// 15：37 -42
function debance(callback, delay) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    } else {
      timer = setTimeout(() => {
        callback.apply(this)
      }, delay);
    }
  }

}



input.addEventListener('keyup', debance(function callback() {
  console.log(111);
}, delay))


thr


input.addEventListener