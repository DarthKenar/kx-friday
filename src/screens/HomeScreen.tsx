import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import * as Font from "expo-font";
export default function Main() {
  const [fontsLoaded] = Font.useFonts({
    UniNeue: require("../../assets/fonts/UniNeue-Trial-Heavy.ttf"),
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source="../../assets/images/full-logo.png"
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#0553",
  },
});
