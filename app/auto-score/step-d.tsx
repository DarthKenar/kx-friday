import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import styles from "../../src/styles/global";
import { useEffect, useState } from "react";
import { LocalStorage } from "../../src/types/storage";
import { getData, storeData } from "../../src/hooks/scoreStorage";

export default function StepD() {
  const [data, setData] = useState<LocalStorage>();
  const [stepValue, setStepValue] = useState<number | undefined>();

  useEffect(() => {
    getData().then((storageData) => {
      if (storageData) {
        setStepValue(storageData.stepD ?? 5);
        setData(storageData);
      }
    });
  }, []);

  const onTouch = (value: number) => {
    if (data) {
      data.stepD = value;
      console.log(data);
      storeData(data);
    }
  };

  return (
    <View style={global.layout}>
      <Text style={[styles.text, { paddingBottom: 60 }]}>
        ¿Tuviste alguna dificultad?
      </Text>
      <View style={{ gap: 30 }}>
        <CustomLink text="Si" link="/auto-score/step-dd" />
        <CustomLink onTouch={onTouch} text="No" link="/auto-score/step-e" />
        <CustomLink
          textSize={16}
          text="Yo soy la dificultad"
          link="/auto-score/step-dd"
        />
      </View>
    </View>
  );
}
