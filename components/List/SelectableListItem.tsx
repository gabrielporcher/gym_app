import { MuscleListItemType } from "@/constants/ListModels";
import Checkbox from "expo-checkbox";
import { TouchableOpacity } from "react-native";
import { Chip } from "../Chip";
import { Icon } from "../Icon";
import { IntegerInput } from "../IntegerInput";
import { Text } from "../Text";
import { View } from "../View";
import { colors } from "../styles";
import { selectableListItemStyles as styles } from "./styles";

interface SelectableListProps {
  item: MuscleListItemType;
  onPress?: (item: MuscleListItemType) => void;
  isSelected?: boolean;
  sets?: number;
  reps?: number;
  onSetsChange?: (value: number) => void;
  onRepsChange?: (value: number) => void;
}

export function SelectableListItem({
  item,
  onPress,
  isSelected = false,
  sets = 3,
  reps = 8,
  onSetsChange,
  onRepsChange,
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
            <IntegerInput
              title="Sets"
              iconName="time"
              value={sets}
              onChange={(v) => onSetsChange?.(v)}
            />
          </View>
          <View style={styles.expandedSection}>
            <IntegerInput
              title="Reps"
              iconName="repeat"
              value={reps}
              onChange={(v) => onRepsChange?.(v)}
            />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}


