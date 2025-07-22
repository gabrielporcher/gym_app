
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "./Icon";
import { colors, radius, spacing } from "./styles";

interface IntegerInputProps {
  value: number;
  onChange: (value: number) => void;
  style?: any;
}

export function IntegerInput({ value, onChange, style }: IntegerInputProps) {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(value - 1);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={increment}>
        <Icon name="caret-up" size={24} color={colors.primary} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={String(value)}
        onChangeText={(text) => onChange(Number(text) || 0)}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={decrement}>
        <Icon name="caret-down" size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.m,
    borderRadius: radius.regular,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
