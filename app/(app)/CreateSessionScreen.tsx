import { List, Screen } from "@/components";
import { colors, spacing } from "@/components/styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function CreateSessionScreen() {
  const router = useRouter();
  const { workout } = useLocalSearchParams();
  const workoutParsed = JSON.parse(workout as string);

  function goToCreateSession() {
    router.push("/(app)/SessionRegister");
  }

  console.log("que porra: ", workoutParsed);

  return (
    <Screen canGoBack>
      <List
        data={workoutParsed.exercises}
        title={`Workout ${workoutParsed?.title}`}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    gap: spacing.m,
  },
  listItem: {
    flex: 1,
    padding: spacing.card,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.bgWhiteBottom,
    backgroundColor: colors.bgWhiteTop,
  },
  listTop: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  listBottom: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
