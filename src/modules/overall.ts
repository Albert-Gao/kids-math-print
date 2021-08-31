import { Config } from "../components/Settings/sections/utils/Config";
import { generateAdditions } from "./addition";
import { generateSubtractions } from "./subtraction";

export const generateQuiz = () => {
  const config = new Config();

  const { quantity, additionRatio, subtractionRatio } = config.overall;

  const numOfAddToBeGen = Math.ceil(quantity * additionRatio);
  const numOfSubToBeGen = Math.ceil(quantity * subtractionRatio);
  console.log("numOfAddToBeGen", numOfAddToBeGen);
  console.log("numOfSubToBeGen", numOfSubToBeGen);

  const adds = generateAdditions(numOfAddToBeGen);
  const subtractions = generateSubtractions(numOfSubToBeGen);
  console.log(subtractions);

  const result = [...adds, ...subtractions];

  if (result.length > quantity) {
    const toSubtract = result.length - quantity;

    for (let i = 1; i <= toSubtract; i += 1) {
      result.pop();
    }
  }

  return result;
};
