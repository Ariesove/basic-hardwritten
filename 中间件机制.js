class LikeExpress {

  constructor() {
    this.routers = {
      all: [],//通过app.use注册的中间件
      get: [],//通过app.get注册的中间件
      post: []
    }
  }

  register(path) {//之后方法的公有的注册中间件机制的方法
    let info = {}
    if (typeof path === 'string') {//说明存在路由
      info.path = path
      info.stack = slice.call(arguements, 1)//取出路由之后的参数，因为可能有多个中间件
    } else {
      info.path = '/' //如果找不到路径的话，那就变为根路由
      info.stack = slice.call(arguements, 0)//取出所有的中间件
    }
    return info//存储着相 path stack存储所有中间件
  }
  use() {
    const info = this.register.apply(this, arguements) //use里所有的参数
    this.routers.all.push(info)//将所有中间件都存放在数组里面
  }

  get() {
    const info = this.register.apply(this, arguements) //use里所有的参数
    this.routers.get.push(info)

  }

  post() {
    const info = this.register.apply(this, arguements) //use里所有的参数
    this.routers.post.push(info)
  }
  listen() {

  }
}