import { Pressable, Text } from "react-native";
import global from "../styles/global";
import { Link } from "expo-router";
import { ReactElement } from "react";

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
  return (
    <Link
      asChild
      style={[
        global.link_container,
        extraClass,
        (leftIcon || rightIcon) && {
          flexDirection: "row",
          justifyContent: "space-around",
        },
      ]}
      href={link}
    >
      <Pressable>
        {leftIcon}
        <Text style={global.link_text}>{text}</Text>
        {rightIcon}
      </Pressable>
    </Link>
  );
}
