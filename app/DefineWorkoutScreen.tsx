import { Card, Icon, ProgressBar, Screen, Text, View } from "@/components";
import { colors } from "@/components/styles";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export default function DefineWorkoutScreen() {
  const { workout } = useLocalSearchParams();
  const parsedWorkout = JSON.parse(workout as string);
  console.log("Parsed Workout:", parsedWorkout);
  return (
    <Screen>
      <ProgressBar
        totalSteps={3}
        currentStep={2}
        currentPage="Define workouts"
      />
      <Card style={{ marginTop: 24, padding: 26 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.quinary
          }}
        >
          <View style={{ flex: 1, backgroundColor: colors.quinary }}>
            <Text preset="buttonSecondary">{parsedWorkout?.title}</Text>
            <Text preset='default'>{parsedWorkout?.description}</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: colors.quinary, alignItems: 'flex-end' }}>
            <Icon name='checkmark-circle' size={28} />
          </View>
        </View>
      </Card>
      <Text preset="title">Define your workouts</Text>
      <Text preset="subtitle">
        Assign muscle groups to each workout day.{"\n"}Tap to custiomize
        exercises
      </Text>
    </Screen>
  );
}
