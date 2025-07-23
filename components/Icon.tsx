import { colors } from "@/components/styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "./Text";
import { View } from "./View";

export type IconName = React.ComponentProps<typeof Ionicons>["name"] | IconVariants;

export type IconVariants = "A" | "B" | "C" | "D" | "E" | "F" | "G";

interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
  style?: any;
}

const iconVariants: IconVariants[] = ["A", "B", "C", "D", "E", "F", "G"];

function isIconVariant(name: any): name is IconVariants {
  return iconVariants.includes(name);
}

export function Icon({ name, color = "black", size = 24, style }: IconProps) {
  if (isIconVariant(name)) {
    return (
      <View style={[styles.letterIcon, style]}>
        <Text style={styles.letterIconText}>{name}</Text>
      </View>
    );
  }

  return <Ionicons name={name} size={size} color={color} style={style} />;
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
