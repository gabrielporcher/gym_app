import React, { useRef } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";
import { Icon } from "./Icon";
import { colors, radius, spacing } from "./styles";

interface SearchProps {
  onChangeText: (text: string) => void;
}

export function SearchBar({onChangeText}: SearchProps) {
  const inputRef = useRef<TextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPress={focusInput} style={styles.inputContainer}>
      <Icon name="search" color={colors.defaultText} />
      <TextInput
      onChangeText={onChangeText}
        ref={inputRef}
        placeholderTextColor={colors.defaultText}
        placeholder="Search exercises..."
        style={styles.textInput}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    padding: spacing.s,
    paddingVertical: spacing.m,
    borderColor: colors.quinary,
    borderRadius: radius.regular,
    flexDirection: "row",
    marginVertical: spacing.s,
    backgroundColor: "#FFF",
    gap: 10,
  },

  textInput: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 0,

    fontSize: 16,
    color: colors.primary,
  },
});
