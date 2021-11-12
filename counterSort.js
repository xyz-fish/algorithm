var counterSort = function (arr) {
  var min = Math.min.apply(null, arr)
  var max = Math.max.apply(null, arr)
  var counter = new Map()

  for (let i = min; i <= max; i++) {
    counter.set(i, 0)
  }

  for (var i = 0; i < arr.length; i++) {
    var value = arr[i]
    var counterIndex = value
    counter[counterIndex]++
    counter.set(counterIndex, counter.get(counterIndex) + 1)
  }

  var index = 0

  for (j of counter) {
    console.log(j)
    while (j[1] > 0) {
      arr[index++] = j[0]
      j[1]--
    }
  }

  return arr
}

var arr = [5, 4, 3, 2, 1, 7, -1]

console.log(counterSort(arr))
