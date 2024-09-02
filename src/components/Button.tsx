
import { Pressable, Text } from "react-native";
import global from "../styles/global";

export default function Button() {
  return (
    <Pressable style={[global.button_container,{marginBottom: 45}]}>
      <Text style={global.button_text}>Entrar</Text>
    </Pressable>
  );
}
