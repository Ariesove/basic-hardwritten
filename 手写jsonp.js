function JSONP({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    window[callback] = function (data) {
      resolve(data)
      document.body.removeChild(script)//就是类似于我在做哪个全局loading组件的时候用到的添加节点就是往这个body里添加。

    }
    let arr = []
    params = { ...params, callback } // a=1&callback=s
    for (let key in params) {
      arr.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arr.join('&')}`
    document.appendChild(script)

  })


}


JSONP({
  url: 'https://loacl:2000',
  params: { a: 1 },
  callback: 's'
}
).then(data => {
  console.log(data);
})