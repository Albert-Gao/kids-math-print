const QUANTITY = 80;
const UPPER_LIMIT_OF_RESULT = 10;
const MIN_NUM = 1;
const MAX_NUM = 9;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const isExist = (a, b, quizArray = []) => {
  const findNum = quizArray.some(q => q.includes(a) && q.includes(b));
  return findNum;
};

const generateQuizs = () => {
  const quiz = [];

  while (quiz.length < QUANTITY) {
    const a = getRandomInt(MIN_NUM, MAX_NUM);
    const b = getRandomInt(MIN_NUM, MAX_NUM);

    if (a + b <= UPPER_LIMIT_OF_RESULT) {
      const isAdded = isExist([a, b], quiz);
      if (!isAdded) {
        quiz.push([a, b]);
      }
    }
  }

  return quiz;
};

const arr = generateQuizs();
arr.forEach(a => {
  console.log(isExist(a[0], a[1], arr));
});
