import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import styles from "../../src/styles/global";
import { getData, storeData } from "../../src/hooks/scoreStorage";
import { useEffect, useState } from "react";
import { LocalStorage } from "../../src/types/storage";

export default function StepC() {
  const [data, setData] = useState<LocalStorage>();
  const [stepValue, setStepValue] = useState<number | undefined>();

  useEffect(() => {
    getData().then((storageData) => {
      if (storageData) {
        setStepValue(storageData.stepC ?? 5);
        setData(storageData);
      }
    });
  }, []);

  const onTouch = (value: number) => {
    if (data) {
      data.stepC = value;
      console.log(data);
      storeData(data);
    }
  };

  return (
    <View style={global.layout}>
      <Text style={[styles.text, { paddingBottom: 60 }]}>
        ¿Colaboraste bien con tu equipo?
      </Text>
      <View style={{ gap: 30 }}>
        <CustomLink
          setValue={setStepValue}
          value={10}
          onTouch={onTouch}
          text="Si"
          link="/auto-score/step-d"
          stepValue={stepValue}
        />
        <CustomLink
          setValue={setStepValue}
          value={8}
          onTouch={onTouch}
          text="A Veces"
          link="/auto-score/step-d"
          stepValue={stepValue}
        />
        <CustomLink
          setValue={setStepValue}
          value={0}
          onTouch={onTouch}
          textSize={16}
          text="No tuve la oportunidad"
          link="/auto-score/step-d"
          stepValue={stepValue}
        />
      </View>
    </View>
  );
}
