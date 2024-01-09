export const getRandomQuestion = (questions) => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};
