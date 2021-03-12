
//promise-ajax 9:15-9:28
//思路：我想返回一个promise从而能够去，调用ajax这个函数，再调用then,返回成功的结果和失败的结果。
//之后，
function Ajax({ method, url, headers, body }) {
  return new Promise((resolve, reject) => {
    let xml = XMLHttpRequest()
    xml.open(method, url, true)
    for (let key in headers) {//循环头部添加这个请求头，如果为post请求的话
      xml.setRequestHeader(key, headers[key])
    }
    xml.send(body)
    xml.onreadystatechange(() => {
      if (xml.readystatus === 4) {
        if (xml.status === 200 || xml.status === 304) {
          let responseText = JSON.parse(xml.responseText)
          resolve(responseText)

        } else {
          reject(xml)
        }
      }
    })

  })


}


Ajax({
  method: 'post',
  url: 'http://123.com',
  headers: { 'contentype': 'application/json' },
  body: 'user=scx'
}).then(() => {

}, () => {

})