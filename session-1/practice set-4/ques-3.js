const convertEvenToOdd = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    if (!(arr[index] % 2)) {
      arr[index] += 1;
    }
  }
  return arr;
};

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]
