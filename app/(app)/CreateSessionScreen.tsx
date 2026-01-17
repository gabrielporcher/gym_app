import { ExerciseListItem, List, Screen } from "@/components";
import { ExerciseTemplate } from "@/constants/ListModels";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";

export default function CreateSessionScreen() {
  const router = useRouter();
  const { workout } = useLocalSearchParams();
  const workoutParsed = JSON.parse(workout as string);

  function goToCreateSession(item: ExerciseTemplate) {
    router.push({
      pathname: "/(app)/SessionRegister",
      params: { exercise: JSON.stringify(item) },
    });
  }

  return (
    <Screen canGoBack>
      <List
        data={workoutParsed.exercises}
        title={`Workout ${workoutParsed?.title}`}
        renderItem={({ item }) => (
          <ExerciseListItem
            item={item as ExerciseTemplate}
            onPress={goToCreateSession}
          />
        )}
      />
    </Screen>
  );
}
