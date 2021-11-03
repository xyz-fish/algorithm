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

console.log(listToArr(linkList))
