import { Image, View } from "react-native";
import global from "../styles/global";

const logo = require("../../assets/img/icon-no-bg-d.png");

export default function LogoHeader() {
  return (
    <View style={{}}>
      <Image source={logo} style={global.logo_header} />
    </View>
  );
}
