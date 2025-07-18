import React from "react";
import { View as DefaultView } from "react-native";
import { colors } from "./styles";

interface ViewProps {
  children?: React.ReactNode;
  style?: any;
  props?: any;
}

export function View({ children, style, props }: ViewProps) {
  return (
    <DefaultView
      style={[{ backgroundColor: colors.background }, style]}
      {...props}
    >
      {children}
    </DefaultView>
  );
}
