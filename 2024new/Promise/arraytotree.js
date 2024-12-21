//数组转为树
// 21:22

const test = [
  {
    "id": 1,
    "name": "部门A",
    "parentId": 0,
    "children": [
      {
        "id": 2,
        "name": "部门B",
        "parentId": 1,
        "children": [
          {
            "id": 4,
            "name": "部门D",
            "parentId": 2,
            "children": []
          },
          {
            "id": 5,
            "name": "部门E",
            "parentId": 2,
            "children": []
          }
        ]
      },
      {
        "id": 3,
        "name": "部门C",
        "parentId": 1,
        "children": [
          {
            "id": 6,
            "name": "部门F",
            "parentId": 3,
            "children": []
          }
        ]
      }
    ]
  }
]
const arr = [
  {
    id: 1, name: '部门A', parentId: 0
  },
  {
    id: 2, name: '部门B', parentId: 1
  },
  {
    id: 3, name: '部门C', parentId: 1
  },
  {
    id: 4, name: '部门D', parentId: 2
  },
  {
    id: 5, name: '部门E', parentId: 2
  },
  {
    id: 6, name: '部门F', parentId: 3
  }
]

let treeNode = {
  id: 0,
  name: 'scx',
  children: []
}

// 纯遍历方法
const treeConvert = (treeArray) => {
  let treeNode = [];
  treeArray.forEach(item => {
    // if(item.id)
    item.children = []
    if (item.parentId === 0) {
      treeNode.push(item)
    }

    const children = treeArray.filter(node => node.parentId === item.id);
    item.children = children

  })

  return treeNode
}
console.log('treeConvert', treeConvert(arr))


// 题目复盘
//对于树结构定义不熟悉，一开始都蒙住了
//没有搞清楚，这个题目的输入和输出，不了解，这个题目最终想达成什么样的输出--以后写算法题目，优先搞清楚，已知和未知，以及输入和输出
//  现在回过头看，其实主要还是这类问题练习的太少
// 优化点：分析算法，一定要清楚，最终想要什么样的输出和清晰的结构，反推我还需要什么条件，怎么推出这些我需要的条件

// 后续优化一题多解。


// 那么如果想把树转换为数组怎么做

//思路递归，数组扁平化类似
// 答案用了广度优先遍历，没感觉到为什么要用。

const flatten = (array) => {
  let result = [];
  const help = (array) => {
    for (const iterator of array) {
      result.push({
        id: iterator.id,
        name: iterator.name,
        parentId: iterator.parentId ?? 0
      })
      if (iterator.children && iterator.children.length > 0) {
        help(iterator.children)
      }

    }
  }
  help(array)
  return result;


}
console.log('flatten', flatten(test))