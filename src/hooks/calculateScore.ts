import { LocalStorage } from "../types/storage";

export const calcScore = (obj: LocalStorage): number => {
  let totalNumbers = 0;
  const total = Object.values(obj).reduce((acc, value) => {
    if (typeof value === "number" && value >= 1) {
      totalNumbers++;
      return acc + value;
    }
    return acc;
  }, 0);
  return total / totalNumbers;
};
