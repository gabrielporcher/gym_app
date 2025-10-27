import React, { useRef } from "react";
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from "react-native";
import { Icon, IconName } from "./Icon";
import { colors, miscellaneous, radius, spacing, typography } from "./styles";
import { Text } from "./Text";

interface TextInputProps extends RNTextInputProps {
  icon?: IconName;
  title?: string;
}

export function TextInput({
  value,
  onChangeText,
  icon = "search",
  placeholder,
  title = "",
  secureTextEntry = false,
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <>
      {title && <Text style={styles.title}>{title}</Text>}
      <Pressable onPress={focusInput} style={styles.inputContainer}>
        {!title && <Icon name={icon} color={colors.placeholderText} />}
        <RNTextInput
          value={value}
          onChangeText={onChangeText}
          ref={inputRef}
          placeholderTextColor={colors.placeholderText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          style={styles.textInput}
        />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    padding: spacing.s,
    paddingVertical: 12,
    backgroundColor: colors.bgWhiteTop,
    borderColor: colors.bgWhiteBottom,
    borderRadius: radius.regular,
    flexDirection: "row",
    marginVertical: 4,
    marginBottom: spacing.m,
    gap: 10,
    ...miscellaneous.shadow,
  },

  title: {
    ...typography.body,
    marginLeft: spacing.s,
    fontWeight: "500",
    color: colors.primary,
  },

  textInput: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 0,

    fontSize: 16,
    color: colors.primary,
  },
});
