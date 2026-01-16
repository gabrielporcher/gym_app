import React from "react";
import { FlatList, FlatListProps, ListRenderItem } from "react-native";
import { Text } from "../Text";
import { listStyles as styles } from "./styles";

export * from "./ListItem";
export * from "./SelectableListItem";

interface ListProps<T> extends Omit<FlatListProps<T>, "renderItem"> {
  title?: string;
  data: T[];
  renderItem: ListRenderItem<T>;
  disableScroll?: boolean;
}

export function List<T>({
  title,
  data,
  renderItem,
  disableScroll = false,
  ...flatListProps
}: ListProps<T>) {
  return (
    <>
      {title && <Text preset="sectionTitle">{title}</Text>}
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={data}
        renderItem={renderItem}
        scrollEnabled={!disableScroll}
        {...flatListProps}
      />
    </>
  );
}
