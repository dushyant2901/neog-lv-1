const capitalizeWords = (arr) => {
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].toUpperCase();
  }
  return newArr;
};
console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]
