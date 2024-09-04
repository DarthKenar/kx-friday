import { View, Text, Image } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import { ArrowRight } from "../../src/components/icons";
import Logo from "../../src/components/logo";

export default function Start() {
  return (
    <>
      <View style={[global.container, { gap: 20 }]}>
        <Text style={[global.text, { marginBottom: 60 }]}>
          ¿Estas listo para la introspección?
        </Text>
        <CustomLink
          rightIcon={<ArrowRight name="arrowright" />}
          text="Si, Vamos!"
          link="/auto-score/step-a"
        />
      </View>
    </>
  );
}
