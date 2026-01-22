import { Button, ExerciseListItem, List, Screen } from "@/components";
import { ExerciseTemplate } from "@/constants/ListModels";
import { useWorkoutStore } from "@/contexts/store";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";

export default function CreateSessionScreen() {
  const router = useRouter();
  const { workout } = useLocalSearchParams();
  const workoutParsed = JSON.parse(workout as string);
  const { activeSession, startSession } = useWorkoutStore();

  useEffect(() => {
    if (!activeSession || activeSession.title !== workoutParsed.title) {
      startSession(workoutParsed);
    }
  }, [workoutParsed, activeSession, startSession]);

  function goToCreateSession(item: ExerciseTemplate) {
    router.push({
      pathname: "/(app)/SessionRegister",
      params: { exerciseId: item.id },
    });
  }

  const exercisesToDisplay =
    activeSession?.exercises || workoutParsed.exercises;

  return (
    <Screen canGoBack>
      <List
        data={exercisesToDisplay}
        title={`Workout ${workoutParsed?.title}`}
        renderItem={({ item }) => (
          <ExerciseListItem
            item={item as ExerciseTemplate}
            onPress={goToCreateSession}
            done={(item as ExerciseTemplate).isCompleted}
          />
        )}
        ListFooterComponent={
          <Button
            title="Finalizar treino"
            onPress={() => console.log(activeSession)}
          />
        }
      />
    </Screen>
  );
}
