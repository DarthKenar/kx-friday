import { Pressable, Text } from "react-native";
import global from "../styles/global";
import { Link } from "expo-router";
import { ReactElement, useState } from "react";

interface CustomLinkProps {
  text: string;
  link: string;
  textSize?: number;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  extraClass?: object;
  onTouch?: () => void;
  value?: number;
  setValue?: (value: number) => void;
}

export default function CustomLink({
  text,
  textSize = 20,
  link,
  leftIcon,
  rightIcon,
  extraClass,
  onTouch,
  value,
  setValue,
}: CustomLinkProps) {
  const [isPressed, setIsPressed] = useState(false);
  const onTouchLink = () => {
    onTouch && value && onTouch();
    setValue && value && setValue(value);
  };
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
      <Pressable onTouchEnd={onTouchLink}>
        {leftIcon}
        <Text style={[global.link_text, { fontSize: textSize }]}>{text}</Text>
        {rightIcon}
      </Pressable>
    </Link>
  );
}
