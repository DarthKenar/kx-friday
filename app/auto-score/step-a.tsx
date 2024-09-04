import { View, Text } from "react-native";
import global from "../../src/styles/global";
import CustomLink from "../../src/components/CustomLink";
import Slider from "@react-native-community/slider";
import { useState } from "react";

export default function StepA() {
  const [sliderValue, setSliderValue] = useState(5);

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
            color: sliderValue > 4 ? "#F9F6F2" : "#08101D",
            fontSize: 20,
            opacity: sliderValue,
            position: "absolute",
            zIndex: 1,
          }}
        >
          {sliderValue.toFixed(1)}
        </Text>
      </View>
      <View style={{ height: 40 }}>
        {sliderValue < 4 && (
          <Text style={[global.ask]}>
            No te preocupes, todos tenemos malos días
          </Text>
        )}
        {sliderValue > 9 && (
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
        value={sliderValue}
        trackImage={require("../../assets/img/icon.png")}
        onValueChange={(value) => setSliderValue(value)}
      />
      <CustomLink text="Continuar" link="/auto-score/step-b" />
    </View>
  );
}
