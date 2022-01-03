function insertSort(nums) {
  const n = nums.length

  for (let i = 0; i < n; i++) {
    let j = i

    while (j - 1 >= 0 && nums[j] < nums[j - 1]) {
      const tmp = nums[j]
      nums[j] = nums[j - 1]
      nums[j - 1] = tmp
      j--
    }
  }

  return nums
}

console.log(insertSort([2, 3, 6, 7, 1, 9, 4, 11, 3]))
