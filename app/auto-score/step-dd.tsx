import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import styles from "../../src/styles/global";
import { getData, storeData } from "../../src/hooks/scoreStorage";
import { useEffect, useState } from "react";
import { LocalStorage } from "../../src/types/storage";

export default function StepDD() {
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
        ¿Lograste Superarla?
      </Text>
      <View style={{ gap: 30 }}>
        <CustomLink
          setValue={setStepValue}
          value={10}
          onTouch={onTouch}
          text="Si"
          link="/auto-score/step-e"
          stepValue={stepValue}
        />
        <CustomLink
          setValue={setStepValue}
          value={1}
          onTouch={onTouch}
          text="No"
          link="/auto-score/step-e"
          stepValue={stepValue}
        />
        <CustomLink
          setValue={setStepValue}
          value={5}
          onTouch={onTouch}
          text="Hardcodeando"
          link="/auto-score/step-e"
          stepValue={stepValue}
        />
      </View>
    </View>
  );
}
