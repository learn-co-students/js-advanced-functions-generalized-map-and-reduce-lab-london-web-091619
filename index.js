function map(arr, func) {
  const result = []
  for (let item of arr) {
    result.push(func(item))
  }
  return result
}

function reduce(arr, func, startingPoint) {
  let memo = startingPoint ? startingPoint : arr[0]
  let i = startingPoint ? 0 : 1
  for (; i < arr.length; i++) {
    memo = func(arr[i], memo)
  }
  return memo
}
