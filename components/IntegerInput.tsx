import React from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";
import { Icon, IconName } from "./Icon";
import { View } from "./View";
import { colors, radius, spacing } from "./styles";

interface IntegerInputProps {
  value: number;
  onChange: (value: number) => void;
  label?: string;
  iconName: IconName;
}

export function IntegerInput({
  value,
  onChange,
  label = "",
  iconName,
}: IntegerInputProps) {
  const handleTextChange = (text: string) => {
    const numericValue = parseInt(text.replace(/[^0-9]/g, ""), 10);
    onChange(isNaN(numericValue) ? 0 : numericValue);
  };

  return (
    <View style={styles.container}>
      <Icon name={iconName} size={20} color={colors.textDarkSecondary} />
      <RNTextInput
        style={styles.input}
        value={value.toString()}
        onChangeText={handleTextChange}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s,
  },
  input: {
    width: 60,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textDark,
    backgroundColor: colors.bgWhiteMid,
    borderRadius: radius.regular,
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.s,
  },
});
