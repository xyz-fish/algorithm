// 链表节点结构 ListNode: val, next => ListNode || null
class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next || null
  }
}

/**
 * 数组 => ListLink
 * @param {[]} arr
 * @returns ListLink
 */
function generateList(arr) {
  const head = new ListNode(0)
  let cur = head
  for (let i = 0; i < arr.length; i++) {
    cur.next = {
      val: arr[i],
      next: null
    }
    cur = cur.next
  }

  return head.next
}

/**
 * 链表 => 数组
 * @param {*} listLink
 * @returns []
 */
function generateArray(listLink) {
  const res = []

  let cur = listLink

  while (cur) {
    res.push(cur.val)
    cur = cur.next
  }

  return res
}

module.exports = {
  ListNode,
  generateList,
  generateArray
}
