import { IntegerInput } from "@/components/IntegerInput";
import { colors, spacing } from "@/components/styles";
import { Text } from "@/components/Text";
import { ExerciseTemplate } from "@/constants/ListModels";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Modal } from "./Modal";

interface ConfirmSelectionModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  exercises: ExerciseTemplate[];
  onExerciseUpdate: (updatedExercise: ExerciseTemplate) => void;
}

export const ConfirmSelectionModal: React.FC<ConfirmSelectionModalProps> = ({
  visible,
  onConfirm,
  onCancel,
  exercises,
  onExerciseUpdate,
}) => {
  return (
    <Modal
      visible={visible}
      title="Confirm Workout"
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.modalItem}>
            <Text preset="itemTitle">{item.title}</Text>
            <View style={styles.inputsContainer}>
              <IntegerInput
                label="Sets"
                iconName="layers-outline"
                value={item.series || 0}
                onChange={(value) =>
                  onExerciseUpdate({ ...item, series: value })
                }
              />
              <IntegerInput
                label="Reps"
                iconName="repeat-outline"
                value={item.reps || 0}
                onChange={(value) => onExerciseUpdate({ ...item, reps: value })}
              />
            </View>
          </View>
        )}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalItem: {
    paddingVertical: spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: colors.bgWhiteBottom,
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.m,
  },
});
