import { Ionicons } from "@expo/vector-icons";
import React from "react";

interface IconProps {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color?: string;
  size?: number;
  style?: any;
}

export function Icon({ name, color = "black", size = 24, style }: IconProps) {
  return <Ionicons name={name} size={size} color={color} style={style} />;
}
