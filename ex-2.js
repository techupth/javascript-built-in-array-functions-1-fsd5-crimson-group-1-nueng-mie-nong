let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  return words.length >= 5;
}

const result = words.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]

// anonymous styled
const result1 = words.filter((words) => {
  return words.length >= 5;
});

console.log(result1);
