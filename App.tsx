import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import styles from "./src/styles/global";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      UniNeue: require("./assets/fonts/UniNeue-Trial-Heavy.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    !fontsLoaded && loadFonts();
  }, []);

  return (
    <SafeAreaProvider>
      {fontsLoaded ? (
        <View style={styles.container}>
          <HomeScreen />
          <StatusBar style="auto" />
        </View>
      ) : (
        <ActivityIndicator size="large" color="#08101D" />
      )}
    </SafeAreaProvider>
  );
}
