function isValidWalk(walk) {
  return walk.length !== 10 ? false : getValidWalk(walk);
}

function getValidWalk(walk) {
  let validWalk = 0;
  walk.forEach(element => {
    element === 'n' ? validWalk += 1 :
    element === 's' ? validWalk -= 1 :
    element === 'w' ? validWalk += 1000 : validWalk -= 1000;
  });
  return validWalk === 0 ? true : false;
}


//some test cases for you...
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
