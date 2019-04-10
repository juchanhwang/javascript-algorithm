function foo(a, b) {
  const sortArr = getSort(a);
  const result = spliceArr(sortArr, b)
  return result;
}

function getSort(a) {
  return a.sort(function (a, b) { // 오름차순
    return a - b;
  });
}

function spliceArr(sortArr, b) {
  let firstIdx, lastIdx;

  b.forEach(element => {
    if (sortArr.includes(element)) {
      firstIdx = sortArr.indexOf(element);
      lastIdx = sortArr.lastIndexOf(element) || 1;
      sortArr.splice(firstIdx, 1);
    }
  });

  return sortArr;
}

console.log(foo([3,4], [3]))