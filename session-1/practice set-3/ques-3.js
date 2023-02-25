const findPerson = (persons, name) => {
  const person = persons.find((person) => person.name === name);
  return person ? person : null;
};
console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 },
    ],
    "Akhil"
  )
);
console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 },
    ],
    "Ak"
  )
);
