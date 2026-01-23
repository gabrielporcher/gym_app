import { ExerciseSet, ExerciseTemplate } from "@/constants/ListModels";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "./Icon";
import { IntegerInput } from "./IntegerInput";
import { listStyles } from "./List/styles";
import { colors, miscellaneous, radius } from "./styles";
import { Text } from "./Text";
import { View } from "./View";

interface Props {
  exercise: ExerciseTemplate;
  onSetChange: (index: number, set: ExerciseSet) => void;
}

export function SessionInput({ exercise, onSetChange }: Props) {
  const setsCount = Math.max(
    exercise.series || 0,
    (exercise.setsRecorded || []).length,
  );

  const seriesArray = Array.from({ length: setsCount }, (_, index) => index);

  const handleWeightChange = (index: number, value: number) => {
    const currentSet = exercise.setsRecorded?.[index] || {
      reps: "",
      weight: "",
      completed: false,
    };
    onSetChange(index, { ...currentSet, weight: value.toString() });
  };

  const handleRepsChange = (index: number, value: number) => {
    const currentSet = exercise.setsRecorded?.[index] || {
      reps: "",
      weight: "",
      completed: false,
    };
    onSetChange(index, { ...currentSet, reps: value.toString() });
  };

  const handleCompleteSet = (index: number) => {
    const currentSet = exercise.setsRecorded?.[index] || {
      reps: "",
      weight: "",
      completed: false,
    };

    // Determine weight to save: use current input or displayed fallback
    const weightToSave =
      currentSet.weight !== ""
        ? currentSet.weight
        : Number(exercise.setsRecorded?.[index]?.weight || 0).toString();

    // Determine reps to save: use current input or displayed fallback
    const repsToSave =
      currentSet.reps !== ""
        ? currentSet.reps
        : (
            Number(exercise.setsRecorded?.[index]?.reps) ||
            Number(exercise.reps) ||
            0
          ).toString();

    onSetChange(index, {
      ...currentSet,
      weight: weightToSave,
      reps: repsToSave,
      completed: !currentSet.completed,
    });
  };

  return (
    <FlatList
      data={seriesArray}
      keyExtractor={(item) => item.toString()}
      contentContainerStyle={[listStyles.listContainer, { marginTop: 70 }]}
      style={{ paddingVertical: 10 }}
      renderItem={({ item, index }) => (
        <View
          style={[
            miscellaneous.shadowWrapper,
            styles.container,
            {
              backgroundColor: exercise.setsRecorded?.[index]?.completed
                ? colors.green
                : colors.bgWhiteTop,
            },
          ]}
        >
          <Text preset="integerInput">{index + 1}</Text>
          <IntegerInput
            label="Kgs"
            iconName="weight"
            library="MaterialCommunityIcons"
            value={Number(exercise.setsRecorded?.[index]?.weight || 0)}
            onChange={(value) => handleWeightChange(index, value)}
          />
          <IntegerInput
            label="Reps"
            iconName="repeat-outline"
            value={
              Number(exercise.setsRecorded?.[index]?.reps) ||
              Number(exercise.reps) ||
              0
            }
            onChange={(value) => handleRepsChange(index, value)}
          />
          <TouchableOpacity onPress={() => handleCompleteSet(index)}>
            <Icon
              name={
                exercise.setsRecorded?.[index]?.completed
                  ? "checkmark-circle"
                  : "ellipse-outline"
              }
              color={
                exercise.setsRecorded?.[index]?.completed
                  ? "green"
                  : colors.textDarkSecondary
              }
              size={30}
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: radius.round,
  },
});
