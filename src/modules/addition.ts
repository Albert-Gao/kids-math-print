import { CONFIG } from "../config";
import { baseAlgorithm } from "./utils";

const { MIN_NUM, MAX_NUM, MAX_LIMIT_OF_RESULT } = CONFIG.ADDITION;

export const generateAdditions = (quantity: number) => {
  return baseAlgorithm({
    symbol: "+",
    isValidCombination: (a, b) => a + b <= MAX_LIMIT_OF_RESULT,
    quantity: quantity,
    minNum: MIN_NUM,
    maxNum: MAX_NUM
  });
};
