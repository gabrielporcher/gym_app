import {
  Button,
  Chip,
  List,
  ProgressBar,
  Screen,
  Text,
  TextInput,
} from "@/components";
import { spacing } from "@/components/styles";
import {
  DailyWorkoutTemplate,
  exercisesList,
  ExerciseTemplate,
  muscleGroups,
} from "@/constants/ListModels";
import { useWorkoutStore } from "@/contexts/store";
import { useToast } from "@/contexts/ToastContext";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function SelectExercises() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { workoutPlanBuilder, updateWorkoutPlanBuilder } = useWorkoutStore();
  const { showToast } = useToast();

  const weeklyWorkout = useMemo(() => 
    workoutPlanBuilder?.weeklyWorkout?.find(ww => ww.title === params.weeklyWorkoutTitle)
  , [workoutPlanBuilder, params.weeklyWorkoutTitle]);

  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string | null>(
    null
  );
  const [selectedExercises, setSelectedExercises] = useState<
    ExerciseTemplate[]
  >(weeklyWorkout?.exercises || []);
  const [searchText, setSearchText] = useState<string>("");

  const listData = useMemo(() => {
    return exercisesList.filter((item) => {
      const matchesMuscle = selectedMuscleGroup
        ? item.agonistMuscle === selectedMuscleGroup
        : true;
      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return matchesMuscle && matchesSearch;
    });
  }, [selectedMuscleGroup, searchText]);

  const handleSelectedChip = (text: string) => {
    if (text === selectedMuscleGroup) {
      setSelectedMuscleGroup(null);
      return;
    }
    setSelectedMuscleGroup(text);
  };

  function handleItemPressed(item: ExerciseTemplate) {
    setSelectedExercises((prev) => {
      if (prev.some((ex) => ex.id === item.id)) {
        return prev.filter((ex) => ex.id !== item.id);
      }
      return [...prev, { ...item, series: 3, reps: 8 }];
    });
  }

  function onChangeText(text: string) {
    setSearchText(text);
  }

  function handleSetsChange(item: ExerciseTemplate, value: number) {
    setSelectedExercises((prev) =>
      prev.map((ex) => (ex.id === item.id ? { ...ex, series: value } : ex))
    );
  }

  function handleRepsChange(item: ExerciseTemplate, value: number) {
    setSelectedExercises((prev) =>
      prev.map((ex) => (ex.id === item.id ? { ...ex, reps: value } : ex))
    );
  }

  const memoizedOnSetsChange = useCallback(
    (item: ExerciseTemplate, value: number) => {
      handleSetsChange(item, value);
    },
    []
  );

  const memoizedOnRepsChange = useCallback(
    (item: ExerciseTemplate, value: number) => {
      handleRepsChange(item, value);
    },
    []
  );

  function saveAndReturn() {
    if (!weeklyWorkout) return;

    const newTags = [
      ...new Set(selectedExercises.map((item) => item.agonistMuscle)),
    ];

    const updatedWeeklyWorkout: DailyWorkoutTemplate = {
      ...weeklyWorkout,
      description: `${selectedExercises.length} exercises selected`,
      tags: newTags,
      registered: true,
      exercises: selectedExercises,
    };

    updateWorkoutPlanBuilder(updatedWeeklyWorkout);
    router.back();
    showToast('Workout successfully registered')
  }

  if (!weeklyWorkout) {
    // Handle case where workout is not found
    return <Screen><Text>Workout not found.</Text></Screen>;
  }

  return (
    <Screen canGoBack>
      <View style={{ height: "19%" }}>
        <ProgressBar
          totalSteps={4}
          currentStep={3}
          currentPage="Select Exercises"
        />

        <TextInput placeholder="Search specific exercise" onChangeText={onChangeText} />

        <FlatList
          data={muscleGroups}
          horizontal
          contentContainerStyle={styles.listContainer}
          style={styles.list}
          renderItem={({ item }) => (
            <Chip
              text={item}
              style={styles.chip}
              pressable
              onPress={() => handleSelectedChip(item)}
              preset={selectedMuscleGroup === item ? "selected" : "default"}
            />
          )}
        />
      </View>

      <View style={{ height: "70%" }}>
        <Text preset="itemTitle">{`${selectedExercises.length} exercises selected`}</Text>
        <List
          selectableList
          data={listData}
          onPress={handleItemPressed}
          selectedItems={selectedExercises}
          onSetsChange={memoizedOnSetsChange}
          onRepsChange={memoizedOnRepsChange}
        />
      </View>
      <Button
        title={"Save workout"}
        onPress={saveAndReturn}
        style={styles.button}
        disabled={!selectedExercises.length}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  listContainer: {
    gap: 10,
    paddingBottom: spacing.m,
  },
  list: {
    marginBottom: spacing.s,
    flexGrow: 0,
  },
  button: {
    marginTop: 10,
  },
});

