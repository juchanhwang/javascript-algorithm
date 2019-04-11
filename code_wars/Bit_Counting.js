var countBits = function (n) {
  let sum = 0;
  while (n > 0) {
    n % 2 === 1 ? sum++ : null
    n = parseInt(n / 2);
  }

  return sum;
};

function test(input, expect) {
  const result = countBits(input);
  console.log(`input: ${input}, result: ${result}, expect: ${expect}`)
  return (result === expect) ? console.log("pass!") : console.log("fail!")
}

test(0, 0);
test(4, 1);
test(7, 3);
test(9, 2);
test(10, 2);