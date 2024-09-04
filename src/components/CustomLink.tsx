import { Pressable, Text } from "react-native";
import global from "../styles/global";
import { Link } from "expo-router";
import { ReactElement, useState } from "react";

interface CustomLinkProps {
  text: string;
  link: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  extraClass?: object;
}

export default function CustomLink({
  text,
  link,
  leftIcon,
  rightIcon,
  extraClass,
}: CustomLinkProps) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Link
      asChild
      href={link}
      style={[
        global.link_container,
        extraClass,
        isPressed && { opacity: 0.9 }, // Aplica el color rojo cuando está presionado
        (leftIcon || rightIcon) && {
          flexDirection: "row",
          justifyContent: "space-around",
        },
      ]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Pressable>
        {leftIcon}
        <Text style={global.link_text}>{text}</Text>
        {rightIcon}
      </Pressable>
    </Link>
  );
}
