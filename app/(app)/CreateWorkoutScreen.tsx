import { Icon, List, ListItem, ProgressBar, Screen, Text } from "@/components";
import { colors, radius, spacing } from "@/components/styles";
import type { WorkoutPlan } from "@/constants/ListModels";
import { popularModels } from "@/constants/ListModels";
import { useWorkoutStore } from "@/contexts/store";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function CreateWorkoutScreen() {
  const router = useRouter();
  const { initWorkoutPlanBuilder } = useWorkoutStore();

  function handleItemPressed(item: WorkoutPlan) {
    initWorkoutPlanBuilder(item);
    router.push("/DefineWorkoutScreen");
  }

  return (
    <>
      <Screen scrollable canGoBack>
        <ProgressBar
          totalSteps={4}
          currentStep={1}
          currentPage="Training Model"
        />

        <Text preset="title">Choose Your Training Model</Text>
        <Text preset="subtitle">
          Select a workout frequency that-fits your schedule and goals
        </Text>

        <List
          data={popularModels}
          title="Popular Models"
          renderItem={({ item }) => (
            <ListItem item={item} onPress={handleItemPressed} />
          )}
          disableScroll
        />

        <Text preset="sectionTitle">Custom</Text>
        <TouchableOpacity
          style={styles.customCard}
          onPress={() =>
            handleItemPressed({
              icon: "accessibility",
              title: "Custom",
              description: "Create and customize your own workout model",
              tags: ["A", "B"],
              weeklyWorkout: [], // Start with an empty array for custom
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
    borderColor: colors.dark,
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
