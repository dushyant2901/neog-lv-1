const isBetweenOneAndTen = (num) =>
  num > 0 && num < 10
    ? `Number is between 1 and 10`
    : `Number is not between 1 and 10`;

console.log(isBetweenOneAndTen(2));
console.log(isBetweenOneAndTen(20));
console.log(isBetweenOneAndTen(12));
console.log(isBetweenOneAndTen(7));
console.log(isBetweenOneAndTen(8));
