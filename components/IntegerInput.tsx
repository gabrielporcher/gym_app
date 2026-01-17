import React from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";
import { Icon, IconLibrary, IconName } from "./Icon";
import { View } from "./View";
import { colors, radius, spacing } from "./styles";

interface IntegerInputProps {
  value: number;
  onChange: (value: number) => void;
  label?: string;
  library?: IconLibrary;
  iconName: IconName;
}

export function IntegerInput({
  value,
  onChange,
  label = "",
  library,
  iconName,
}: IntegerInputProps) {
  const handleTextChange = (text: string) => {
    const numericValue = parseInt(text.replace(/[^0-9]/g, ""), 10);
    onChange(isNaN(numericValue) ? 0 : numericValue);
  };

  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        library={library}
        size={25}
        color={colors.textDarkSecondary}
      />
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
    backgroundColor: colors.bgWhiteBottom,
    borderRadius: radius.regular,
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.s,
  },
});
