import {
  Card,
  Icon,
  List,
  ListItemType,
  ProgressBar,
  Screen,
  Text,
} from "@/components";
import type { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

const popularModels: {
  icon: IoniconName;
  title: string;
  description: string;
  tags: string[];
}[] = [
  {
    icon: "barbell-outline",
    title: "ABC 2x",
    description: "3 different workouts, 2x per week",
    tags: ["6 days/week", "Intermediate"],
  },
  {
    icon: "calendar-outline",
    title: "ABCDE",
    description: "5 different workouts, each muscle group",
    tags: ["5 days/week", "Advanced"],
  },
  {
    icon: "swap-vertical-outline",
    title: "Push/Pull",
    description: "Alternating push and pull movements",
    tags: ["4-6 days/week", "Intermediate"],
  },
  {
    icon: "body-outline",
    title: "Full Body",
    description: "Complete body workout each session",
    tags: ["3 days/week", "Beginner"],
  },
  {
    icon: "body-outline",
    title: "Upper/Lower",
    description: "Complete segment workout each session",
    tags: ["4 days/week", "Beginner"],
  },
];

function handleItemPressed(item: ListItemType) {
  console.log("Item pressed: ", item);
}

export default function CreateWorkoutScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Create Workout",
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Screen scrollable>
        <ProgressBar
          totalSteps={3}
          currentStep={1}
          currentPage="Training Model"
        />

        <Text preset="title">Choose Your Training Model</Text>
        <Text preset="subtitle">
          Select a workout frequency that fits your schedule and goals
        </Text>

        <List
          data={popularModels}
          title="Popular Models"
          onPress={handleItemPressed}
          disableScroll
        />

        <Text preset="sectionTitle">Custom</Text>
        <Card style={styles.customCard}>
          <Icon name="add-outline" size={24} style={styles.addIcon} />
          <Text style={styles.customCardText}>Create Custom Model</Text>
        </Card>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  customCard: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#C4C4C4",
    borderRadius: 8,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addIcon: {
    marginRight: 8,
  },
  customCardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
