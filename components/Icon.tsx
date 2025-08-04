import { colors } from "@/components/styles";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "./Text";
import { View } from "./View";

export type IconLibrary = "Ionicons" | "AntDesign" | "MaterialCommunityIcons";

export type IconName =
  | React.ComponentProps<typeof Ionicons>["name"]
  | React.ComponentProps<typeof AntDesign>["name"]
  | React.ComponentProps<typeof MaterialCommunityIcons>["name"]
  | IconVariants;

export type IconVariants = "A" | "B" | "C" | "D" | "E" | "F" | "G";

interface IconProps {
  name: IconName;
  library?: IconLibrary;
  color?: string;
  size?: number;
  style?: any;
}

const iconVariants: IconVariants[] = ["A", "B", "C", "D", "E", "F", "G"];

function isIconVariant(name: any): name is IconVariants {
  return iconVariants.includes(name);
}

const iconComponents = {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
};

export function Icon({
  name,
  library = "Ionicons",
  color = "black",
  size = 24,
  style,
}: IconProps) {
  if (isIconVariant(name)) {
    return (
      <View style={[styles.letterIcon, style]}>
        <Text style={styles.letterIconText}>{name}</Text>
      </View>
    );
  }

  const IconComponent = iconComponents[library];

  return (
    <IconComponent
      name={name as any}
      size={size}
      color={color}
      style={style}
    />
  );
}

const styles = StyleSheet.create({
  letterIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  letterIconText: {
    color: colors.secondary,
    fontSize: 15,
  },
});