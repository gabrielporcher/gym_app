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
}

export function List({
  title,
  data,
  onPress,
  disableScroll = false,
  selectableList = false,
  selectedItems = [],
}: ListProps) {
    function isSelected(item: MuscleListItemType) {
    return selectedItems.some((selectedItem) => selectedItem.id === item.id);
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
