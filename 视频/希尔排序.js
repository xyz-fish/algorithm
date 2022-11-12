function bubbleSort(nums) {
  const n = nums.length

  let gap = Math.floor(n / 2)

  while (gap) {
    for (let i = 0; i < n; i += gap) {
      let j = i + gap

      while (j < n) {
        let k = j
        while (k - gap >= 0 && nums[k] < nums[k - gap]) {
          swap(nums, k, k - gap)
          k -= gap
        }
        j += gap
      }
    }

    gap = Math.floor(gap / 2)
  }

  return nums
}

function swap(nums, i, j) {
  const tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}

console.log(bubbleSort([2, 3, 6, 7, 1, 9, 4, 11, 3, -1, 5, 13, 6, 8]))
