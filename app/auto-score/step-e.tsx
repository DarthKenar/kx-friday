import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import styles from "../../src/styles/global";
import { getData, storeData } from "../../src/hooks/scoreStorage";
import { useEffect, useState } from "react";
import { LocalStorage } from "../../src/types/storage";
export default function StepE() {
  const [data, setData] = useState<LocalStorage>();
  const [stepValue, setStepValue] = useState<number | undefined>();

  useEffect(() => {
    getData().then((storageData) => {
      if (storageData) {
        setStepValue(storageData.stepE ?? 5);
        setData(storageData);
      }
    });
  }, []);

  const onTouch = (value: number) => {
    if (data) {
      data.stepE = value;
      console.log(data);
      storeData(data);
    }
  };
  return (
    <View style={global.layout}>
      <Text style={[styles.text, { paddingBottom: 60 }]}>
        ¿Aprendiste algo nuevo?
      </Text>
      <View style={{ gap: 30 }}>
        <CustomLink
          text="Si"
          link="/auto-score/step-f"
          setValue={setStepValue}
          value={10}
          onTouch={onTouch}
          stepValue={stepValue}
        />
        <CustomLink
          text="No"
          link="/auto-score/step-f"
          setValue={setStepValue}
          value={5}
          onTouch={onTouch}
          stepValue={stepValue}
        />
      </View>
    </View>
  );
}
