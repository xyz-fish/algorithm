const { ListNode, generateList } = require('./transform')
/**
 *链表反转: 1=>2=>3=>4=>5 5=>4=>3=>2=>1
 * @param {*} l
 */

//        prev,cur,next
// 循环: 1.1=>2=>3 2. 2=>1=>3
// 关键点在于 怎么 交换 2 和 1 并且cur = cur.next 可以继续循环下去
function reverseList(l) {
  let cur = l
  let prev = null

  while (cur) {
    const tmp = cur.next
    cur.next = prev // prev 代表之前反转好部分, 先把当前的值的next 指向prev 把cur '前移'，
    prev = cur // 在重新给prev定义值
    cur = tmp // 然后是继续next 循环
  }
  return prev
}

// -- 递归 --
// 1, 2, 3: 2.next = 1 1.next =
function reverseList2(head) {
  if (head === null || head.next === null) return head
  var tail = head.next,
    p = reverseList(tail)
  head.next = null
  tail.next = head
  // console.log(p)
  return p
}
const r = reverseList2(generateList([1, 2, 3]))

// --- 反转n个链表

function reverseN(l, n) {
  console.log(n, l)
  if (l === null || l.next === null) return l
  if (n === 1) return l
  const tail = l.next
  const p = reverseN(l.next, n - 1)
  l.next = tail.next
  tail.next = l
  return p
}

const ln = generateList([4, 5, 6, 7, 8, 9])
console.log(ln)

console.log(reverseN(ln, 3))
