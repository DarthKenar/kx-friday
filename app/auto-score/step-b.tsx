import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
export default function StepB() {
  return (
    <View style={global.layout}>
      <Text>Hola B</Text>
      <CustomLink text="Start" link="/auto-score/step-c" />
    </View>
  );
}
