function persistence(num) {
  let count = 0;
  while (true) {
    let splitNum = num.toString().split('');
    if(splitNum.length === 1) return count;
    num = splitNum.reduce((acc, curVal) => acc * curVal);
    count++;
  }
}

console.log(persistence(4))