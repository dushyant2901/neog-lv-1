const sumOfEvenIndices = (arr) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index += 2) {
    sum += arr[index];
  }
  return sum;
};

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])); // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])); // 30
