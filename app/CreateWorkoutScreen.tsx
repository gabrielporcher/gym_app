import {
  Icon,
  List,
  ListItemType,
  ProgressBar,
  Screen,
  Text,
} from "@/components";
import { colors, radius, spacing } from "@/components/styles";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const popularModels: ListItemType[] = [
  {
    icon: "barbell-outline",
    title: "ABC 2x",
    description: "3 different workouts, 2x per week",
    tags: ["6 days/week", "Intermediate"],
    predefinedModel: [
      { icon: "A", title: "A 1" },
      { icon: "B", title: "B 1" },
      { icon: "C", title: "C 1" },
      { icon: "A", title: "A 2" },
      { icon: "B", title: "B 2" },
      { icon: "C", title: "C 2" },
    ],
  },
  {
    icon: "calendar-outline",
    title: "ABCDE",
    description: "5 different workouts, each muscle group",
    tags: ["5 days/week", "Advanced"],
    predefinedModel: [
      { icon: "A", title: "A" },
      { icon: "B", title: "B" },
      { icon: "C", title: "C" },
      { icon: "D", title: "D" },
      { icon: "E", title: "E" },
    ],
  },
  {
    icon: "swap-vertical-outline",
    title: "Push/Pull",
    description: "Alternating push and pull movements",
    tags: ["4-6 days/week", "Intermediate"],
    predefinedModel: [
      { icon: "A", title: "PUSH 1" },
      { icon: "B", title: "PULL 1" },
      { icon: "A", title: "PUSH 2" },
      { icon: "B", title: "PULL 2" },
    ],
  },
  {
    icon: "body-outline",
    title: "Full Body",
    description: "Complete body workout each session",
    tags: ["3 days/week", "Beginner"],
    predefinedModel: [
      { icon: "A", title: "A" },
      { icon: "B", title: "B" },
      { icon: "C", title: "C" },
    ],
  },
  {
    icon: "swap-vertical-outline",
    title: "Upper/Lower",
    description: "Complete segment workout each session",
    tags: ["4 days/week", "Beginner"],
    predefinedModel: [
      { icon: "A", title: "UPPER 1" },
      { icon: "B", title: "LOWER 1" },
      { icon: "A", title: "UPPER 2" },
      { icon: "B", title: "LOWER 2" },
    ],
  },
];

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
          totalSteps={3}
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
