import { View, StyleSheet, Image, Text } from "react-native";

import global from "../styles/global";
import Button from "../components/Button";
const logo = require("../../assets/img/full-logo.png");

export default function Main() {
  return (
    <>
      <View style={styles.container}>
        <Image source={logo} style={styles.image} />
        <Text style={global.text}>Welcome!</Text>
      </View>
      <Button />
    </>
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
