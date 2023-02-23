const person = { name: "Amit", age: 25, occupation: "Software Engineer" };

const changeOccupation = (obj, newOccupation) =>
  (obj.occupation = newOccupation);
console.log(person);
changeOccupation(person, "dancer");
console.log(person);
