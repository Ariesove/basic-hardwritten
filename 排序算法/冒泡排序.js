//冒泡排序：就是两两交换，在遍历到第一个元素的基础上，每相邻元素，进行比较，并交换。
//自己的问题在于，我把外层的i作为下标值，参与比较了，不对，为什么不对，就是因为，这个外层循环仅仅是用来，控制循环次数的
//你如果用第i项元素进行比较的话，每次交换后当前元素不就会导致，这个值会一直变，吗因为，你定死的这个值，由于重新排序后已经变了，所以是用内存循环的下标元素进行比较的
function maopao(arr) {
  for (let i = 0; i < arr.length; i++) {//类似于求递增子序列，就是在选定了第一个元素的基础上，不断遍历其它元素与之进行比较。
    let flag = false
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        flag = true
      } else {
        continue
      }
      if (flag === false) {
        return arr
      }//这里是在优化，内部遍历一遍发现压根没有交换说明有序，内部只进行一次遍历，时间复杂度最好为O(n)
    }
  }

  return arr

}

//总结：时间复杂度为O(n^2)|| O(n) 空间 O(n)
//不稳定,因为比如头两个元素相同并且是大值，那么第一个元素，会冒泡到末尾的。