import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import styles from "../../src/styles/global";

export default function StepD() {
  return (
    <View style={global.layout}>
      <Text style={[styles.text, { paddingBottom: 60 }]}>
        ¿Tuviste alguna dificultad?
      </Text>
      <View style={{ gap: 30 }}>
        <CustomLink text="Si" link="/auto-score/step-dd" />
        <CustomLink text="No" link="/auto-score/step-e" />
        <CustomLink
          textSize={16}
          text="Yo soy la dificultad"
          link="/auto-score/step-dd"
        />
      </View>
    </View>
  );
}
