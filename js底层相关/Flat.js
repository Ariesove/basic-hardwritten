
const Flat = (arr, depth = 1) => {
  let result = []
  if (depth === 0) {
    return arr
  }

  arr.forEach(element => {
    if (Array.isArray(element)) {
      if (depth > 0) {
        // 思路 很快，但是不理解这里的concat ，一开始很迷惑里面的result 作为内部全局变量为何没有被重新初始化呢
        result = result.concat((Flat([...element], depth - 1)))
      }
    } else {
      result.push(element)
    }

  });
  return result;

}


let b = Flat([1, [1, 2, 3, [3, 4, 5]]], 4)
console.log('b', b)


var firstUniqChar = function (s) {
  let map = new Map();
  let lastest = -1;
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1)
    } else {
      map.set(s[i], map.get(s[i]) + 1)
    }
  }
  console.log('map', map)
  for (let [key, value] of map) {
    console.log('value', value)
    if (value === 1) {
      lastest = s.indexOf(key)
      return lastest
    }
    // return -1
  }
  // return lastest
};

let bs = firstUniqChar("loveleetcode")
console.log('bs', bs)