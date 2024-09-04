import { View, StyleSheet, Image, Text } from "react-native";
import global from "../styles/global";
import CustomLink from "../components/CustomLink";
const logo = require("../../assets/img/full-logo.png");

export default function Main() {
  return (
    <>
      <View style={global.container}>
        <Image source={logo} style={styles.image} />
        <Text style={global.text}>Bienvenido!</Text>
      </View>
      <CustomLink
        extraClass={{ marginBottom: 40 }}
        text="Entrar"
        link="/menu"
      />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 80,
  },
});
