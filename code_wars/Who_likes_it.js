function likes(names) {
  if(!names.length) return noLikes(names);
  else if(names.length === 1) return oneLikes(names);
  else if(names.length === 2) return twoLikes(names);
  else if(names.length === 3) return threeLikes(names);
  else return plentyLikes(names)
}

const noLikes = (names) => {
  return `no one likes this`;
}

const oneLikes = (names) => {
  return `${names[0]} likes this`;
}

const twoLikes = (names) => {
  return `${names[0]} and ${names[1]} like this`;
}

const threeLikes = (names) => {
  return `${names[0]}, ${names[1]} and ${names[2]} like this`
}

const plentyLikes = (names) => {
  const peopleNum = names.length
  const frontPeople = 2;
  const rest = peopleNum - frontPeople
  return `${names[0]}, ${names[1]} and ${rest} others like this`
}


function test(input, expect) {
  const result = likes(input);
  console.log(`input : ${input}, result : ${result}`)
  return (result === expect) ? console.log("pass!") : console.log("fail!")
}

test([], 'no one likes this');
test(['Peter'], 'Peter likes this');
test(['Jacob', 'Alex'], 'Jacob and Alex like this');
test(['Max', 'John', 'Mark'], 'Max, John and Mark like this');
test(['Alex', 'Jacob', 'Mark', 'Max'], 'Alex, Jacob and 2 others like this');
