import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { colors } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  style?: any;
}

export function RoundButton({
  title,
  onPress,
  style,
  disabled = false,
}: ButtonProps) {
  return (
    <>
      <TouchableOpacity
        style={[styles.button, style, { backgroundColor: "green" }]}
        onPress={onPress}
        disabled={disabled}
      >
        <Icon
          name={"skip-next"}
          library="MaterialCommunityIcons"
          size={24}
          color={colors.white}
        />
      </TouchableOpacity>
      <Text preset="buttonSecondary">{title}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 150,
    height: 70,
    width: 70,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
