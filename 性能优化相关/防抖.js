function debance(fn, delay) {

  let timer = null;

  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay);


  }

}


input.addEventListener('keyup', debance(function () {
  console.log(input.value);
}, 1000)



