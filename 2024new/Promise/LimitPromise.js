//promise 的并发数限制---于 2022年4月份考过

function delay(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, time)
  })
}
const p1 = () => delay('1', 5000)
const p2 = () => delay('2', 2000)
const p3 = () => delay('3', 3000)
const p4 = () => delay('4', 2000)
const p5 = () => delay('5', 3000)


const p = [p1, p2, p3, p4, p5];

const requestLimit = (limitArray, limit) => {
  let tempraArray = [];
  let tempraIndex = 0
  for (let i = 0; i < limitArray.length; i++) {
    if (tempraIndex >= limit) {
      continue
    }
    const element = limitArray[i];
    tempraArray.push(element())
    tempraIndex++
    console.log('tempraArray', tempraArray)
    // tempraArray[i].then((res) => {

    //   console.log('res', res)
    //   tempraArray.splice(i, 0)

    // })

  }

}

let a = requestLimit(p, 2)
console.log('a', a)


