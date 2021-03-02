
function ajax() {
  let xml = new XMLHttpRequest()
  xml.open('Get', 'url', true)

  xml.onreadystatechange(() => {
    if (xml.readystatus === 4) {
      if (xml.status === 200) {
        console.log()///;
      }
    }
  })


  xml.send(null)



}


function ajax() {
  let xml = new XMLHttpRequest()
  xml.open('Post', 'www.haw/?auther=123', true)
  xml.setRequestHeader('Post', auther = 123, x - www - urlencoading)
  xml.onreadystatechange(() => {
    if (xml.readyStatus === 4) {
      if (xml.status === 200) {
        console.log(xml.responseText);
      }
    }

  }

  )
  xml.send(JSON.stringify())

}

