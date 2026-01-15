import { Button, List, Screen } from "@/components";
import { DailyWorkoutTemplate } from "@/constants/ListModels";
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

  function goToCreateSession(item: DailyWorkoutTemplate) {
    router.push({
      pathname: "/(app)/CreateSessionScreen",
      // Pass only the title as an identifier
      params: { workout: JSON.stringify(item) },
    });
  }

  return (
    <Screen>
      {workoutPlan && workoutPlan.weeklyWorkout?.length && (
        <>
          <List
            data={workoutPlan.weeklyWorkout}
            title={"Registrar treino"}
            onPress={goToCreateSession}
          />
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
