import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocalStorage } from "../types/storage";

export const storeData = async (value: LocalStorage) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("scores", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (): Promise<LocalStorage | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem("scores");
    const data: LocalStorage =
      jsonValue != null
        ? JSON.parse(jsonValue)
        : { stepA: 5, stepB: 5, stepC: 5, stepD: 5, stepE: 5, total: 5 };
    return data;
  } catch (e) {
    console.log(e);
  }
};
