import { BlurView } from "expo-blur";
import React from "react";
import { Modal as RNModal, StyleSheet, View } from "react-native";
import { Button } from "../Button";
import { Card } from "../Card";
import { spacing } from "../styles";
import { Text } from "../Text";

interface ModalProps {
  visible: boolean;
  title: string;
  children: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

export function Modal({
  visible,
  title,
  children,
  onConfirm,
  onCancel,
}: ModalProps) {
  return (
    <RNModal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <BlurView intensity={10} style={styles.absolute}>
        <View style={styles.container}>
          <Card style={styles.modal}>
            <Text preset="title" style={styles.title}>
              {title}
            </Text>
            <View style={styles.contentContainer}>{children}</View>
            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={onCancel} preset="secondary" />
              <Button title="Confirm" onPress={onConfirm} />
            </View>
          </Card>
        </View>
      </BlurView>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modal: {
    width: "90%",
    padding: spacing.l,
    alignItems: "center",
  },
  title: {
    marginBottom: spacing.m,
  },
  contentContainer: {
    marginBottom: spacing.l,
    width: "100%",
    maxHeight: 500,
  },
  message: {
    marginBottom: spacing.l,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
