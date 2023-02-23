const person = { name: "Amit", age: 25, occupation: "Software Engineer" };

const changeOccupation = (obj, newOccupation) =>
  (obj.occupation = newOccupation);
console.log(person);
changeOccupation(person, "dancer");
console.log(person);

// const {name,age,occupation}= person
//age=19  will throw an error as we are trying to assign new value to const declaration

//moreover after destructuring it is read only
// let{age}=person
// age=16
// person object will remain the same and unchanged
// reason
// let age = person.age
// age=18
// in both scenario we are assigning the obj value to a new variable and then we are changing the value of that variable we are mutating the obj itself obj.age=12 in this case we are mutating the value

// inside a function
// let {age} =person
// age=28
// return {...person,age}  but this will not mutate the original obj
