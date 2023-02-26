const getValues = (person, property) => {
  let rslt = [];
  for (let i = 0; i < person.length; i++) {
    rslt.push(person[i][property]);
  }
  return rslt;
};

console.log(
  getValues(
    [
      { name: "John", age: 21 },
      { name: "Mary", age: 22 },
      { name: "Peter", age: 23 },
    ],
    "name"
  )
); // ["John", "Mary", "Peter"]
