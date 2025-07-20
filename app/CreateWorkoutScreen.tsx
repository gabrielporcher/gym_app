import {
  Icon,
  List,
  ProgressBar,
  Screen,
  Text,
} from "@/components";
import { colors, radius, spacing } from "@/components/styles";
import type { ListItemType } from "@/constants/ListModels";
import { popularModels } from "@/constants/ListModels";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function CreateWorkoutScreen() {
  const router = useRouter();

  function handleItemPressed(item: ListItemType | { title: string }) {
    router.navigate({
      pathname: "/DefineWorkoutScreen",
      params: { workout: JSON.stringify(item) },
    });
  }

  return (
    <>
      <Screen scrollable>
        <ProgressBar
          totalSteps={4}
          currentStep={1}
          currentPage="Training Model"
        />

        <Text preset="title">Choose Your Training Model</Text>
        <Text preset="subtitle">
          Select a workout frequency that fits your schedule and goals
        </Text>

        <List
          data={popularModels}
          title="Popular Models"
          onPress={handleItemPressed}
          disableScroll
        />

        <Text preset="sectionTitle">Custom</Text>
        <TouchableOpacity
          style={styles.customCard}
          onPress={() =>
            handleItemPressed({
              title: "Custom",
              description: "Create and customize your own workout model",
            })
          }
        >
          <Icon name="add-outline" size={24} style={styles.addIcon} />
          <Text preset="itemTitle">Create Custom Model</Text>
        </TouchableOpacity>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  customCard: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.octonary,
    borderRadius: radius.regular,
    padding: spacing.card,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addIcon: {
    marginRight: spacing.s,
  },
});
