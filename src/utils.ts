import { CONFIG } from "./config";

const { MIN_NUM, MAX_NUM, QUANTITY, UPPER_LIMIT_OF_RESULT } = CONFIG.ADDITION;

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const isExist = (a: number, b: number, quizArray: number[][] = [[]]): boolean =>
  quizArray.some(q => q[0] === a && q[1] === b);

export const generateQuizs = () => {
  let count = 0;
  let shouldContinue = true;
  const quiz: number[][] = [];

  while (shouldContinue) {
    count += 1;

    const a = getRandomInt(MIN_NUM, MAX_NUM);
    const b = getRandomInt(MIN_NUM, MAX_NUM);

    if (a + b <= UPPER_LIMIT_OF_RESULT && !isExist(a, b, quiz)) {
      quiz.push([a, b]);
    }

    if (quiz.length === QUANTITY || count > QUANTITY * 2) {
      shouldContinue = false;
    }
  }

  return quiz;
};
