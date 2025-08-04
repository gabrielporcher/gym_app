import { DailyWorkoutTemplate, ExerciseTemplate, WorkoutPlan } from "@/constants/ListModels";
import React from "react";
import { FlatList } from "react-native";
import { Text } from "../Text";
import { ListItem } from "./ListItem";
import { SelectableListItem } from "./SelectableListItem";
import { listStyles as styles } from "./styles";

interface ListProps {
  title?: string;
  onPress?: (item: WorkoutPlan | ExerciseTemplate | DailyWorkoutTemplate) => void;
  data: any[];
  disableScroll?: boolean;
  selectableList?: boolean;
  selectedItems?: ExerciseTemplate[];
  onSetsChange?: (item: ExerciseTemplate, value: number) => void;
  onRepsChange?: (item: ExerciseTemplate, value: number) => void;
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
  function isSelected(item: ExerciseTemplate) {
    return selectedItems.some((selectedItem) => selectedItem.id === item.id);
  }

  function getSets(item: ExerciseTemplate) {
    const selectedItem = selectedItems.find(
      (selectedItem) => selectedItem.id === item.id
    );
    return selectedItem?.series || 1;
  }

  function getReps(item: ExerciseTemplate) {
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