import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "./Text";
import { colors, radius, spacing } from "./styles";

interface ButtonProps {
  title: string;
  preset?: "primary" | "secondary";
  onPress: () => void;
  style?: any;
}

export function Button({
  title,
  preset = "primary",
  onPress,
  style,
}: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text preset="button">{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.l,
    borderRadius: radius.regular,
    alignItems: "center",
    justifyContent: "center",
  },
});
