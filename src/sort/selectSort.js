function selectSort(input) {
  const len = input.length

  let minIndex
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i; j < len; j++) {
      if (input[minIndex] > input[j]) {
        minIndex = j
      }
    }
    ;[input[i], input[minIndex]] = [input[minIndex], input[i]]
  }

  return input
}

console.log(selectSort([3, 2, 1, -1, 0]))
