import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
interface IconProps {
  name?: "arrowright" | "return-down-back-outline" | any;
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
export const ReturnDownBackOutline = ({
  name = "return-down-back-outline",
  size = 24,
  color = "black",
}: IconProps) => {
  return <Ionicons name={name} size={size} color={color} />;
};
