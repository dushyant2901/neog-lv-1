const checkForAlphabetA = (str) =>
  str.toLowerCase().includes("a")
    ? `Word includes character A or a`
    : `Word does not includes character A or a`;
console.log(checkForAlphabetA("Ram"));
console.log(checkForAlphabetA("john"));
console.log(checkForAlphabetA("peter"));
console.log(checkForAlphabetA("Apple"));

// can use toUppercase as well
// word.toUpperCase().includes("A")

// can check for both
//word.includes('a')||word.includes('A')

//word.includes('a')?'word include char a':word.includes('A')?'word includes A':'neither a or A'
