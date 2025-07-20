import { Chip, ProgressBar, Screen, SearchBar } from "@/components";
import { muscleGroups } from "@/constants/ListModels";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

export default function SelectExercises() {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string | null>(
    null
  );

  const handleSelectedChip = (text: string) => {
    if (text === selectedMuscleGroup) {
      setSelectedMuscleGroup(null);
      return;
    }

    setSelectedMuscleGroup(text);
  };

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
  },
});
