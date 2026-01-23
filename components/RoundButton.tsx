import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Icon, IconLibrary, IconName } from "./Icon";
import { Text } from "./Text";
import { View } from "./View";
import { colors } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  style?: any;
  iconName?: IconName;
  library?: IconLibrary;
}

export function RoundButton({
  title,
  onPress,
  style,
  disabled = false,
  iconName = "check",
  library = "Ionicons",
}: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }, style]}
        onPress={onPress}
        disabled={disabled}
      >
        <Icon
          name={iconName}
          library={library}
          size={38}
          color={colors.white}
        />
      </TouchableOpacity>
      <Text preset="buttonSecondary" style={{ textAlign: "center" }}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
  },
  button: {
    borderRadius: 150,
    height: 70,
    width: 70,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
