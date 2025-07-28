import {
  Button,
  Card,
  Icon,
  List,
  ProgressBar,
  Screen,
  Text,
  View,
} from "@/components";
import { colors, spacing } from "@/components/styles";
import type { WorkoutModel } from "@/constants/ListModels";
import { useWorkoutStore } from "@/contexts/store";
import { useToast } from "@/contexts/ToastContext";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

export default function DefineWorkoutScreen() {
  const router = useRouter();
  const { toast ,workoutTitle } = useLocalSearchParams();
  const { workout } = useWorkoutStore();
  const models = workout?.trainingSession ?? [];
  const { showToast } = useToast();

  useEffect(() => {
    confirmWorkoutCreated()
  }, [toast])

  function confirmWorkoutCreated() {
    if(toast == 'show' && workoutTitle) {
      showToast(`Workout ${workoutTitle} successfully registered`)
    }
  }

  function handleItemPressed(item: WorkoutModel | { title: string }) {
    router.push({
      pathname: "/SelectExercises",
      params: { workoutTitle: JSON.stringify(item.title) },
    });
  }

  function saveWorkout() {
    //setToastVisibility(!toastVisiblity);
    showToast('Teste porreta!')
  }

  return (
    <Screen scrollable>
      <ProgressBar
        totalSteps={4}
        currentStep={2}
        currentPage="Define workouts"
      />

      <Card style={styles.card}>
        <View style={styles.section}>
          <Text preset="buttonSecondary">{workout?.title}</Text>
          <Text preset="default">{workout?.description}</Text>
        </View>
        <View style={[styles.section, styles.icon]}>
          <Icon name="checkmark-circle" size={28} />
        </View>
      </Card>

      <Text preset="title">Define your workouts</Text>
      <Text preset="subtitle">
        Assign muscle groups to each workout day.{"\n"}Tap to customize
        exercises
      </Text>

      {workout && (
        <List
          data={models}
          title="Popular Models"
          onPress={handleItemPressed}
          disableScroll
        />
      )}
      <Button title="Continue" onPress={saveWorkout} style={styles.button} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 24,
    padding: spacing.card,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.quinary,
  },
  section: {
    flex: 1,
    backgroundColor: colors.quinary,
  },
  icon: {
    alignItems: "flex-end",
  },
  button: {
    marginTop: spacing.m,
  },
});
