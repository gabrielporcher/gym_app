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

interface ListProps {
  title?: string;
  onPress?: (
    item: WorkoutPlan | ExerciseTemplate | DailyWorkoutTemplate
  ) => void;
  data: any[];
  disableScroll?: boolean;
  selectableList?: boolean;
  selectedItems?: ExerciseTemplate[];
}

export function List({
  title,
  data,
  onPress,
  disableScroll = false,
  selectableList = false,
  selectedItems = [],
}: ListProps) {
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
              item={item}
              onPress={onPress}
              isSelected={isSelected(item)}
            />
          ) : (
            <ListItem item={item} onPress={onPress} />
          )
        }
      />
    </>
  );
}
