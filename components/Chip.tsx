import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, TextVariants } from "./Text";
import { colors, radius, spacing } from "./styles";

type ColorVariants = "default" | "selected" | "heavy" | "moderate" | "medium";

interface ChipProps {
  text: string;
  style?: any;
  active?: boolean;
  preset?: ColorVariants;
  pressable?: boolean;
  onPress?: () => void;
}

export function Chip({
  text,
  style,
  active = false,
  preset = "default",
  pressable = false,
  onPress,
}: ChipProps) {
  let textPreset =
    preset == "selected" || preset == "heavy"
      ? "defaultLight"
      : preset == "default"
      ? "default"
      : "defaultDark";

  return (
    <TouchableOpacity
      style={[styles.chip, styles[preset], style]}
      disabled={!pressable}
      onPress={pressable ? () => onPress && onPress() : undefined}
    >
      <Text preset={textPreset as TextVariants}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    //backgroundColor: colors.quinary,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.s,
    borderRadius: radius.round,
  },
  default: {
    backgroundColor: colors.midShade,
  },
  selected: {
    backgroundColor: colors.active,
  },
  heavy: {
    backgroundColor: colors.darkest,
  },
  moderate: {
    backgroundColor: colors.inactive,
  },
  medium: {
    backgroundColor: colors.midShade,
  },
});
