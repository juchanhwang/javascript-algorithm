function findOutlier(integers) {
  const evenArr = filterEvan(integers);
  const oddArr = filterOdd(integers);

  return evenArr.length === 1 ? evenArr[0] : oddArr[0]
}

const filterEvan = (integers) => integers.filter(int => int % 2 === 0 || int % 2 === -0)

const filterOdd = (integers) => integers.filter(int => int % 2 === 1 || int % 2 === -1)


function test(input, expect) {
    const result = findOutlier(input);
    console.log(`input : ${input}, result : ${result}, expect: ${expect}`);
    return (result === expect) ? console.log("pass!") : console.log("fail!")
  }


test([0, -1, 2], -1)
test([1, 2, 3], 2)
test([2, 6, 8, 10, 3], 3)
test([0, 0, 3, 0, 0], 3)
test([1, 1, 0, 1, 1], 0)