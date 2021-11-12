var sortArray = function (nums) {
  const min = Math.min.apply(null, nums)
  const max = Math.max.apply(null, nums)

  const counter = Array.from({ length: max - min + 1 }).fill(0)

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    const index = value - min

    counter[index]++
  }

  let index = 0

  for (let i = 0; i < counter.length; i++) {
    while (counter[i] > 0) {
      nums[index++] = i + min
      counter[i]--
    }
  }

  return nums
}

console.log(sortArray([1, 3, 5, 3, 2, 1]))
