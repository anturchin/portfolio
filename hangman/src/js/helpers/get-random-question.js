export const getRandomQuestion = (questions, usedQuestions = []) => {

  if (usedQuestions.length === questions.length) {
    usedQuestions.length = 0;
  }

  const remainingQuestions = questions.filter(question => !usedQuestions.includes(question));
  const availableQuestions = remainingQuestions.length > 0 ? remainingQuestions : questions;

  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const randomQuestion = availableQuestions[randomIndex];
  
  usedQuestions.push(randomQuestion);

  return randomQuestion;

};
