function solution(s) {
  let one, two, three, four;
  let count = 0;
  one = s.filter(e => e === 1).length;
  two = s.filter(e => e === 2).length;
  three = s.filter(e => e === 3).length;
  four = s.filter(e => e === 4).length;

  if (one >= three) {
    count += three;
    one -= three;
  } else if (one < three) {
    count += one;
    three -= one;
    count += three;
  }

  if (one >= two) {
    count += two;
    one -= two;
  } else if (one < two) {
    count += one;
    two -= one;
  }

  if (two % 2 === 0) {
    count += two / 2
  } else if (two % 2 !== 0) {
    count == two / 2 + 1;
  }
  count += four;

  return count;
}

console.log(solution([1, 1, 1, 2, 4, 3, 3]))



// function solution(N) {
//   var answer = [];
//   let one = '()', two = '(())', three = '((()))', four = '(((())))', five = '((((()))))', six = '(((((())))))', seven = '((((((()))))))', eight = '((((((()))))))', nine = '(((((((())))))))', ten = '((((((((()))))))))', elev = '(((((((((())))))))))', twel = '((((((((((()))))))))))';
//   if (N === 2) {
//     answer.push(two, one + one)
//   }

//   if (N === 3) {
//     answer.push(three,  ,two + one, one + two, one + one + one)
//   }

//   if (N === 4) {
//     answer.push(four, three + one, two + two, two + one + one, one + two + one, one + one + two, one + three, one + one + one + one)
//   }

//   return answer.sort();
// }

// console.log(solution(4)) // [ "(())", "()()" ]