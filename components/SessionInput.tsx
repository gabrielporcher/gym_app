import { ExerciseTemplate } from "@/constants/ListModels";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { IntegerInput } from "./IntegerInput";
import { listStyles } from "./List/styles";
import { colors, miscellaneous, radius } from "./styles";
import { Text } from "./Text";
import { View } from "./View";

interface Props {
  exercise: ExerciseTemplate;
}

export function SessionInput({ exercise }: Props) {
  const seriesArray = Array.from(
    { length: exercise.series as number },
    (_, index) => index,
  );
  return (
    <FlatList
      data={seriesArray}
      keyExtractor={(item) => item.toString()}
      contentContainerStyle={listStyles.listContainer}
      style={{ paddingVertical: 10 }}
      renderItem={({ item, index }) => (
        <View style={[miscellaneous.shadowWrapper, styles.container]}>
          <Text preset="integerInput">{index + 1}</Text>
          <IntegerInput
            label="Kgs"
            iconName="weight"
            library="MaterialCommunityIcons"
            value={10}
            onChange={(value) => (exercise.series = value)}
          />
          <IntegerInput
            label="Reps"
            iconName="repeat-outline"
            value={exercise.reps || 0}
            onChange={(value) => (exercise.reps = value)}
          />
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
    backgroundColor: colors.bgWhiteTop,
    borderRadius: radius.round,
  },
});
