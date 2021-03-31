### Ajax
1. 首先就是说这个ajax是什么其实就是一个访问后端所给路由的数据的技术
2. 那么怎么来实现一个简易的ajax其实就是首先来这个，首先联想一下就是这个ajax比较open，也就是说很开放，正因为开放，所以才能够，发送get请求和post请求。
3. 通过onreadystatechange，每当调用send方法，状态码改变就会去触发这个状态的改变，并且当且仅当，这个readystate===4,state===200的时候才会返回新的数据。
4. 调用send方法发送数据。（联想哦 哦，shi 掉了）。


### JSONP
#### 思路
1. 首先运用promise来实现这个，异步的请求。
2. 创建script标签，如果你手动去引入的话，不就太慢了吗。
3. 去解析你传递的参数，运用这个for in 遍历对象的属性，然后将参数push到数组里。
4. 由于这里的参数是字符串，又因为要用到这个&来拼接参数，所以呢我们就可以运用这个join的方法去返回一个字符串，这样就可以直接给script添加一个地址，将之前传递的url来结合参数拼接为一个完整的地址。
5. 及时删除这个script标签，联想你写loading组件的时候用的添加节点的方法。
#### 问题
1. 自己第一个问题在于，函数的参数，没有写出对象，因为你传递的参数就是一个对象。
2. 没有清楚的意识到，其实script标签是实时创建的，并且用完后要去销毁的。
3. 也就是说这里发出的url是靠自己所传递的参数进行拼接而成的。
//复盘反思自己的不足其实是这样自己，没有理解这个jsonp跨域的原理，其实img里的标签，还有这个，script的url本质
//其实都是一个get请求，所以这也是这个，所以我往自己网页里创建这个url本质都是在这个，发出get请求，然后去拼接这个url.



### 防抖节流
* 节流就是，n 秒内，只触发一次。（timer 无值了，说明第一次的定时任务执行完毕）
* 防抖就是 n 秒内，触发多次只看最后一次触发，的中间多次触发，会重新计时。（timer 有值得情况会删除之前的定时器）
* 执行 fn，this 就指向 window 了，要指向触发的 dom 节点，所以要调用 apply 绑定 this。
* 一定要把这个 timer 放在外面，因为要形成一个闭包，这样在内存中由于闭包，就不会导致这个变量被销毁，这样能够保证多次触发函数所引用的变量是一个 timer.


### call bind apply
1. call方法在复盘的时候的问题在于自己，首先因该是先挂载这个函数然后，再去执行，我是直接就执行了。不对
2. 扩展运算符号的作用不清楚：其实是因为由于这里的参数数量不确定，如果写死的话，你事先是不知道这里的参数个数的所以先去... 变数组，之后再去...变为这个数组。
3. 基本思路就是先给改变的this的目标先挂载这个函数，因为谁调用它，函数this就指向谁，这是基本规律。
4. 在写实现的时候先去回顾这个用法这样不会乱。
#### 不足
1. 对于apply 没有理解这个数组，首先它会去传递一个数组，但是我给调用的函数，只需要传递单个参数就好，你见过哪个普通函数，里的参数，是数组的
2. 还有就是自己这个你所写的函数你没有发现没有返回值吗。
3. bind 首先没有将类数组转换为数组。其次没有理解这个new 的用法，还有就是Bind的本意是延迟执行了，所以我需要返回一个函数，当再次调用才会去执行.



### map
1. map地图，地图的边框是不是很像一个数组，所以返回一个数组，对数组的每一个元素会去执行map里面的回调函数，map有一个改变这个this的指向，对于调用这个回调函数，this默认为arr,但是如果不是的话，那就为传入的thisages.map不能用箭头函数，你写的箭头函数是没有这个this的。

### foreach
1. map 和foreach最大的一个区别就是，map是循环执行内部回调，同时返回新数组，但是foreach仅仅执行函数.

### 深拷贝
1. 复盘第一次判断传入参数是不是一个对象造成了混乱，应该是判断不是一个数组或对象，并且对象为空，我当时还用了type of 判断空，其实不对，应该是直接参数等于Null就行，typeof 还得为一个object ,之后用instance of 来判断这个元素是不是这个数组，对象，做对应的处理，并且这里要用到这个递归，为什么，因为对象里面有可能去嵌套一个对象， 那么递归式，先去处理第一层的逻辑，就是直接赋值，如果还有值，那就重复逻辑，给它套一个递归，这样它就可以去继续判断里面的对象。
2. 我还卡在了 这个 for in 循环上其实这个不管是数组，还是对象都可以用到这个，并且遍历的是键，也就是索引值，并且要配合这个hasOwnPropoty来剔除从原型链上继承的属性。


### 数组去重
1. es5 用indexof  我把逻辑搞错了。这个是为-1的情况下，其实是不存再这个值的，你想想-1肯定是不存在才有这样的问题啊。
2. es6 就用这个includes.
3. 还有之前一个题求交集的时候用到了set结构，不过这个题是set集合其实是一个类数组。

### 数组扁平化
1. 递归通过
2. 迭代思想; 一般递归转迭代的时候，用while循环，模拟递归的过程，内部的条件是栈的长度因为调用栈的数量就是递归的次数，
3. 小知识点就是 ... 能去一层数组，就是把元素都放在栈里，然后循环的出栈，判断元素是否是数组，是了就解一层，不是就不解了。


### 图片懒加载
1. 首先所谓的图片懒加载其实就是当触发滚动事件的时候，判断当前元素上边距离视区域的上边框具有多少距离，如果说刚好小于等于视口高度，那就是遍历每一个元素，然后获取每一个元素上的data-src 里得真实的src,去赋值给每一个元素的src，并且为了避免已经加载过的元素，再次遍历就设置count进行计数，
2. 问题： 自己经常忘记，计算网页视口的高度，主要是需要，先计算这个当前元素距离视口上边框的距离，和视口高度比较，只有小于等于的时候这个循环添加真实src才有意义。



### 柯里化
1. 首先明确这个函数将你想要转变的函数做为参数，之后将其返回一个新的函数，然后再去调用这个函数，并传递原函数的第一个参数，之后再去返回一个函数去接受剩余的参数，也就是用到了递归，就是希望，继续返回一个函数，并且去接受剩余的参数。
