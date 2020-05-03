import { CONFIG } from "../config";
import { generateAdditions } from "./addition";
import { generateSubtractions } from "./subtraction";

const { QUANTITY, ADDITION_RATIO, SUBTRACTION_RATIO } = CONFIG.OVERALL;

export const generateQuiz = () => {
  const numOfAddToBeGen = Math.ceil(QUANTITY * ADDITION_RATIO);
  const numOfSubToBeGen = Math.ceil(QUANTITY * SUBTRACTION_RATIO);
  console.log("numOfAddToBeGen", numOfAddToBeGen);
  console.log("numOfSubToBeGen", numOfSubToBeGen);

  const adds = generateAdditions(numOfAddToBeGen);
  const subtractions = generateSubtractions(numOfSubToBeGen);
  console.log(subtractions);

  const result = [...adds, ...subtractions];

  if (result.length > QUANTITY) {
    const toSubtract = result.length - QUANTITY;

    for (let i = 1; i <= toSubtract; i += 1) {
      result.pop();
    }
  }

  return result;
};
