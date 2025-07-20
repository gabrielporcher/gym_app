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
  onPress,
}: ChipProps) {
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        { backgroundColor: active ? colors.primary : colors.quinary },
        style,
      ]}
      disabled={!pressable}
      onPress={pressable ? () => onPress && onPress() : undefined}
    >
      <Text preset={active ? "defaultLight" : "default"}>{text}</Text>
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
});
