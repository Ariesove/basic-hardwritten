//14：44-/不合格
//思路就是先设置一个事件中心构造函数，类似于一个报刊厅，之后设置订阅事件，和发布事件，订阅者有很多，订阅的时候，存储相应的回调，
//发布的时候，就来循环执行这个所存储的订阅事件，就好比，发布周刊，的时候通知所有订阅者，然后订阅者来判断是否是自己想要的。
//就是订阅者，去收集函数，发布者，每次都会去循环执行，每一个函数，并且去传递参数。

// const { NoEmitOnErrorsPlugin } = require("webpack")


// function Eventbus() {
//   this.map = {}


//   on(eventname, callback){
//     if (!this.map[eventname]) {
//       this.map[eventname] = []
//     } else {
//       this.map[eventname].push(callback)
//     }

//   }
//   emit(eventname, ...args){//因为这个callback可能有多个参数，所以要用...,
//     if (!this.map[eventname]) {//emit主要是来检测当前监听队列是否存在，不需要去初始化序列。
//       this.map[eventname] = []
//     } else {
//       this.map[eventname].forEach(callback => {
//         callback(...args)
//       }


//     });
//   }

// }



//11:26 
//发布订阅者模式，就是说好比现在有一个报刊亭，这个充当中间商，发布报纸的厂商，将报纸发送给中间商，然后订阅者，订阅报纸，并且依次缓存到队列里
//然后当发布消息的时候，以此执行，这个队列里的函数，并传递所传递的参数，然后由订阅者来判断是否满足需求

class EventBus {
  constructor() {
    this.map = {}
  }

  on(eventname, callback) {
    if (!this.map[eventname]) {
      this.map[eventname] = []
    } else {
      this.map[eventname].push(callback)
    }
  }

  emit(eventname, ...args) {
    if (!this.map[eventname]) {
      return
    } else {
      this.map[eventname].forEach(callback => {
        callback(...args)

      });
    }
  }
}
