// const printMultipleOfFive = (arr) => {
//   let rslt;
//   for (let index = 0; index < arr.length; index++) {
//     if (!(arr[index] % 5)) {
//       rslt = arr[index];
//       break;
//     }
//   }
//   return rslt;
// };

const printMultipleOfFive = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    if (!(arr[index] % 5)) {
      return arr[index];
    }
  }
};
console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])); // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])); // 5
console.log(printMultipleOfFive([7, 54, 104, 7, 154, 3])); // undefined
