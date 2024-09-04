import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import HomeScreen from "../src/screens/HomeScreen";
import styles from "../src/styles/global";

export default function Master() {
  return (
    <View style={styles.layout}>
      <HomeScreen />
      <StatusBar style="light" />
    </View>
  );
}
