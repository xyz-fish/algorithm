function ListNode(val, next) {
  this.val = val
  this.next = next || null
}

// array => list
function generateList(arr) {
  const head = new ListNode()
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

const a1 = [1, 2, 3]
const r1 = generateList(a1)
console.log(JSON.stringify(r1))

// 合并列两个升序的链表 1=>2=>3  2=>3=>4 => 1=>2=>2=>3=>4
// 递归
function mergeSortList(l1, l2) {
  if (l1 === null) {
    return l2
  } else if (l2 == null) {
    return l1
  } else if (l1.val <= l2.val) {
    l1.next = mergeSortList(l1.next, l2)
    return l1
  } else {
    l2.next = mergeSortList(l2.next, l1)
    return l2
  }
}

const l1 = generateList([1, 2, 3])
const l2 = generateList([2, 3, 4])
const r = mergeSortList(l1, l2)
console.log(JSON.stringify(r))

// 遍历
function mergeSortList2(l1, l2) {
  const head = new ListNode()
  head.next = l1
  let cur = head.next
  let cur1 = l1
  let cur2 = l2
  while (cur1 !== null && cur2 !== null) {
    if (cur.val <= cur1.val) {
      cur.next = cur1
      cur1 = cur1.next
    } else {
      cur.next = cur2
      cur2 = cur2.next
    }
  }

  return head.next
}

const ll = generateList([1, 2, 3])
const ll2 = generateList([2, 3, 4])

console.log(JSON.stringify(mergeSortList2(ll, ll2)))
