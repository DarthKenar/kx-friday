import AntDesign from "@expo/vector-icons/AntDesign";

interface IconProps {
  name: "arrowright";
  size?: number;
  color?: string;
}

export const ArrowRight = ({
  name = "arrowright",
  size = 24,
  color = "white",
}: IconProps) => {
  return <AntDesign name={name} size={size} color={color} />;
};
