const checkLength = (word) =>
  word.length > 5
    ? `Length of given word is greater than 5`
    : `Length of given word is not greater than 5`;

console.log(checkLength("hello"));
console.log(checkLength("what"));
console.log(checkLength("rabbit"));
