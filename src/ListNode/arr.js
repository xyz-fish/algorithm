function arrToList(arr) {
  const listNode = new ListNode()

  let cur = listNode

  arr.forEach(function (val) {
    cur.next = {
      val,
      next: null
    }
    cur = cur.next
  })

  return listNode.next
}

class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next || null
  }
}

const arr = [1, 2, 3]
const linkList = arrToList(arr)

function listToArr(linkList) {
  let cur = linkList

  const arr = []
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }

  return arr
}

// console.log(listToArr(linkList))

const arr1 = [1, 2, 3]
const arr2 = [1, 3, 4]

const linkList1 = arrToList(arr1)
const linkList2 = arrToList(arr2)
/**
 * 根据两个都是增序的链表的特性
 * 两个LinkNode的val的比较 把当前最小的linkNode的next 指向 另一个较大的值 通过递归 继续
 */
function mergeSortList(l1, l2) {
  if (l1 === null) {
    return l2
  } else if (l2 === null) {
    return l1
  } else if (l1.val > l2.val) {
    l2.next = mergeSortList(l1, l2.next)
    return l2
  } else {
    l1.next = mergeSortList(l1.next, l2)
    return l1
  }
}
// console.log(JSON.stringify(mergeSortList(linkList1, linkList2)))

/** 遍历插入替换 */

let tl2 = linkList2

function mergeSortList1(l1, l2) {
  let prevHead = new ListNode(0)
  let prev = prevHead

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }

  prev.next = l1 === null ? l2 : l1

  return prevHead.next
}

console.log(JSON.stringify(mergeSortList1(linkList2, linkList1)))
