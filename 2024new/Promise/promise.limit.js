const promiseAllLimit = (promises, limit) => {
  let currentIndex = 0;
  const run = () => {
    // console.log('runPromise', runPromise())
    return new Promise((resolve, reject) => {
      const runPromise = promises[currentIndex];
      resolve(runPromise())
      currentIndex++
    }).then(() => {
      if (currentIndex < promises.length) {
        run()
      }
    })
  }

  // 依次执行
  for (let i = 0; i < limit; i++) {
    run()
  }


}


// 测试
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
const tasks = [() => new Promise((resolve) => setTimeout(() => { console.log('1111'); resolve(1) }, 1000)), () => new Promise((resolve) => setTimeout(() => { console.log('2222'); resolve(2) }, 1000)), () => new Promise((resolve) => setTimeout(() => { console.log('3333'); resolve(1) }, 1000)), () => new Promise((resolve) => setTimeout(() => { console.log('4444'); resolve(4) }, 1000))];

promiseAllLimit(tasks, 2)

// const promiseAllLimit = (promises, limit) => {
//   let queue = [];
//   let currentIndex = 0;
//   let activedCount = 0;

//   const run = () => {
//     if (currentIndex >= promises.length) {
//       return;
//     }

//     activedCount++;
//     const runPromise = promises[currentIndex];

//     runPromise().then((res) => {
//       queue[currentIndex] = res;
//       currentIndex++;
//       activedCount--;

//       if (activedCount < limit && currentIndex < promises.length) {
//         run();
//       }
//     }).catch(error => {
//       // 处理错误情况
//       console.error('Error:', error);
//       currentIndex++;
//       activedCount--;
//       if (activedCount < limit && currentIndex < promises.length) {
//         run();
//       }
//     });
//   };

//   // 启动指定数量的任务
//   for (let i = 0; i < Math.min(limit, promises.length); i++) {
//     run();
//   }

//   return new Promise((resolve) => {
//     const checkCompletion = () => {
//       if (activedCount === 0 && currentIndex === promises.length) {
//         resolve(queue);
//       }
//     };

//     setInterval(checkCompletion, 100); // 每隔100毫秒检查一次是否完成
//   });
// };

// // 测试
// const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
// const tasks = [
//   () => sleep(1000),
//   () => sleep(2000),
//   () => sleep(3000),
//   () => sleep(4000),
//   () => sleep(5000),
//   () => sleep(6000),
//   () => sleep(7000),
//   () => sleep(8000),
//   () => sleep(9000),
//   () => sleep(10000)
// ];

// promiseAllLimit(tasks, 3).then(() => console.log('done'));

// const results = [];
// let currentIndex = 0;
// let activeCount = 0;

// const runNext = () => {
//   if (currentIndex >= promises.length) {
//     return;
//   }

//   const promise = promises[currentIndex];
//   currentIndex++;

//   activeCount++;

//   promise.then((result) => {
//     results.push(result);
//     activeCount--;
//     runNext();
//   }).catch((error) => {
//     results.push(error);
//     activeCount--;
//     runNext();
//   });
// };

// for (let i = 0; i < limit && i < promises.length; i++) {

// }
