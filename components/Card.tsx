import React from "react";
import { StyleSheet } from "react-native";
import { View } from "./View";
import { colors, radius, spacing } from "./styles";

interface CardProps {
  children: React.ReactNode;
  props?: any;
  style?: any;
}

export function Card({ children, style, props }: CardProps) {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.quinary,
    borderRadius: radius.regular,
    padding: spacing.m,
  },
});
