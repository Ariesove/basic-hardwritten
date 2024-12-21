class AsyncQueue {
  constructor(concurrency) {
    this.concurrency = concurrency; // 并发数量限制
    this.running = 0; // 当前正在运行的任务数量
    this.queue = []; // 任务队列
  }
  

  addTask(task) {
    this.queue.push(task);
    this.runTask();
  }
  async runTask() {
    if (this.running >= this.concurrency) {
      return;
    }
    if (this.running < this.concurrency && this.queue.length > 0) {
      const task = this.queue.shift();
      this.running++;
      try {
        await task();
      } catch (error) {
        console.error(error);
      } finally {
        this.running--;
        this.runTask();
      }
    }
  }
}
