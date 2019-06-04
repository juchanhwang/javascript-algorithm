// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  let arr = str.split("");
  let shiftArr = [];
  let firstKeyword = arr[0];

  arr.shift();
  shiftStr(arr, shiftArr, firstKeyword);
  return getResult(shiftArr).slice(0, -1);
}

function shiftStr(arr, shiftArr, firstKeyword) {
  arr.forEach((element, idx) => {
    if (element === " ") {
      shiftArr.push(firstKeyword, " ");
      firstKeyword = arr[idx + 1];
      arr.splice(idx + 1, 1);
    } else {
      shiftArr.push(element);
    }
  });

  shiftArr.push(firstKeyword, " ");
}

function getResult(shiftArr) {
  return shiftArr.reduce((acc, curVal, idx) => {
    if (curVal === " " && shiftArr[idx - 1] !== "!" && shiftArr[idx - 1] !== "?") return acc + "ay ";
    else return acc + curVal;
  });
}

console.log(pigIt("Pig is cool !"));
