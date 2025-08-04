import { DailyWorkoutTemplate, WorkoutPlan } from "@/constants/ListModels";
import { TouchableOpacity } from "react-native";
import { Chip } from "../Chip";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { View } from "../View";
import { colors } from "../styles";
import { listItemStyles as styles } from "./styles";

interface ListItemProps {
  item: WorkoutPlan | DailyWorkoutTemplate;
  onPress?: (item: WorkoutPlan | DailyWorkoutTemplate) => void;
}

export function ListItem({ item, onPress }: ListItemProps) {
  return (
    <TouchableOpacity onPress={() => onPress?.(item)}>
      <View
        key={item.title}
        style={[
          styles.listItem,
          {
            backgroundColor:
              "registered" in item && item.registered
                ? colors.quinary
                : "transparent",
          },
        ]}
      >
        <Icon name={item.icon} style={styles.icon} />
        <View style={styles.itemTextContainer}>
          <Text preset="itemTitle">{item.title}</Text>
          <Text preset="itemDescription">{item.description}</Text>
          <View style={styles.chipContainer}>
            {item?.tags?.map((tag) => (
              <Chip
                key={tag}
                text={tag}
                preset={
                  "registered" in item && item.registered
                    ? "selected"
                    : "default"
                }
              />
            ))}
          </View>
        </View>
        <Icon
          name={
            item.registered ? "checkmark-circle" : "chevron-forward-outline"
          }
          color={item.registered ? colors.primary : colors.nonary}
        />
      </View>
    </TouchableOpacity>
  );
}
