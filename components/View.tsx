import React from "react";
import { View as DefaultView } from "react-native";

interface ViewProps {
  children?: React.ReactNode;
  style?: any;
  props?: any;
}

export function View({ children, style, props }: ViewProps) {
  return (
    <DefaultView
      style={style}
      {...props}
    >
      {children}
    </DefaultView>
  );
}
