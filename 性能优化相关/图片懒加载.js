

//20：13--20:22
//首先所谓的图片懒加载其实就是当触发滚动事件的时候，判断当前元素上边距离可视区域的上边框具有多少距离，如果说刚好小于等于视口高度，那就是
//遍历每一个元素，然后获取每一个元素上的data-src 里得真实的src,去赋值给每一个元素的src，并且为了避免已经加载过的元素，再次遍历就设置count进行计数

// <img src='' data-src='/img1'></img>
//<img src='' data-src='/img2'></img>
//<img src='' data-src='/img3'></img>

// <img src='' data-src='/img1'></img>
//<img src='' data-src='/img2'></img>
//<img src='' data-src='/img3'></img>

let imgs = document.body.getElementsByTagName('img')//集合
let viewheight = window.innerHeight// 窗口的高度
let count = 0
function lazyout() {
  let distance = viewheight - getBoundingClientrect().top//api获取当前元素的上边框到达窗口上边框的距离
  if (distance >= 0) {
    for (let i = count; i < imgs.length; i++) {
      let attr = imgs[i].getAttribute('data-src')//获取每一个元素里的data-src然后，再赋值给这个元素里的src.
      imgs[i].src = attr
      count++//避免重复循环已经加载过的元素
    }
  }

}
document.addEventListener('scroll', lazyout)//监听这个滚动事件然后再去触发这个懒加载。

