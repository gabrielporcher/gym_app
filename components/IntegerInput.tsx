import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Icon, IconName } from "./Icon";
import { colors, radius, spacing } from "./styles";
import { Text } from "./Text";
import { View } from "./View";

interface IntegerInputProps {
  value: number;
  onChange: (value: number) => void;
  style?: any;
  iconName?: IconName;
  title?: string;
}

export function IntegerInput({
  value,
  onChange,
  style,
  iconName,
  title,
}: IntegerInputProps) {
  const increment = () => onChange(value + 1);
  const decrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleContainer}>
        {iconName && <Icon name={iconName} size={24} color={colors.primary} />}
        {title && <Text preset="itemTitleThin">{title}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={decrement}>
          <Icon
            name="remove"
            size={30}
            color={colors.white}
            style={styles.minusButton}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={String(value)}
          onChangeText={(text) => onChange(Number(text) || 0)}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={increment}>
          <Icon
            name="add"
            size={30}
            color={colors.white}
            style={styles.plusButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.s,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.m,
    borderRadius: radius.regular,
    //minWidth: 70,
  },
  plusButton: {
    borderWidth: 1.5,
    borderRadius: radius.regular,
    borderColor: colors.blue,
    backgroundColor: colors.blue,
  },
  minusButton: {
    borderWidth: 1.5,
    borderRadius: radius.regular,
    borderColor: colors.red,
    backgroundColor: colors.red,
  },
});
