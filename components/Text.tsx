import React from "react";
import { Text as DefaultText, StyleSheet } from "react-native";
import { colors } from "./styles";

export type TextVariants =
  | "default"
  | "defaultBold"
  | "title"
  | "subtitle"
  | "sectionTitle"
  | "itemTitle"
  | "itemDescription"
  | "button"
  | "buttonSecondary"
  | "defaultLight"
  | "defaultDark"
  | "itemTitleThin";

interface TextProps {
  children?: React.ReactNode;
  style?: any;
  props?: any;
  preset?: TextVariants;
}

export function Text({
  children,
  style,
  props,
  preset = "default",
}: TextProps) {
  return (
    <DefaultText style={[styles[preset], style]} {...props}>
      {children}
    </DefaultText>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    color: colors.defaultText,
  },
  defaultBold: {
    fontSize: 14,
    color: colors.defaultText,
    fontWeight: "bold",
  },
  defaultLight: {
    fontSize: 14,
    color: colors.secondary,
  },
  defaultDark: {
    fontSize: 14,
    color: colors.primary,
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.defaultText,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemTitle: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "bold",
  },
  itemTitleThin: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.primary,
  },
  itemDescription: {
    fontSize: 14,
    color: colors.defaultText,
    marginVertical: 4,
  },
  button: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.secondary,
  },
  buttonSecondary: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
  },
});
