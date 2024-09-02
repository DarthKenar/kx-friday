import { Text } from "react-native";
import global from "../styles/global";
import { Link } from "expo-router";

interface CustomLinkProps {
  text: string;
  link: string;
}

export default function CustomLink({ text, link }: CustomLinkProps) {
  return (
    <Link href={link} style={[global.link_container, { marginBottom: 45 }]}>
      <Text style={global.link_text}>{text}</Text>
    </Link>
  );
}
