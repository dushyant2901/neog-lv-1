const calculateAverage = (arr) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum / arr.length;
};
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
