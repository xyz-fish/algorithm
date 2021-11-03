function shellSort(input) {
  const len = input.length

  let gap = Math.floor(len / 2)
  for (; gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let cur = i
      while (cur - gap >= 0 && input[cur - gap] > input[cur]) {
        ;[input[cur - gap], input[cur]] = [input[cur], input[cur - gap]]
        cur -= gap
      }
    }
  }

  return input
}

console.log(shellSort([3, 2, 1, -1, 0]))
