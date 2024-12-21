//使用promsie 


const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    console.log('2', 2)
    const success = true;
    if (success) {
      resolve('操作成功');
    } else {
      reject('操作失败');
    }
  }, 1000);
  // 同步操作
  console.log('1', 1)

  // resolve('操作成功');
  // reject('操作成功');
})

let test = promise.then((result) => {
  console.log(result);
})

// console.log(test);
// promise.resolve('操作成功');

// 21:  31
class PromiseMy {
  constructor(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.pendingFullfilled = [];
    this.pendingFalied = [];

    this.resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fullfilled'
        this.value = value;
        // 这个我没有理解，这个函数是执行了才会去，但是此时还在定时器，中，这个时候还存在resolve函数吗
        this.pendingFullfilled.forEach(fn => fn())

      }

    }

    this.reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.pendingFalied.forEach(fn => fn())
      }
    }
    executor(this.resolve, this.reject)

  }



  then(resolveFunc, rejectFunc) {
    if (this.status === 'pending') {
      this.pendingFullfilled.push(() => {
        resolveFunc
      })
      this.pendingFalied.push(() => {
        rejectFunc
      })
    }

    if (this.status === 'fulfilled') {
      resolve(this.value);
    }
    if (this.status === 'rejected') {
      reject(this.reason);
    }


  }
}


// 今日主要是注意一个是考虑用户传入的函数可能是一个非法函数，所以要考虑捕获异常,
// 其实在then 函数里面，本身会返回一个新的promise 
// then的链式调用怎么通过递归来解决
// 如何理解里面的发布和订阅，本周就是调用then的时候可能 此时状态并没有被改变，因此需要先订阅，再执行resolve,.reject的时候再去统一进行订阅。
