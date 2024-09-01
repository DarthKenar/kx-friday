import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import styles from "./src/styles/global";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <HomeScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}
