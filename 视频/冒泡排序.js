function bubbleSort(nums) {
  const n = nums.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const tmp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = tmp
      }
    }
  }

  return nums
}

console.log(bubbleSort([2, 3, 6, 7, 1, 9, 4, 11, 3]))
