import type { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Chip } from "./Chip";
import { Icon } from "./Icon";
import { colors, radius, spacing } from "./styles";
import { Text } from "./Text";
import { View } from "./View";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

export type ListItemType = {
  icon: IoniconName;
  title: string;
  description: string;
  tags: string[];
};

interface ListItemProps {
  item: ListItemType;
  onPress?: (item: ListItemType) => void;
}

function ListItem({ item, onPress }: ListItemProps) {
  return (
    <TouchableOpacity onPress={() => onPress?.(item)}>
      <View key={item.title} style={styles.listItem}>
        <Icon name={item.icon} style={styles.icon} />
        <View style={styles.itemTextContainer}>
          <Text preset="itemTitle">{item.title}</Text>
          <Text preset="itemDescription">{item.description}</Text>
          <View style={styles.chipContainer}>
            {item.tags.map((tag) => (
              <Chip key={tag} text={tag} />
            ))}
          </View>
        </View>
        <Icon name="chevron-forward-outline" color={colors.nonary} />
      </View>
    </TouchableOpacity>
  );
}

interface ListProps {
  title?: string;
  onPress?: (item: ListItemType) => void;
  data: ListItemType[];
  disableScroll?: boolean;
}

export function List({
  title,
  data,
  onPress,
  disableScroll = false,
}: ListProps) {
  return (
    <>
      {title && <Text preset="sectionTitle">{title}</Text>}
      <FlatList
        scrollEnabled={!disableScroll} //REVISAR!
        contentContainerStyle={styles.listContainer}
        data={data}
        renderItem={({ item }) => <ListItem item={item} onPress={onPress} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    gap: spacing.m,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.m,
    //backgroundColor: colors.quinary,
    borderRadius: radius.regular,
    borderColor: colors.quinary,
    borderWidth: 1.5,
  },
  icon: {
    marginRight: spacing.m,
  },
  itemTextContainer: {
    flex: 1,
  },
  chipContainer: {
    flexDirection: "row",
    gap: spacing.s,
    marginTop: spacing.s,
  },
});
