let words = ["hello", "world"];

function getWordLengths(words) {
  let wordLengths = words.map((words) => {
    return words.length;
  });
  return wordLengths;
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
