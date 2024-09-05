import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import styles from "../../src/styles/global";
import { getData, storeData } from "../../src/hooks/scoreStorage";
import { useEffect, useState } from "react";
import { LocalStorage } from "../../src/types/storage";
export default function StepE() {
  const [data, setData] = useState<LocalStorage>();
  const [stepValue, setStepValue] = useState(5);

  useEffect(() => {
    getData().then((storageData) => {
      if (storageData) {
        setStepValue(storageData.stepB ?? 5);
        setData(storageData);
      }
    });
  }, []);

  const onTouch = () => {
    if (data) {
      data.stepB = stepValue;
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
        />
        <CustomLink
          text="No"
          link="/auto-score/step-f"
          setValue={setStepValue}
          value={5}
          onTouch={onTouch}
        />
      </View>
    </View>
  );
}
