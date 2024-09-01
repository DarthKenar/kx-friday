import { View, StyleSheet, Image, Text } from "react-native";

import global from "../styles/global";
const logo = require("../../assets/img/full-logo.png");

export default function Main() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={global.text}>Welcome to Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 80,
  },
});
