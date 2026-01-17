import React from "react";
import {
  Text as DefaultText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";
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
  | "itemTitleThin"
  | "link"
  | "integerInput";

interface TextProps extends RNTextProps {
  preset?: TextVariants;
}

export function Text({ children, style, preset = "default" }: TextProps) {
  return <DefaultText style={[styles[preset], style]}>{children}</DefaultText>;
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    color: colors.textDarkSecondary,
  },
  defaultBold: {
    fontSize: 14,
    color: colors.textDarkSecondary,
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
    color: colors.textDarkSecondary,
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
    color: colors.textDarkSecondary,
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
  link: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.25,
    color: colors.primary,
    textDecorationLine: "underline",
  },
  integerInput: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textDark,
  },
});
