const arr = {}

console.log(arr)

function counter() {
  for (var i = 1; i <= 7; i++) {
    for (var i1 = 1; i1 <= 7; i1++) {
      for (var i2 = 1; i2 <= 7; i2++) {
        for (var i3 = 1; i3 <= 7; i3++) {
          for (var i4 = 1; i4 <= 7; i4++) {
            for (var i5 = 1; i5 <= 7; i5++) {
              for (var i6 = 1; i6 <= 7; i6++) {
                for (var i7 = 1; i7 <= 7; i7++) {
                  for (var i8 = 1; i8 <= 7; i8++) {
                    for (var i9 = 1; i9 <= 7; i9++) {
                      const v =
                        ((i + i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i9) %
                          10) +
                        1

                      if (!arr[v]) {
                        arr[v] = 1
                      } else {
                        arr[v]++
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

counter()

console.log(arr)
