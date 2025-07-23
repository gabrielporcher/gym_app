import {
  Button,
  Chip,
  List,
  ProgressBar,
  Screen,
  SearchBar,
  Text,
} from "@/components";
import { spacing } from "@/components/styles";
import {
  exercisesList,
  muscleGroups,
  MuscleListItemType,
} from "@/constants/ListModels";
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function SelectExercises() {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string | null>(
    null
  );
  const [selectedExercises, setSelectedExercises] = useState<
    MuscleListItemType[]
  >([]);
  const [searchText, setSearchText] = useState<string>("");

  let listData = exercisesList.filter((item) => {
    const matchesMuscle = selectedMuscleGroup ? item.agonistMuscle === selectedMuscleGroup : true;
    const matchesSearch = item.title.toLowerCase().includes(searchText.toLowerCase());
    return matchesMuscle && matchesSearch;
  });

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
      return [...prev, { ...item, series: 3, reps: 8 }];
    });
  }

  function onChangeText(text: string) {
    setSearchText(text);
  }

  function handleSetsChange(item: MuscleListItemType, value: number) {
    setSelectedExercises((prev) =>
      prev.map((ex) => (ex.id === item.id ? { ...ex, series: value } : ex))
    );
  }

  function handleRepsChange(item: MuscleListItemType, value: number) {
    setSelectedExercises((prev) =>
      prev.map((ex) => (ex.id === item.id ? { ...ex, reps: value } : ex))
    );
  }

  return (
    <Screen>
      <View style={{ height: "20%" }}>
        <ProgressBar
          totalSteps={4}
          currentStep={3}
          currentPage="Select Exercises"
        />

        <SearchBar onChangeText={onChangeText} />

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

      <View style={{ height: "72.5%" }}>
        <Text preset="itemTitle">{`${selectedExercises.length} exercises selected`}</Text>
        <List
          selectableList
          data={listData}
          onPress={handleItemPressed}
          selectedItems={selectedExercises}
          onSetsChange={handleSetsChange}
          onRepsChange={handleRepsChange}
        />
      </View>
      <Button title={"Save workout"} onPress={() => {}} style={styles.button} />
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
    marginTop: 10
  }
});
