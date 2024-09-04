import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import MenuScreen from "../src/screens/MenuScreen";
import styles from "../src/styles/global";

export default function Menu() {
  return (
    <View style={styles.layout}>
      <MenuScreen />
      <StatusBar style="auto" />
    </View>
  );
}
