const { ListNode, generateList, generateArray } = require('./transform')

/**
 * 合并两个升序的链表，合成后的链表也是升序
 * @param {*} l1 ListLink
 * @param {*} l2 ListLink
 * @returns ListLink
 */
// ----- 递归 ------ 对比l1, l2的val 如果 然后根据结果和next对比
function mergeSortList(l1, l2) {
  if (l1 === null) {
    return l2
  } else if (l2 === null) {
    return l1
  } else if (l1.val <= l2.val) {
    l1.next = mergeSortList(l1.next, l2)
    return l1
  } else {
    l2.next = mergeSortList(l2.next, l1)
    return l2
  }
}

const l1 = generateList([1, 4, 6])
const l2 = generateList([2, 4, 5, 6])

const r = mergeSortList(l1, l2)

// console.log(JSON.stringify(r))
// console.log(generateArray(r))

// ----- 遍历 ---------o
function mergeSortList2(l1, l2) {
  const head = new ListNode(0)
  let cur = head
  let cur1 = l1
  let cur2 = l2

  while (cur1 !== null || cur2 !== null) {
    if (cur1 === null) {
      cur.next = cur2
      cur2 = null
    } else if (cur2 === null) {
      cur.next = cur1
      cur1 = null
    } else if (cur1.val < cur2.val) {
      cur.next = cur1
      cur1 = cur1.next
    } else {
      cur.next = cur2
      cur2 = cur2.next
    }
    cur = cur.next
  }

  return head.next
}

const lt1 = generateList([1, 2, 2])
const lt2 = generateList([1, 2, 2])

mergeSortList2(lt1, lt2)
