import React from "react";
import { StyleSheet, View } from "react-native";
import { colors, spacing } from "./styles";
import { Text } from "./Text";

interface ToastProps {
    visible: boolean;
    message: string;
}

export function Toast({visible, message}: ToastProps) {
    if (!visible) return null

    return (
        <View style={styles.container}>
            <Text>{message}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    padding: spacing.l,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
