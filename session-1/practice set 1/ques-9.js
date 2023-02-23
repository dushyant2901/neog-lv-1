const isMultipleOfThree = (num) =>
  num % 3 === 0
    ? `Given num is multiple of 3`
    : `Given num is not a multiple of 3`;

console.log(isMultipleOfThree(76));
console.log(isMultipleOfThree(6));
console.log(isMultipleOfThree(60));
console.log(isMultipleOfThree(827));
