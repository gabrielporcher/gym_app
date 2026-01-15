import {
  DailyWorkoutTemplate,
  ExerciseTemplate,
  WorkoutPlan,
} from "@/constants/ListModels";
import React from "react";
import { FlatList } from "react-native";
import { Text } from "../Text";
import { ListItem } from "./ListItem";
import { SelectableListItem } from "./SelectableListItem";
import { listStyles as styles } from "./styles";

interface ListProps<T> {
  title?: string;
  onPress?: (item: T) => void;
  data: T[];
  disableScroll?: boolean;
  selectableList?: boolean;
  selectedItems?: ExerciseTemplate[];
}

export function List<T>({
  title,
  data,
  onPress,
  disableScroll = false,
  selectableList = false,
  selectedItems = [],
}: ListProps<T>) {
  function isSelected(item: ExerciseTemplate) {
    return selectedItems.some((selectedItem) => selectedItem.id === item.id);
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
              item={item as ExerciseTemplate}
              onPress={onPress as (item: ExerciseTemplate) => void}
              isSelected={isSelected(item as ExerciseTemplate)}
            />
          ) : (
            <ListItem
              item={item as WorkoutPlan | DailyWorkoutTemplate}
              onPress={
                onPress as (item: WorkoutPlan | DailyWorkoutTemplate) => void
              }
            />
          )
        }
      />
    </>
  );
}
