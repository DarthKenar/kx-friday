import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import styles from "../../src/styles/global";
import { getData, storeData } from "../../src/hooks/scoreStorage";
import { useEffect, useState } from "react";
import { LocalStorage } from "../../src/types/storage";

export default function StepF() {
  const [data, setData] = useState<LocalStorage>();
  const [stepValue, setStepValue] = useState<number | undefined>();

  useEffect(() => {
    getData().then((storageData) => {
      if (storageData) {
        setStepValue(storageData.stepF ?? 5);
        setData(storageData);
      }
    });
  }, []);

  const onTouch = (value: number) => {
    if (data) {
      data.stepF = value;
      console.log(data);
      storeData(data);
    }
  };

  return (
    <View style={global.layout}>
      <Text style={[styles.text, { paddingBottom: 60 }]}>
        ¿Estas contento con tu progreso?
      </Text>
      <View style={{ gap: 30 }}>
        <CustomLink
          setValue={setStepValue}
          value={10}
          onTouch={onTouch}
          textSize={16}
          text="Progreso es mi segundo nombre"
          link="/auto-score/end"
          stepValue={stepValue}
        />
        <CustomLink
          setValue={setStepValue}
          value={8.5}
          onTouch={onTouch}
          text="Contento"
          link="/auto-score/end"
          stepValue={stepValue}
        />
        <CustomLink
          setValue={setStepValue}
          value={7}
          onTouch={onTouch}
          text="Regular"
          link="/auto-score/end"
          stepValue={stepValue}
        />
        <CustomLink
          setValue={setStepValue}
          value={1}
          onTouch={onTouch}
          text="No"
          link="/auto-score/end"
          stepValue={stepValue}
        />
      </View>
    </View>
  );
}
