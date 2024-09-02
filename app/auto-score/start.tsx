import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Layout() {
  return (
    <View style={global.layout}>
      <Text>Hola Start</Text>
      <CustomLink
        rightIcon={<AntDesign name="arrowright" size={24} color="white" />}
        text="Siguiente"
        link="/auto-score/step-a"
      />
    </View>
  );
}
