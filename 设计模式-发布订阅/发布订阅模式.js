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

// class EventBus {
//   constructor() {
//     this.map = {}
//   }

//   on(eventname, callback) {
//     if (!this.map[eventname]) {
//       this.map[eventname] = []
//     } else {
//       this.map[eventname].push(callback)
//     }
//   }

//   emit(eventname, ...args) {
//     if (!this.map[eventname]) {
//       return
//     } else {
//       this.map[eventname].forEach(callback => {
//         callback(...args)

//       });
//     }
//   }
// }



// //发布订阅： 11：19 -36不合格
// //分析思路： 此时联想报刊亭作为中间代理者，订阅报纸的人有多个做为订阅者。工厂作为源头。每次由
// //报刊亭进行发布和订阅，如果发布了那就通知每一个订阅者，进行订阅，依据自身的情况进行订阅。

// class Eventbus {

//   constructor() {
//     this.map = {}

//   }

//   on(eventname, cb) {
//     if (!this.map[eventname]) {
//       this.map[eventname] = []
//     } else {
//       this.map[eventname].push(cb)
//     }

//   }

//   emit(eventname, ...args) {
//     if (!this.map[eventname]) {
//       return
//     } else {
//       this.map[eventname].forEach(callback => callback(...args))
//     }
//   }

//   off(eventname, cb) {
//     let index = this.map[eventname].indexOf(callback)
//     if (index != -1) {
//       this.map[eventname].splice(index, 1)
//     } else {
//       return
//     }

//   }
// }

// let eve = new EventBus()
// eve.on(c1, function name(a, b) {
//   console.log(a + b);
// })
// eve.emit()

//15:05 发布订阅-13  8分钟

// class eventbus {

//   constructor() {
//     this.map = {}
//   }
//   on(eventname, callback) {
//     if (!this.map[eventname]) {
//       this.map[eventname] = []
//     } else {
//       this.map[eventname].push(callback)
//     }
//   }
//   emit(eventname, ...args) {
//     this.map[eventname].forEach(cal => cal(...args))
//   }
//   off(eventname, callback) {
//     let index = this.map[eventname].indexOf(callback)
//     if (!index) {
//       return
//     } else {
//       this.map[eventname].split(index, 1)
//     }

//   }

// }

// let per = new eventbus()


//9:57\

// class EventBus {

//   constructor() {
//     this.map = {}
//   }
//   on(eventname, callback) {
//     if (!this.map[eventname]) {
//       this.map[eventnam].push(callback)
//     }
//   }
//   emit(eventname, ...args) {
//     if (!this.map[eventname]) {
//       return
//     } else {
//       this.map[eventnam].forEach(cal => cal(...args))
//     }
//   }
//   off(eventname, callback) {
//     let index = this.map[eventname].indexOf(callback)
//     if (index === -1) {
//       return
//     } else {
//       this.map[eventname].split(index, 1)
//     }
//   }

// }
console.log(01 === 1);