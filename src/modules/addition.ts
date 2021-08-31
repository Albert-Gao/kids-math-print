import { Config } from "../components/Settings/sections/utils/Config";
import { baseAlgorithm } from "./utils";

export const generateAdditions = (quantity: number) => {
  const addition = new Config().addition;

  return baseAlgorithm({
    symbol: "+",
    isValidCombination: (a, b) => a + b <= addition.maxLimitOfResult,
    quantity: quantity,
    minNum: addition.minNum,
    maxNum: addition.maxNum,
  });
};
