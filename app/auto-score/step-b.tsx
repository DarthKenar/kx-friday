import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import styles from "../../src/styles/global";
import { useEffect, useState } from "react";
import { getData, storeData } from "../../src/hooks/scoreStorage";
import { LocalStorage } from "../../src/types/storage";

export default function StepB() {
  const [data, setData] = useState<LocalStorage>();
  const [stepValue, setStepValue] = useState<number | undefined>();

  useEffect(() => {
    getData().then((storageData) => {
      if (storageData) {
        setStepValue(storageData.stepB ?? 5);
        setData(storageData);
      }
    });
  }, []);

  const onTouch = (value: number) => {
    if (data) {
      data.stepB = value;
      console.log(data);
      storeData(data);
    }
  };

  return (
    <View style={global.layout}>
      <Text style={[styles.text, { paddingBottom: 60 }]}>
        ¿Cumpliste con tus tareas a tiempo?
      </Text>
      <View style={{ gap: 40 }}>
        <CustomLink
          setValue={setStepValue}
          value={10}
          onTouch={onTouch}
          text="Todas"
          link="/auto-score/step-c"
          stepValue={stepValue}
        />
        <CustomLink
          setValue={setStepValue}
          value={7.5}
          onTouch={onTouch}
          text="Casi Todas"
          link="/auto-score/step-c"
          stepValue={stepValue}
        />
        <CustomLink
          setValue={setStepValue}
          value={5}
          onTouch={onTouch}
          text="Algunas"
          link="/auto-score/step-c"
          stepValue={stepValue}
        />
      </View>
    </View>
  );
}
