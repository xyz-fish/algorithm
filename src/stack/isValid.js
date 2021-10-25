// 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const bktMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  const stack = []
  const len = s.length

  // 遍历
  for (let i = 0; i < len; i++) {
    const cur = s[i]
    const isLeft = bktMap[cur]
    // 如果是 左括号 则push
    if (isLeft) {
      stack.push(cur)
    } else {
      // 是右括号 则 如果和上个存起来的左括号对应 则继续 不是则返回false
      if (cur !== bktMap[stack.pop()]) return false
    }
  }

  return !stack.length
}
