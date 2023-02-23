const whichNumIsGreater = (num1, num2) =>
  num1 > num2
    ? `${num1} is greater than ${num2}`
    : ` ${num2} is greater than  ${num1}`;

console.log(whichNumIsGreater(132, 34));
console.log(whichNumIsGreater(12, 34));
console.log(whichNumIsGreater(132, 334));
console.log(whichNumIsGreater(1322, 34));
console.log(whichNumIsGreater(132, 2334));
