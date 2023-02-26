const getMaxElement = (arr) => {
  let maxElem = -Infinity;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > maxElem) maxElem = arr[index];
  }
  return maxElem;
};

let array = [4, 78, 8, 3, 6, 0, 12, 34];
console.log(getMaxElement(array)); // 78
