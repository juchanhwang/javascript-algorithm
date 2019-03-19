function findOdd(arr) {
  let count = 0;
  arr.sort((a, b) => {
    return a - b;
  })
  let compareTar = arr[0];
  arr.forEach(element => {
    if (compareTar === element) count++;
  });
  if (count % 2 === 0) {
    arr.splice(0, count);
    return findOdd(arr)
  }
  else return arr[0];
}

function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  const result = findOdd(a)
  if (n === findOdd(a)) console.log(`${result} === ${n} TEST PASS!`);
  else console.log(`${result} ==! ${n} TEST FAIL!`);
}

doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
doTest([10], 10);
doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
