import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import HomeScreen from "../src/screens/HomeScreen";
import styles from "../src/styles/global";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Master() {
  return (
    <SafeAreaProvider>
      <View style={styles.layout}>
        <HomeScreen />
        <StatusBar style="dark" />
      </View>
    </SafeAreaProvider>
  );
}
