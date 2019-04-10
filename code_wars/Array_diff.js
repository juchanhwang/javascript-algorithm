function array_diff(a, b) {
  const result = filterArr(a, b)
  return result;
}

function filterArr(a, b) {
  return a.filter(v => !b.includes(v))
}

console.log(array_diff([], [4, 5]));
console.log(array_diff([3, 4], [3]));
console.log(array_diff([1, 8, 2], [])); 