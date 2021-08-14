//JS实现一个带并发限制的异步调度器Scheduler，
//保证同时运行的任务最多有两个。完善下面代码的Scheduler类，使以下程序能够正常输出：
// 11.53
//首先来拆解一下需求，限制同时执行任务的数量，一旦超过，一定数量就停止执行任务。
// 
// class Scheduler {
//   constructor() {
//     this.max = 2
//     this.current = 0
//     this.queue = []
//   }

//   add(promiseCreator) {
//     if (this.current > this.max) {
//       for (let i = 0; i < this.max; i++) {
//         this.queue.shift()()
//         this.current--
//       }

//     } else {
//       this.queue.push(promiseCreator)
//     }
//   }
//   // ...
// }

// const timeout = time => new Promise(resolve => {
//   setTimeout(resolve, time);
// })

// const scheduler = new Scheduler();

// const addTask = (time, order) => {
//   scheduler.add(() => timeout(time).then(() => console.log(order)))
// }

// addTask(1000, '1');
// addTask(500, '2');
// addTask(300, '3');
// addTask(400, '4');

// output: 2 3 1 4

// class Scheduler {
//   constructor() {
//     this.max = 2
//     this.current = 0
//     this.tasks = []
//   }
//   add(promiseCreator) {
//     if (this.current >= this.max) {
//       this.tasks.push(promiseCreator)
//     } else {
//       this.current++
//       promiseCreator().then(() => {
//         this.current--
//         this.tasks.unshift().then(() => {
//           this.current--

//         })
//       })
//     }
//   }
// }

// const timeout = time => new Promise(resolve => {
//   setTimeout(resolve, time);
// })

// const scheduler = new Scheduler();

// const addTask = (time, order) => {
//   scheduler.add(() => timeout(time).then(() => console.log(order)))
// }

// addTask(1000, '1');
// addTask(500, '2');
// addTask(300, '3');
// addTask(400, '4');

// output: 2 3 1 4

class Scheduler {
  constructor() {
    this.awatiArr = [];
    this.count = 0;
  }
  async add(promiseCreator) {
    if (this.count >= 2) {
      await new Promise((resolve) => {
        this.awatiArr.push(resolve);
      });
    }
    this.count++;
    const res = await promiseCreator();
    this.count--;
    if (this.awatiArr.length) {
      // 前面promise的resolve
      this.awatiArr.shift()();
    }
    return res;
  }
}
const scheduler = new Scheduler();
const timeout = (time) => {
  return new Promise(r => setTimeout(r, time))
}
const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
    .then(() => console.log(order))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)