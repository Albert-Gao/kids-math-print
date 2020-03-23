const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const isExist = (a: number, b: number, quizArray: QuizData[] = []): boolean =>
  quizArray.some(q => q[0] === a && q[2] === b);

export type QuizData = [number, string, number];

export function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

export const baseAlgorithm = ({
  symbol = "",
  isValidCombination = () => false,
  quantity = 100,
  minNum,
  maxNum
}: {
  symbol: string;
  isValidCombination: (a: number, b: number) => boolean;
  quantity: number;
  minNum: number;
  maxNum: number;
}) => {
  let count = 0;
  let shouldContinue = true;
  const quiz: QuizData[] = [];

  while (shouldContinue) {
    count += 1;

    const a = getRandomInt(minNum, maxNum);
    const b = getRandomInt(minNum, maxNum);

    if (isValidCombination(a, b) && !isExist(a, b, quiz)) {
      quiz.push([a, symbol, b]);
    }

    if (quiz.length === quantity || count > quantity * 100) {
      shouldContinue = false;
    }
  }

  return quiz;
};
