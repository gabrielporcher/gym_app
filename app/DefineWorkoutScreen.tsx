import {
  Card,
  Icon,
  List,
  ListItemType,
  ProgressBar,
  Screen,
  Text,
  View,
} from "@/components";
import { colors, spacing } from "@/components/styles";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function DefineWorkoutScreen() {
  const { workout } = useLocalSearchParams();
  const parsedWorkout = JSON.parse(workout as string);

  const generatedModels = parsedWorkout?.predefinedModel?.map((model: any) => ({
    icon: model.icon,
    title: model.title,
    description: "Tap to asign exercises",
    tags: ["Customizable"],
  }));

  function handleItemPressed(item: ListItemType | { title: string }) {
    console.log("Item pressed:", item);
  }

  return (
    <Screen scrollable>
      <ProgressBar
        totalSteps={3}
        currentStep={2}
        currentPage="Define workouts"
      />

      <Card style={styles.card}>
        <View style={styles.section}>
          <Text preset="buttonSecondary">{parsedWorkout?.title}</Text>
          <Text preset="default">{parsedWorkout?.description}</Text>
        </View>
        <View style={[styles.section, styles.icon]}>
          <Icon name="checkmark-circle" size={28} />
        </View>
      </Card>

      <Text preset="title">Define your workouts</Text>
      <Text preset="subtitle">
        Assign muscle groups to each workout day.{"\n"}Tap to custiomize
        exercises
      </Text>

      <List
        data={generatedModels}
        title="Popular Models"
        onPress={handleItemPressed}
        disableScroll
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 24,
    padding: spacing.card,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.quinary,
  },
  section: {
    flex: 1,
    backgroundColor: colors.quinary,
  },
  icon: {
    alignItems: "flex-end",
  },
});
