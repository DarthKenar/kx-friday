import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
export default function StepA() {
  return (
    <View style={global.layout}>
      <Text style={global.ask}>En términos generales</Text>
      <Text style={global.ask}>
        ¿Cómo te sentiste con tu trabajo esta semana?
      </Text>
      <CustomLink text="Start" link="/auto-score/step-b" />
    </View>
  );
}
