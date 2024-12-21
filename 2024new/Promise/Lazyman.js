// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan("Hank")输出:
// Hi! This is Hank!

// LazyMan("Hank").sleep(10).eat("dinner")输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

//   LazyMan("Hank").eat("dinner").eat("supper")输出
// Hi This is Hank!
// Eat dinner~
//   Eat supper~

//     LazyMan("Hank").sleepFirst(5).eat("supper")输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

// 以此类推。


function LazyMans(params) {
  this.queue = [() => {
    console.log(params)
  }
  ]
  setTimeout(async () => {
    console.log('this.queue', this.queue)
    for (const iterator of this.queue) {
      await iterator()
    }

  });

}

LazyMans.prototype.sleep = function (time) {
  this.queue.push(() => new Promise((resolve) => {
    setTimeout(() => {
      console.log('Wake up after 10')
      resolve()
    }, time * 1000)
  }))

  return this

}

LazyMans.prototype.eat = function (food) {
  this.queue.push(() => {
    console.log('Eat dinner~')
  }


  )

  return this
}
LazyMans.prototype.sleepFirst = function (time) {
  this.queue.unshift(() => new Promise((resolve) => {
    setTimeout(() => {
      console.log('Wake up after 5')
      resolve()
    }, time * 1000)
  }))

  return this

}

function LazyMan(params) {
  return new LazyMans(params)
}
LazyMan("Hank").sleepFirst(5).eat("supper")




// 我觉得你现在已经，逐步渐入佳境了，后期很多东西，你已经可以完全靠自己实现了，不需要总是不自信的觉得必须得看答案才会，你靠自己的分析一样可以，

// 这个题目的问题在于，一个是对于继承的理解，已经类，函数内部this指向有点疑惑，同时初始的时候没有想到用队列
// forEach 有坑，无法用异步await ,以后和异步相关操作都别用
// 同时对于里面的，异步队列，如何延迟指向其实就是宏伟任务队列