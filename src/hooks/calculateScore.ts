import { LocalStorage } from "../types/storage";

export const calcScore = (obj: LocalStorage): number => {
  const total = Object.values(obj).reduce((acc, value) => {
    if (typeof value === "number" && value >= 1) {
      return acc + value;
    }
    return acc;
  }, 0);
  return total / Object.values(obj).length;
};
