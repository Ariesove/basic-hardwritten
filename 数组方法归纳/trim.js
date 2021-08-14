//思路，去除左右空格。左右--》左右两指针。然后m --s(骂死我了)。


let slice = '  11 1123  '

function trim(slice) {
  let left = 0
  let right = 0


  for (let i = 0; i < slice.length; i++) {
    if (slice[i] !== ' ') {//这个逻辑是找左右指针所指向的非空的元素。而且如果你不break就会不断刷新这个，左右的边界。
      left = i
      break
    }
  }
  for (let j = slice.length - 1; j >= 0; j--) {
    if (slice[j] !== ' ') {
      right = j + 1
      break
    }

  }


  return slice.slice(left, right)

}

console.log(trim(slice));