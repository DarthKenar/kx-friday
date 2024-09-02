import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export default function Layout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      UniNeue: require("../assets/fonts/UniNeue-Trial-Heavy.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    !fontsLoaded && loadFonts();
  }, []);
  return (
    <SafeAreaProvider>
      {fontsLoaded ? (
        <Slot />
      ) : (
        <ActivityIndicator size="large" color="#08101D" />
      )}
    </SafeAreaProvider>
  );
}
