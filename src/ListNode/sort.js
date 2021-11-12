const origin = require('./origin')

const { ListNode, generateList, generateArray } = origin

const l1 = generateList([4, 3, 2, 1])

function sortLinkList(l) {
  var head = new ListNode(0)
  head.next = l
  var p = l,
    q = l.next
  debugger
  // [4, 3, 2, 1]\[3, 2, 1]
  while (q !== null) {
    if (p.val <= q.val) {
      p = p.next
    } else {
      let prev = head // [0, 4, 3, 2, 1]
      while (prev.next.val <= q.val) {
        prev = prev.next //
      }
      // prev [4, 3, 2, 1] p [4, 3, 2, 1] q [3, 2, 1]  2: [2, 1]
      p.next = q.next // -- p [4, 2, 1]
      q.next = prev.next // -- p[] q [3, 2, 1]
      prev.next = q // prev =
      console.log(JSON.stringify(q), JSON.stringify(p), JSON.stringify(prev))
    }

    q = p.next // q [2, 1]
  }

  // console.log(head)
}

sortLinkList(l1)
