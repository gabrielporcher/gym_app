import { MuscleWorkoutModel, PredefinedModelType, WorkoutModel } from "@/constants/ListModels";
import React from "react";
import { FlatList } from "react-native";
import { Text } from "../Text";
import { ListItem } from "./ListItem";
import { SelectableListItem } from "./SelectableListItem";
import { listStyles as styles } from "./styles";

interface ListProps {
  title?: string;
  onPress?: (item: WorkoutModel | MuscleWorkoutModel | PredefinedModelType) => void;
  data: any[];
  disableScroll?: boolean;
  selectableList?: boolean;
  selectedItems?: MuscleWorkoutModel[];
  onSetsChange?: (item: MuscleWorkoutModel, value: number) => void;
  onRepsChange?: (item: MuscleWorkoutModel, value: number) => void;
}

export function List({
  title,
  data,
  onPress,
  disableScroll = false,
  selectableList = false,
  selectedItems = [],
  onSetsChange,
  onRepsChange,
}: ListProps) {
  function isSelected(item: MuscleWorkoutModel) {
    return selectedItems.some((selectedItem) => selectedItem.id === item.id);
  }

  function getSets(item: MuscleWorkoutModel) {
    const selectedItem = selectedItems.find(
      (selectedItem) => selectedItem.id === item.id
    );
    return selectedItem?.series || 1;
  }

  function getReps(item: MuscleWorkoutModel) {
    const selectedItem = selectedItems.find(
      (selectedItem) => selectedItem.id === item.id
    );
    return selectedItem?.reps || 1;
  }

  return (
    <>
      {title && <Text preset="sectionTitle">{title}</Text>}
      <FlatList
        scrollEnabled={!disableScroll} //REVISAR!
        contentContainerStyle={styles.listContainer}
        data={data}
        renderItem={({ item, index }) =>
          selectableList ? (
            <SelectableListItem
              item={item}
              onPress={onPress}
              isSelected={isSelected(item)}
              sets={getSets(item)}
              reps={getReps(item)}
              onSetsChange={(value) => onSetsChange?.(item, value)}
              onRepsChange={(value) => onRepsChange?.(item, value)}
            />
          ) : (
            <ListItem item={item} onPress={onPress} />
          )
        }
      />
    </>
  );
}