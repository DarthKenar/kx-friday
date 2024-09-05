import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import Slider from "@react-native-community/slider";
import { useEffect, useState } from "react";
import { getData, storeData } from "../../src/hooks/scoreStorage";
import { LocalStorage } from "../../src/types/storage";

export default function StepA() {
  const [data, setData] = useState<LocalStorage>();
  const [stepValue, setStepValue] = useState(5);

  useEffect(() => {
    getData().then((storageData) => {
      if (storageData) {
        setStepValue(storageData.stepA ?? 5);
        setData(storageData);
      }
    });
  }, []);

  const onTouch = () => {
    if (data) {
      data.stepA = stepValue;
      storeData(data);
    }
  };

  return (
    <View style={global.layout}>
      <Text style={global.ask}>En términos generales</Text>
      <Text style={[global.ask, { marginBottom: 60 }]}>
        ¿Cómo te sentiste con tu trabajo esta semana?
      </Text>

      <View
        style={{
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#08101D",
          position: "relative",
          borderRadius: 50,
        }}
      >
        <Text
          style={{
            color: stepValue > 4 ? "#F9F6F2" : "#08101D",
            fontSize: 20,
            opacity: stepValue,
            position: "absolute",
            zIndex: 1,
          }}
        >
          {stepValue.toFixed(1)}
        </Text>
      </View>
      <View style={{ height: 40 }}>
        {stepValue < 4 && (
          <Text style={[global.ask]}>
            No te preocupes, todos tenemos malos días
          </Text>
        )}
        {stepValue > 9 && (
          <Text style={[global.ask]}>Excelente, Sigue así!</Text>
        )}
      </View>

      <Slider
        style={{ width: 200, height: 150 }}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#08101D"
        maximumTrackTintColor="#000000"
        thumbTintColor="#08101D"
        value={stepValue}
        trackImage={require("../../assets/img/icon.png")}
        onValueChange={(value) => setStepValue(value)}
      />
      <CustomLink
        onTouch={onTouch}
        text="Continuar"
        link="/auto-score/step-b"
      />
    </View>
  );
}
