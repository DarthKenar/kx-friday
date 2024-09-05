import { View, Text, Pressable } from "react-native";
import global from "../styles/global";
import CustomLink from "../components/CustomLink";
import Logo from "../components/logo";

export default function Menu() {
  return (
    <>
      <Logo />
      <View style={global.container}>
        <CustomLink
          extraClass={{ marginBottom: 40 }}
          text="Puntaje"
          link="/auto-score/start"
        />
        <Pressable
          style={[global.link_container_no_available, { marginBottom: 40 }]}
        >
          <Text style={global.link_text}>Accesos</Text>
        </Pressable>
        <Pressable
          style={[global.link_container_no_available, { marginBottom: 40 }]}
        >
          <Text style={global.link_text}>Configuracion</Text>
        </Pressable>
      </View>
    </>
  );
}
