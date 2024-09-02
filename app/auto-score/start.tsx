import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
export default function Layout() {
  return (
    <View style={global.layout}>
      <Text>Hola Start</Text>
      <CustomLink text="Start" link="/auto-score/step-a" />
    </View>
  );
}
