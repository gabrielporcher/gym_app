import { MuscleListItemType } from "@/constants/ListModels";
import Checkbox from "expo-checkbox";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Chip } from "../Chip";
import { colors, radius, spacing } from "../styles";
import { Text } from "../Text";
import { View } from "../View";

interface SelectableListProps {
  item: MuscleListItemType;
  onPress?: (item: MuscleListItemType) => void;
  isSelected?: boolean;
}

export function SelectableListItem({
  item,
  onPress,
  isSelected = false,
}: SelectableListProps) {

  return (
    <TouchableOpacity onPress={() => onPress?.(item)} style={styles.listItem}>
      <View style={styles.itemContainer}>
        <View style={styles.icon}>
          <Text>Icon</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text preset="itemTitle">{item.title}</Text>
        <View style={styles.chipContainer}>
          {item?.synergistMuscles?.map((tag) => (
            <Chip key={tag} text={tag} />
          ))}
        </View>
      </View>
      <View
        style={[
          styles.itemContainer,
          { alignItems: "flex-end", backgroundColor: "transparent" },
        ]}
      >
        <Checkbox
          style={styles.checkBox}
          value={isSelected}
          color={isSelected ? colors.primary : undefined}
          onValueChange={() => onPress?.(item)}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    gap: spacing.m,
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.card,
    //backgroundColor: colors.quinary,
    borderRadius: radius.regular,
    borderColor: colors.quinary,
    borderWidth: 1.5,
  },
  icon: {
    backgroundColor: colors.tertiary,
    height: 45,
    width: 45,
    borderRadius: radius.regular,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
  },
  mainContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  chipContainer: {
    flexDirection: "row",
    gap: spacing.s,
    marginTop: spacing.s,
  },
  checkBox: {
    padding: 12,
    borderRadius: radius.round,
    borderColor: colors.primary,
  },
});
