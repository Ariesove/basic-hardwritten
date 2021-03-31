//15:28 --39//失败
// reduce
//reduce就是说，要去用到这个，累加值，并且就是需要用到这些值
// [1, 2, 3].reduce((accumulate, curvalue, curindex, arr) => prevalue + curindex, initvalue)


let addStrings = function (num1, num2) {
  let p1 = num1.length - 1
  let p2 = num2.length - 1
  let carry = 0
  let sum = ''

  while (p1 >= 0 || p2 >= 0) {
    let value1 = num1[p1] ? num1[p1] - '0' : 0
    let value2 = num2[p2] ? num2[p2] - '0' : 0

    let sumvalue = value1 + value2 + carry

    carry = sumvalue >= 10 ? 1 : 0
    sumvalue = sumvalue % 10
    sum = sumvalue + sum
    p1--
    p2--

  }
  if (carry) {
    return carry + sum
  }
  return sum
};



console.log(addStrings('1', '2') / 10);
