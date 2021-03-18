




// function JSONP({ url, params, callback }) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     window[callback] = function (data) {
//       resolve(data)
//       document.body.removeChild(script)
//     }
//     let arr = []
//     params = { ...params, callback }
//     for (let key in params) {
//       arr.push(`${key}=${params[key]}`)
//     }
//     script.url = `${url}?${arr.join('&')}`
//     document.body.appendChild(script)


//   })

// }


// JSONP({
//   url: 'https://localhost:8000',
//   params: { auther: 'scx' },
//   callback: 'sss'
// }).then(data => {
//   console.log(data);
// }).catch(e => {
//   console.log(e);
// })


while (0) {
  console.log(1);
}