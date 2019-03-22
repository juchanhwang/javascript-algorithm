function digital_root(n) {
  const stringifyNum = getStringifyNum(n);
  const sumNum = getStringifyNum(getSumNum(stringifyNum));
  return sumNum.length === 1 ? Number(sumNum) : digital_root(sumNum)
}

const getStringifyNum = (num) => num.toString()

const getSumNum = (num) => (num.length === 1) ? num : getSum(num)

const getSum = (num) => {
  let sum = 0;
  for (let element of num) {
    sum += Number(element);
  }
  return sum;
}

function test(input, expect) {
  const result = digital_root(input);
  console.log(`input : ${input}, result : ${result}`)
  return (result === expect) ? "pass!" : "fail!"
}

console.log(test(digital_root(16),7))
console.log(test(digital_root(456),6))