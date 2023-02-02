function calculateScore(backendLanguages) {
  let totalScore = 0;
  let maxScore = 0;

  backendLanguages.forEach((language) => {
    maxScore = Math.max(maxScore, language.score);
  });

  const otherScores = [];
  backendLanguages.forEach((language) => {
    if (maxScore > language.score) {
      otherScores.push(language.score);
    }
  });
  const avg = getAverage(otherScores) / backendLanguages.length;
  totalScore = maxScore + avg;

  if (totalScore >= 100) return 100;

  return totalScore;
}
const getAverage = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; ++i) {
    sum += array[i];
  }
  return sum / array.length;
};
const backendLanguages = [
  { name: 'Java', score: 90 },
  { name: 'Python', score: 50 },
  { name: 'Ruby', score: 20 },
];

console.log(calculateScore(backendLanguages));
