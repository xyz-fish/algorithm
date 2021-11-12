/**
 * & => 按位与 两位都是1 则设置每为1
 * | => 按位或 其中一个位置是1 则设置为1
 * ^ => 按位 异或 相同则返回 0 不同则返回 1
 * ~ => 按位 非 0 => 1 1 => 0
 * << => 左移 ， 右边移入0
 * >> => 右移，左边按照最高位 0 | 1来填充
 * >>> b => 向右移动b位 左边空出填充0
 */

// var a = Number.parseInt('-1', 2)

// console.log(a)

// console.log(4 >> 2)

// var nums = [4, 2, 3]

// for (num of nums) {
//   console.log(num)
// }
// console.log((99).toString(2))

// // 0 0 0 0 0 1
// // 0 0 0 1 0 1
// // 0 0 0 1 0 1
// // 0 0 0 1 0 1

// console.log((99 >>> 1) & 1)
// var r = 0
// console.log((r |= 8))

var arr = [211, 211, 404, 404, 533, 402, 211]

var singleNumber = function (nums) {
  let ans = 0
  for (let i = 0; i < 32; i++) {
    let total = 0
    for (const num of nums) {
      total += (num >> i) & 1
      console.log('--- num step-  --', total)
    }
    console.log(total, '---- i --- num')
    if (total % 3 != 0) {
      ans |= 1 << i
      console.log(ans, 1 << i, '-----i-----', i)
    }

    console.log('ans', ans)
  }

  console.log(ans)
  return ans
}

singleNumber(arr)

console.log(11 >> 1)
