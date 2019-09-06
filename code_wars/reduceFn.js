//속성으로 객체 분류하기

var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(people, age) {
  people.reduce((acc, curPerson) => {
    var key = curPerson[age];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curPerson);
    console.log(acc)
    return acc;
  }, {});
}


var groupedPeople = groupBy(people, 'age');
// {
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }] 
// }