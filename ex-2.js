let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  let charWords = words.filter((words) => {
    return words.length >= 5;
  });
  return charWords;
}

const result = get5CharWords(words);
console.log(result); // Output: ["apple", "elephant"]
