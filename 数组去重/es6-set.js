function unique(arr) {

  return Array.from(new Set(arr))//set结构返回的是类数组
}
unique([1, 2, 2, 4])
console.log(unique([1, 2, 2, 4]));