function bubbleSort(input) {
  const len = input.length

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (input[j] > input[j + 1]) {
        ;[input[j], input[j + 1]] = [input[j + 1], input[j]]
      }
    }
  }
  return input
}

console.log(bubbleSort([3, 2, 1, -1, 0]))
