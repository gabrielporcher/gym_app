import React, { useRef } from "react";
import { Pressable, TextInput as RNTextInput, StyleSheet } from "react-native";
import { Icon, IconName } from "./Icon";
import { colors, radius, spacing } from "./styles";
import { Text } from "./Text";

interface SearchProps {
  onChangeText: (text: string) => void;
  placeholder: string;
  icon?: IconName;
  title?: string;
  secureTextEntry?: boolean
}

export function TextInput({
  onChangeText,
  icon = "search",
  placeholder,
  title = "",
  secureTextEntry = false
}: SearchProps) {
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <>
      {title && (
        <Text preset="itemTitle" style={styles.title}>
          {title}
        </Text>
      )}
      <Pressable onPress={focusInput} style={styles.inputContainer}>
        {!title && <Icon name={icon} color={colors.defaultText} />}
        <RNTextInput
          onChangeText={onChangeText}
          ref={inputRef}
          placeholderTextColor={colors.defaultText}
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
    backgroundColor: colors.white,
    borderColor: colors.quinary,
    borderRadius: radius.regular,
    flexDirection: "row",
    marginVertical: 4,
    marginBottom: spacing.m,
    gap: 10,

    
  },

  title: {
    marginLeft: spacing.s,
  },

  textInput: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 0,

    fontSize: 16,
    color: colors.primary,
  },
});
