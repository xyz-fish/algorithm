class LinkNode {
  constructor(val, next) {
    this.val = val
    this.next = next === undefined ? null : next
  }
}

class ListLinkNode {
  constructor(val) {
    this.head = null
    this.length = 0
  }

  append(val) {
    const node = new LinkNode(val)

    if (!this.head) {
      this.head = node
    } else {
      let cur = this.head
      while (cur.next) {
        cur = cur.next
      }

      cur.next = node
    }

    this.length += 1
  }

  removeAt(index) {
    let cur = this.head
  }
}

const tLNode = new ListLinkNode()

tLNode.append('hello')

tLNode.append('world')

tLNode.append('xyz!')

console.log(JSON.stringify(tLNode))
