function throter(callback, lay) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        callback.apply(this, arguments)
        timer = null
      }, lay);
    }

  }

}

}
ds.addEventListener('input', throter(function () {
  console.log(input.value);
}, 100))