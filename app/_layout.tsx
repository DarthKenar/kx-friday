import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import Logo from "../src/components/logo";
import styles from "../src/styles/global";
import LogoHeader from "../src/components/logoHeader";

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
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#08101D" },
            headerTitle: "",
            headerTintColor: "#F9F6F2",
            headerTitleStyle: { fontFamily: "UniNeue" },
            headerLeft: () => <LogoHeader />,
            headerRight: () => (
              <Text style={styles.text_header}>Kairox lab</Text>
            ),
          }}
        />
      ) : (
        <ActivityIndicator size="large" color="#08101D" />
      )}
    </SafeAreaProvider>
  );
}
