[1, 2, 2, 2, 5]
function unique(arr) {
  let res
  for (item of arr) {
    if (res.includes(item)) {
      continue
    } else {
      res.push(iem)
    }
  }
  return res
}
console.log(unique([1, 2, '2', 2, 5]));