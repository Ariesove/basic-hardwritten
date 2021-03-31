
//复盘反思自己的不足其实是这样自己，没有理解这个jsonp跨域的原理，其实img里的标签，还有这个，script的url本质
//其实都是一个get请求，所以这也是这个，所以我往自己网页里创建这个url本质都是在这个，发出get请求，然后去拼接这个url.
//这个题怎么样，去编码记忆，首先这个js就是script，o就是window,p就是params.以及push这样简化记忆量。

function JSONP({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')//这里只是在创建标签，你还没有去，添加这个标签。
    window[callback] = function (data) {
      resolve(data)
      document.body.removeChild(script)
    }
    let arr = []
    params = { ...params, callback }
    for (let key in params) {
      arr.push(`${key}=${params[key]}`)
    }
    script.url = `${url}?${arr.join('&')}`
    document.body.appendChild(script)


  })

}


JSONP({
  url: 'https://localhost:8000',
  params: { auther: 'scx' },
  callback: 'sss'
}).then(data => {
  console.log(data);
}).catch(e => {
  console.log(e);
})




//8：14-21 //失败
//思路；

//jsonp：9：24--9:32叙述思路，就是，通过script里的url发送get请求，并将相应的回调函数，传递至服务端，之后，服务端调用并返回结果

//并且是以promise的形式来包裹，目的就是通过这个then方法来，获取resolve的结果。
//自己，为什么不理解，了，首先你的callback不是提前定义好的，其实就是在这个jsonp的函数里面去，定义的，
//其次callback里的参数，你知道是哪里的吗，其实就是，服务端这里在调用的时候所传递的参数
//9:41-48

function Jsonp({ url, params, callback }) {

  return new Promise((resolve, reject) => {
    let script = document.body.createElemnet('script')//这个只是在创建标签，还没有去，append标签。
    window.callback = function (data) {
      resolve(data)
      document.body.removeChild(script)
    }
    let arr = []

    params = [...params, callback]
    for (let item in params) {
      arr.push(`${item}=${params[item]}`)
    }

    script.url = `${url}? ${arr.join('&')}`
    document.body.append(script)

  })

}

Jsonp({
  url: 'https://localhost:20',
  params: 'username=scx',
  callback: 'ss'

}).then(() => {
  console.log(a);
})