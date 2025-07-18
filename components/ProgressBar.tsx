import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "./Text";
import { View } from "./View";
import { colors, radius, spacing } from "./styles";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  currentPage: string;
}

export function ProgressBar({
  currentStep,
  totalSteps,
  currentPage,
}: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;
  return (
    <>
      <View style={styles.progressContainer}>
        <Text>{`Step ${currentStep} of ${totalSteps}`}</Text>
        <Text preset="defaultBold">{currentPage}</Text>
      </View>
      <View style={styles.container}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 4,
    backgroundColor: colors.quinary,
    borderRadius: radius.smooth,
  },
  progress: {
    height: 4,
    backgroundColor: colors.primary,
    borderRadius: radius.smooth,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.s,
  },
});
