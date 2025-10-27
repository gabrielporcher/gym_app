import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { ActivityIndicator } from "./ActivityIndicator";
import { Text } from "./Text";
import { colors, radius, spacing } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  preset?: "primary" | "secondary";
  style?: any;
  isLoading?: boolean;
}

export function Button({
  title,
  preset = "primary",
  onPress,
  style,
  disabled = false,
  isLoading = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        { backgroundColor: disabled ? colors.disabled : colors.active },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator color="secondary" />
      ) : (
        <Text preset="button">{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.l,
    borderRadius: radius.regular,
    alignItems: "center",
    justifyContent: "center",
  },
});
