function createPhoneNumber(numbers) {
  return numbers.reduce((acc, cur, idx) => {
    return acc +=
    idx === 2 ? cur + ') ' :
    idx === 5 ? cur + '-' : cur
  }, '(')
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));