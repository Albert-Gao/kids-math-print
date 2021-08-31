import { Config } from "../components/Settings/sections/utils/Config";
import { baseAlgorithm } from "./utils";

export const generateSubtractions = (quantity: number) => {
  const subtraction = new Config().subtraction;

  return baseAlgorithm({
    symbol: "-",
    isValidCombination: (a, b) =>
      a > b &&
      a - b >= subtraction.minLimitOfResult &&
      a - b <= subtraction.maxLimitOfResult,
    quantity: quantity,
    minNum: subtraction.minNum,
    maxNum: subtraction.maxNum,
  });
};
