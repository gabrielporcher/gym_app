import {
  Button,
  Card,
  Icon,
  ProgressBar,
  Screen,
  Text,
  View,
} from "@/components";
import { ListItem } from "@/components/List/ListItem";
import { listStyles, spacing } from "@/components/styles";
import type { DailyWorkoutTemplate } from "@/constants/ListModels";
import { useUserStore, useWorkoutStore } from "@/contexts/store";
import { useToast } from "@/contexts/ToastContext";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

export default function DefineWorkoutScreen() {
  const router = useRouter();
  const { user } = useUserStore();
  const { workoutPlanBuilder, saveWorkoutPlan } = useWorkoutStore();
  const { showToast } = useToast();

  function handleItemPressed(item: DailyWorkoutTemplate) {
    router.push({
      pathname: "/SelectExercises",
      // Pass only the title as an identifier
      params: { weeklyWorkoutTitle: item.title },
    });
  }

  async function handleSave() {
    if (user) {
      try {
        await saveWorkoutPlan(user.uid);
        router.replace("/(app)/(tabs)/MainScreen");
        showToast("Workout plan saved successfully!");
      } catch (error) {
        console.error("Failed to save workout: ", error);
        showToast("Error saving workout. Please try again.");
      }
    }
  }

  const models = workoutPlanBuilder?.weeklyWorkout ?? [];

  return (
    <Screen scrollable canGoBack>
      <ProgressBar
        totalSteps={4}
        currentStep={2}
        currentPage="Define workouts"
      />

      {workoutPlanBuilder && (
        <Card style={styles.card}>
          <View style={styles.section}>
            <Text preset="buttonSecondary">{workoutPlanBuilder.title}</Text>
            <Text preset="default">{workoutPlanBuilder.description}</Text>
          </View>
          <View style={[styles.section, styles.icon]}>
            <Icon name="checkmark-circle" size={28} />
          </View>
        </Card>
      )}

      <Text preset="title">Define your workouts</Text>
      <Text preset="subtitle">
        Assign muscle groups to each workout day.{"\n"}Tap to customize
        exercises
      </Text>

      <FlatList
        data={models}
        contentContainerStyle={listStyles.listContainer}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <ListItem item={item} onPress={handleItemPressed} />
        )}
      />

      <Button
        title="Save Plan"
        onPress={handleSave}
        style={styles.button}
        disabled={!models.every((model) => model.registered)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flex: 1,
  },
  icon: {
    alignItems: "flex-end",
  },
  button: {
    marginTop: spacing.m,
  },
});
