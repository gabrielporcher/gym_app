import {
  Button,
  CircularProgress,
  Screen,
  SessionInput,
  Text,
} from "@/components";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";

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

  const [restTimer, setRestTimer] = React.useState(0);
  const [isResting, setIsResting] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);

  useEffect(() => {
    let interval: any;
    if (isResting && !isPaused && restTimer > 0) {
      interval = setInterval(() => {
        setRestTimer((prev) => prev - 1);
      }, 1000);
    } else if (restTimer === 0 && isResting) {
      setIsResting(false);
      setIsPaused(false);
    }
    return () => clearInterval(interval);
  }, [isResting, isPaused, restTimer]);

  const startRestTimer = () => {
    setRestTimer(120);
    setIsResting(true);
    setIsPaused(false);
  };

  const handleSetChange = (index: number, set: ExerciseSet) => {
    const wasCompleted = exercise.setsRecorded?.[index]?.completed;
    updateExerciseSet(exercise.id, index, set);

    const totalRecorded = Math.max(
      exercise.series || 0,
      (exercise.setsRecorded || []).length,
    );
    const currentlyCompleted =
      exercise.setsRecorded?.filter((s) => s.completed).length || 0;
    if (set.completed && !wasCompleted) {
      if (currentlyCompleted + 1 < totalRecorded) {
        startRestTimer();
      }
    }
  };

  const handleAddSet = () => {
    addExerciseSet(exercise.id);
  };

  const handleComplete = () => {
    completeExercise(exercise.id);
    router.back();
  };

  const handleCompleteNextSet = () => {
    const totalRecorded = Math.max(
      exercise.series || 0,
      (exercise.setsRecorded || []).length,
    );
    let targetIndex = -1;

    for (let i = 0; i < totalRecorded; i++) {
      if (!exercise.setsRecorded?.[i]?.completed) {
        targetIndex = i;
        break;
      }
    }

    if (targetIndex !== -1) {
      const currentSet = exercise.setsRecorded?.[targetIndex] || {
        reps: "",
        weight: "",
        completed: false,
      };

      const weightToSave =
        currentSet.weight !== ""
          ? currentSet.weight
          : Number(
              exercise.setsRecorded?.[targetIndex]?.weight || 0,
            ).toString();

      const repsToSave =
        currentSet.reps !== ""
          ? currentSet.reps
          : (
              Number(exercise.setsRecorded?.[targetIndex]?.reps) ||
              Number(exercise.reps) ||
              0
            ).toString();

      handleSetChange(targetIndex, {
        ...currentSet,
        weight: weightToSave,
        reps: repsToSave,
        completed: true,
      });
    }
  };

  const handleSkipRest = () => {
    setRestTimer(0);
    setIsResting(false);
    setIsPaused(false);
  };

  const isFinished = completedSets === totalSets;

  return (
    <Screen canGoBack>
      <Text preset="title">{exercise.title}</Text>
      <CircularProgress
        totalSeries={totalSets}
        currentSerie={completedSets}
        isResting={isResting}
        restTimer={restTimer}
        isPaused={isPaused}
        isFinished={isFinished}
        onPause={() => setIsPaused(!isPaused)}
        onSkipRest={handleSkipRest}
        onCompleteSet={handleCompleteNextSet}
      />
      <SessionInput exercise={exercise} onSetChange={handleSetChange} />

      <Button title="Add série" preset="secondary" onPress={handleAddSet} />
      <Button
        title="Exercicio concluido"
        preset="primary"
        onPress={handleComplete}
      />
    </Screen>
  );
}
