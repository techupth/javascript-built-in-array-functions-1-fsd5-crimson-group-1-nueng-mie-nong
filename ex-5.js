const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getTotalScore(accumulator, currentValue) {
  return accumulator + currentValue.score;
}

const averageScore = students.reduce(getTotalScore, 0) / students.length; // Output: 87.5
console.log(averageScore);

// method2

// function getTotalScore(accumulator, currentValue) {
//   return accumulator + currentValue.score;
// }

// function getAverageScore(totalScore, students) {
//   return totalScore / students.length;
// }

// const totalScore = students.reduce(getTotalScore, 0);
// const averageScore = getAverageScore(totalScore, students);

// console.log(averageScore);

// anonymous styled
//   const averageScore1 = students.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.score;
//   }, 0) / students.length;
// console.log(averageScore1);
