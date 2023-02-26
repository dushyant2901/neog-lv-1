const sumOfAges = (persons) => {
  let rsltAge = 0;
  for (let i = 0; i < persons.length; i++) {
    const { age } = persons[i];
    rsltAge += age;
  }
  return rsltAge;
};

var array = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

console.log(sumOfAges(array)); // 121
