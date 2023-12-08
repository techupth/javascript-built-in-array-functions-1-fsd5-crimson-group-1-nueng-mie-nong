const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getTotalScore(accumulator, currentValue) {
  return accumulator + currentValue.score / students.length;
}

const averageScore = students.reduce(getTotalScore, 0); // Output: 87.5
console.log(averageScore);

//anonymous styled

const averageScore1 =
  students.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score;
  }, 0) / students.length;
console.log(averageScore1);
