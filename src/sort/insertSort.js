function insertSort(arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    let cur = i

    while (cur - 1 >= 0 && arr[cur - 1] > arr[cur]) {
      ;[arr[cur - 1], arr[cur]] = [arr[cur], arr[cur - 1]]
      cur--
    }
  }

  return arr
}

console.log(insertSort([3, 2, 1]))
