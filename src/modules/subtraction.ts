import { CONFIG } from "../config";
import { baseAlgorithm } from "./utils";

const {
  MIN_NUM,
  MAX_NUM,
  MIN_LIMIT_OF_RESULT,
  MAX_LIMIT_OF_RESULT
} = CONFIG.SUBTRACTION;

export const generateSubtractions = (quantity: number) => {
  return baseAlgorithm({
    symbol: "-",
    isValidCombination: (a, b) =>
      a > b && a - b >= MIN_LIMIT_OF_RESULT && a - b <= MAX_LIMIT_OF_RESULT,
    quantity: quantity,
    minNum: MIN_NUM,
    maxNum: MAX_NUM
  });
};
