import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
export default function StepE() {
  return (
    <View style={global.layout}>
      <Text>Hola E</Text>
      <CustomLink text="Start" link="/auto-score/end" />
    </View>
  );
}
