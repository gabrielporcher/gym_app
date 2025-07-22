import { MuscleListItemType } from "@/constants/ListModels";
import Checkbox from "expo-checkbox";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Chip } from "../Chip";
import { Icon } from "../Icon";
import { IntegerInput } from "../IntegerInput";
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
    <TouchableOpacity
      onPress={() => onPress?.(item)}
      style={isSelected ? styles.selectedContainer : styles.unselectedContainer}
    >
      <View style={styles.listItem}>
        <View style={styles.firstContainer}>
          <Icon name={item.icon} size={30} style={styles.icon} />
        </View>
        <View style={styles.mainContainer}>
          <Text preset="itemTitleThin" style={styles.itemTitle}>
            {item.title}
          </Text>
          <View style={styles.chipContainer}>
            {item?.muscleIntensity.map((item) => (
              <Chip
                key={item.muscle}
                text={item.muscle}
                preset={item.intensity}
              />
            ))}
          </View>
        </View>
        <View style={styles.lastContainer}>
          <Checkbox
            style={styles.checkBox}
            value={isSelected}
            color={isSelected ? colors.primary : undefined}
            onValueChange={() => onPress?.(item)}
          />
        </View>
      </View>
      {isSelected && (
        <View style={styles.expandedContainer}>
          <View style={styles.expandedSection}>
            <Text preset="itemTitle">Sets:</Text>
            <IntegerInput value={1} onChange={() => {}} />
          </View>
          <View style={styles.expandedSection}>
            <Text preset="itemTitle">Reps:</Text>
            <IntegerInput value={1} onChange={() => {}} />
          </View>
        </View>
      )}
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
    backgroundColor: "transparent",
  },
  unselectedContainer: {
    borderRadius: radius.regular,
    borderColor: colors.quinary,
    borderWidth: 1.5,
  },
  selectedContainer: {
    backgroundColor: colors.quinary,
    borderRadius: radius.regular,
    //borderColor: colors.primary,
    //borderWidth: 0.25,
  },
  icon: {
    marginLeft: spacing.xs,
  },
  firstContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  mainContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "transparent",
  },
  lastContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "transparent",
  },
  itemTitle: {
    marginBottom: spacing.xs,
  },
  chipContainer: {
    flexDirection: "row",
    gap: spacing.s,
    marginTop: spacing.s,
    backgroundColor: "transparent",
  },
  checkBox: {
    borderRadius: radius.regular,
    //borderColor: colors.primary,
  },
  expandedContainer: {
    flexDirection: "row",
    backgroundColor: colors.quinary,
    padding: spacing.card,
    borderBottomRightRadius: radius.regular,
    borderBottomLeftRadius: radius.regular,
  },
  expandedSection: {
    flex: 1,
    backgroundColor: colors.quinary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
