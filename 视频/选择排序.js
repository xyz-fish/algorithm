function selectSort(nums) {
  const n = nums.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > nums[j]) {
        const tmp = nums[j]
        nums[j] = nums[i]
        nums[i] = tmp
      }
    }
  }

  return nums
}

console.log(selectSort([2, 3, 6, 7, 1, 9, 4, 11, 3]))
