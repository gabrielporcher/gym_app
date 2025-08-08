import { Button, Screen, Text } from "@/components";
import { ListItem } from "@/components/List/ListItem";
import { useUserStore, useWorkoutStore } from "@/contexts/store";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";

export default function MainScreen() {
  const { logoutUser, user } = useUserStore();
  const { workoutPlan, workoutPlanBuilder, loadWorkoutPlan } =
    useWorkoutStore();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      loadWorkoutPlan(user.uid);
    }
  }, []);

  function goToCreateWorkout() {
    router.push("/(app)/CreateWorkoutScreen");
  }

  console.log(workoutPlan?.weeklyWorkout[0])

  return (
    <Screen>
      {workoutPlan && (
        <>
        <Text preset="title">Treino do dia: </Text>
        <ListItem item={workoutPlan.weeklyWorkout[0]} />
        </>
      )}

      <Button
        title="Create workout"
        onPress={goToCreateWorkout}
        style={{ marginVertical: 10 }}
      />
    </Screen>
  );
}
