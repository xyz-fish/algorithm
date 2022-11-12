function quickSort(arr, left, right) {
  const len = arr.length
  left = left === undefined ? 0 : left
  right = right === undefined ? len - 1 : right
  if (left < right) {
    const p = partition(arr, left, right)
    quickSort(arr, left, p - 1)
    quickSort(arr, p + 1, right)
  }

  return arr
}

function partition(arr, left, right) {
  let point = left
  let index = point + 1
  for (let i = index + 1; i <= right; i++) {
    if (arr[i] < arr[point]) {
      swap(arr, i, index)
      index++
    }
  }

  swap(arr, index - 1, point)

  return index - 1
}

function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

console.log(quickSort2([2, 3, 6, 7, 1, 9, 4, 11, 3]))

function quickSort2(arr, left, right) {
  const len = arr.length
  left = left === undefined ? 0 : left
  right = right === undefined ? len - 1 : right

  if (left >= right) return

  while (left < right) {
    const p = pt(arr, left, right)
    quickSort2(arr, left, p - 1)
    quickSort2(arr, p + 1, right)
  }

  return arr
}

function pt(arr, left, right) {
  let pivot = left
  let pv = arr[pivot]
  let i = right
  while (left < right) {
    if (i === right) {
      if (arr[i] < pv) {
        arr[left] = arr[i]
        i = left
      } else {
        i = --right
      }
    } else {
      if (arr[i] > pv) {
        arr[right] = arr[i]
        i = right
      } else {
        i = ++left
      }
    }
  }

  arr[i] = pv
  console.log(arr)
  return i
}
