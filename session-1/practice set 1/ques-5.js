const checkForAlphabetA = (word) =>
  word.toLowerCase().includes("a")
    ? `Word includes character A or a`
    : `Word does not includes character A or a`;
console.log(checkForAlphabetA("Ram"));
console.log(checkForAlphabetA("john"));
console.log(checkForAlphabetA("peter"));
console.log(checkForAlphabetA("Apple"));
