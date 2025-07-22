import { Chip, List, ProgressBar, Screen, SearchBar } from "@/components";
import { spacing } from "@/components/styles";
import {
  exercisesList,
  muscleGroups,
  MuscleListItemType
} from "@/constants/ListModels";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

export default function SelectExercises() {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string | null>(
    null
  );
  const [selectedExercises, setSelectedExercises] = useState<MuscleListItemType[]>([])

  let listData = selectedMuscleGroup
    ? exercisesList.filter((item) => item.agonistMuscle === selectedMuscleGroup)
    : exercisesList;

  const handleSelectedChip = (text: string) => {
    if (text === selectedMuscleGroup) {
      setSelectedMuscleGroup(null);
      return;
    }

    setSelectedMuscleGroup(text);
  };

  function handleItemPressed(item: any) {
    setSelectedExercises((prev) => {
      if (prev.some((ex) => ex.id === item.id)) {
        return prev.filter((ex) => ex.id !== item.id);
      }
      return [...prev, item as MuscleListItemType];
    })
  }

  console.log(selectedExercises)

  return (
    <Screen scrollable>
      <ProgressBar
        totalSteps={4}
        currentStep={3}
        currentPage="Select Exercises"
      />

      <SearchBar />

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
            active={selectedMuscleGroup === item}
          />
        )}
      />

      <List
        selectableList
        data={listData}
        onPress={handleItemPressed}
        disableScroll
        selectedItems={selectedExercises}
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
  },
});
