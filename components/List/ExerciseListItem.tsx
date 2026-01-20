import { ExerciseTemplate } from "@/constants/ListModels";
import { TouchableOpacity } from "react-native";
import { Chip } from "../Chip";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { View } from "../View";
import { colors, miscellaneous } from "../styles";
import { listItemStyles as styles } from "./styles";

interface ExerciseListItemProps {
  item: ExerciseTemplate;
  onPress?: (item: ExerciseTemplate) => void;
  rightComponent?: React.ReactNode;
}

export function ExerciseListItem({
  item,
  onPress,
  rightComponent,
}: ExerciseListItemProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress?.(item)}
      style={miscellaneous.shadowWrapper}
    >
      <View
        key={item.title}
        style={[
          styles.listItem,
          {
            backgroundColor: colors.bgWhiteTop,
          },
        ]}
      >
        <Icon name={item.icon} style={styles.icon} />
        <View style={styles.itemTextContainer}>
          <Text preset="itemTitle">{item.title}</Text>
          <Text preset="itemDescription">
            {item.series} séries x {item.reps} reps
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
        {rightComponent || (
          <Icon name={"chevron-forward-outline"} color={colors.inactive} />
        )}
      </View>
    </TouchableOpacity>
  );
}
