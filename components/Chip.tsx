import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "./Text";
import { colors, radius, spacing } from "./styles";

interface ChipProps {
  text: string;
  style?: any;
  active?: boolean;
  pressable?: boolean;
  onPress?: () => void;
}

export function Chip({
  text,
  style,
  active = false,
  pressable = false,
}: ChipProps) {
  return (
    <TouchableOpacity
      style={[styles.chip, style]}
      disabled={!pressable}
      onPress={pressable ? () => console.log(text) : undefined}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: colors.quinary,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.s,
    borderRadius: radius.round,
  },
});
