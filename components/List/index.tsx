import { ListItemType, MuscleListItemType } from "@/constants/ListModels";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { spacing } from "../styles";
import { Text } from "../Text";
import { ListItem } from "./ListItem";
import { SelectableListItem } from "./SelectableListItem";

interface ListProps {
  title?: string;
  onPress?: (item: ListItemType | MuscleListItemType) => void;
  data: any[];
  disableScroll?: boolean;
  selectableList?: boolean;
  selectedItems?: MuscleListItemType[];
  onSetsChange?: (item: MuscleListItemType, value: number) => void;
  onRepsChange?: (item: MuscleListItemType, value: number) => void;
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
  function isSelected(item: MuscleListItemType) {
    return selectedItems.some((selectedItem) => selectedItem.id === item.id);
  }

  function getSets(item: MuscleListItemType) {
    const selectedItem = selectedItems.find(
      (selectedItem) => selectedItem.id === item.id
    );
    return selectedItem?.series || 1;
  }

  function getReps(item: MuscleListItemType) {
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
        renderItem={({ item }) =>
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

const styles = StyleSheet.create({
  listContainer: {
    gap: spacing.m,
  },
});
