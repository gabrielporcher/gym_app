import { ActivityIndicator as RNActivityIndicator } from "react-native";
import { colors } from "./styles";

interface ActivityIndicatorProps {
  color?: "primary" | "secondary";
}

export function ActivityIndicator({
  color = "primary",
}: ActivityIndicatorProps) {
  const activeColor = color == "primary" ? colors.primary : colors.secondary;

  return <RNActivityIndicator color={activeColor} />;
}
