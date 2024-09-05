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
    <View style={global.layout}>
      <Text style={styles.text}>Felicitaciones!</Text>
      <Text style={styles.text}>{score}</Text>
      <CustomLink text="Finalizar" link="/" />
    </View>
  );
}
