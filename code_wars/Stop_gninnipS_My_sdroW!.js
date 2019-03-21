function spinWords(input) {
  let result;
  const splitInput = input.split(' ');
  const resArr = splitInput.map(el => el.length <= 4 ? el : reverseStr(el));
  result = resArr.join(' ');
  return result;
}

function reverseStr(val) {
  let result;
  const splitVal = val.split('');
  result = splitVal.reverse().join('');
  return result;
}

function test(input, expect) {
  const result = spinWords(input);
  console.log(`input : ${input}, result : ${result}`)
  return (result === expect) ? "pass!" : "fail!"
}


test("Welcome", "emocleW");
test("Hey fellow warriors", "Hey wollef sroirraw");
test("This is a test", "This is a test");
test("This is another test", "This is rehtona test");
test("You are almost to the last test", "You are tsomla to the last test");
test("Just kidding there is still one more", "Just gniddik ereht is llits one more");
test("Seriously this is the last one", "ylsuoireS this is the last one");