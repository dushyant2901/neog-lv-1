const filterWords = (words) => {
  let rslt = [];
  for (let index = 0; index < words.length; index++) {
    if (words[index].length > 5) rslt.push(words[index]);
  }
  return rslt;
};

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)); // ["repeat", "community"]
