import {
  Button,
  CircularProgress,
  Screen,
  SessionInput,
  Text,
  View,
} from "@/components";
import { useLocalSearchParams } from "expo-router";

import { ExerciseSet } from "@/constants/ListModels";
import { useWorkoutStore } from "@/contexts/store";
import { useRouter } from "expo-router";

export default function SessionRegister() {
  const router = useRouter();
  const { exerciseId } = useLocalSearchParams();
  const { activeSession, updateExerciseSet, addExerciseSet, completeExercise } =
    useWorkoutStore();

  const exercise = activeSession?.exercises?.find(
    (e) => e.id === Number(exerciseId),
  );

  if (!exercise) {
    return (
      <Screen canGoBack>
        <Text>Exercise not found</Text>
      </Screen>
    );
  }

  const completedSets =
    exercise.setsRecorded?.filter((s) => s.completed).length || 0;
  const totalSets = Math.max(
    exercise.series || 0,
    (exercise.setsRecorded || []).length,
  );

  const handleSetChange = (index: number, set: ExerciseSet) => {
    updateExerciseSet(exercise.id, index, set);
  };

  const handleAddSet = () => {
    addExerciseSet(exercise.id);
  };

  const handleComplete = () => {
    completeExercise(exercise.id);
    router.back();
  };

  return (
    <Screen canGoBack>
      <Text preset="title">{exercise.title}</Text>
      <CircularProgress totalSeries={totalSets} currentSerie={completedSets} />
      <SessionInput exercise={exercise} onSetChange={handleSetChange} />
      <View
        style={{
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <Button title="Add série" preset="secondary" onPress={handleAddSet} />
        <Button
          title="Exercicio concluido"
          preset="primary"
          onPress={handleComplete}
        />
      </View>
    </Screen>
  );
}
