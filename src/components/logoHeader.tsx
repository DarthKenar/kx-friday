import { Image, View } from "react-native";
const logo = require("../../assets/img/icon-no-bg-w.png");
import global from "../styles/global";

export default function LogoHeader() {
  return (
    <View style={global.container}>
      <Image source={logo} style={global.logo_header} />
    </View>
  );
}
