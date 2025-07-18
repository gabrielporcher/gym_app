import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "./Text";
import { View } from "./View";
import { colors, radius, spacing } from "./styles";

interface ChipProps {
  text: string
  style?: any;
  active?: boolean;
}

export function Chip({ text, style, active = false }: ChipProps) {
  return (
    <View style={[styles.chip, style]}>
      <Text>{text}</Text>
    </View>
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
