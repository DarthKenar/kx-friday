import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import styles from "../../src/styles/global";
import { useEffect, useState } from "react";
import { getData } from "../../src/hooks/scoreStorage";
import { calcScore } from "../../src/hooks/calculateScore";

export default function End() {
  const [score, setScore] = useState(0);
  useEffect(() => {
    getData().then((storageData) => {
      if (storageData) {
        setScore(calcScore(storageData));
      }
    });
  }, []);
  return (
    <View style={[global.layout, { gap: 25 }]}>
      <Text style={[styles.text, { textAlign: "center" }]}>
        {score > 5
          ? "Felicitaciones!"
          : "  Ánimo, la semana que viene lo harás mejor!"}
      </Text>
      <Text style={styles.text}>{score}</Text>
      <CustomLink text="Finalizar" link="/menu" />
    </View>
  );
}
