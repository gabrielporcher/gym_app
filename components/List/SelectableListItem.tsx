import { ExerciseTemplate } from "@/constants/ListModels";
import Checkbox from "expo-checkbox";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Chip } from "../Chip";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { View } from "../View";
import { colors, miscellaneous } from "../styles";
import { selectableListItemStyles as styles } from "./styles";

interface SelectableListProps {
  item: ExerciseTemplate;
  onPress?: (item: ExerciseTemplate) => void;
  isSelected?: boolean;
  sets?: number;
  reps?: number;
  onSetsChange?: (value: number) => void;
  onRepsChange?: (value: number) => void;
}

function SelectableListItemComponent({
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
      style={!isSelected ? miscellaneous.shadowWrapper : {}}
    >
      <View
        style={[
          styles.listItem,
          { backgroundColor: isSelected ? colors.bgGray : colors.bgWhiteTop },
        ]}
      >
        <View style={styles.firstContainer}>
          <Icon name={item.icon} size={30} style={styles.icon} />
        </View>
        <View style={styles.mainContainer}>
          <Text preset="itemTitleThin" style={styles.itemTitle}>
            {item.title}
          </Text>
          <View style={styles.chipContainer}>
            {item?.muscleIntensity?.map((intensity, index) => (
              <Chip
                key={index}
                text={intensity.muscle}
                preset={intensity.intensity}
              />
            ))}
          </View>
        </View>
        <View style={styles.lastContainer}>
          <Checkbox
            style={styles.checkBox}
            value={isSelected}
            color={isSelected ? colors.active : undefined}
            onValueChange={() => onPress?.(item)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

//para evitar re-renderizações desnecessárias
function areEqual(
  prevProps: SelectableListProps,
  nextProps: SelectableListProps
) {
  return (
    prevProps.isSelected === nextProps.isSelected &&
    prevProps.sets === nextProps.sets &&
    prevProps.reps === nextProps.reps &&
    prevProps.item.id === nextProps.item.id
  );
}

export const SelectableListItem = React.memo(
  SelectableListItemComponent,
  areEqual
);
