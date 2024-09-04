import { View, Text, Image } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import { ArrowRight } from "../../src/components/icons";
import LogoHeader from "../../src/components/logoHeader";

export default function Start() {
  return (
    <>
      <LogoHeader />
      <View style={[global.container, { gap: 20 }]}>
        <Text style={[global.text, { marginBottom: 60 }]}>
          ¿Estas listo para la introspección?
        </Text>
        <CustomLink
          rightIcon={<ArrowRight name="arrowright" />}
          text="Siguiente"
          link="/auto-score/step-a"
        />
      </View>
    </>
  );
}
