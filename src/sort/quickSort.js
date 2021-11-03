function quickSort(arr, left, right) {
  const len = arr.length
  let baseIndex = 0
  left = left || 0
  right = right || 0

  if (left < right) {
    baseIndex = partition(arr, left, right)
  }

  return arr
}

function partition(arr, left, right) {
  const baseValue = arr[left]
  let baseIndex = left

  for (let i = baseIndex + 1; i < right; i++) {
    debugger
    if (arr[i] < baseValue) {
      ;[arr[i], arr[baseIndex + 1]] = [arr[baseIndex + 1], arr[i]]
      baseIndex++
    }
  }
  console.log(arr, baseIndex)

  return baseIndex
}

console.log(partition([3, 2, 4, 5, 1], 0, 5))
// console.log(partition([2, 1, 5, 1], 0, 5))
