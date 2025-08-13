import { Icon, Screen, Text, View } from "@/components";
import { colors, miscellaneous, spacing } from "@/components/styles";
import { useUserStore, useWorkoutStore } from "@/contexts/store";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

export default function CreateSessionScreen() {
  const { user } = useUserStore();
  const { workoutPlan } = useWorkoutStore();
  const todayWorkout = workoutPlan?.weeklyWorkout[2];
  console.log("tó: ", todayWorkout);

  return (
    <Screen canGoBack>
      <Text preset="title">{`Workout ${todayWorkout?.title}`}</Text>

      <FlatList
        data={todayWorkout?.exercises || []}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={miscellaneous.shadowWrapper}>
            <View style={[styles.listItem, styles.listTop]}>
              <Text preset="sectionTitle">{item.title}</Text>
              <Icon name={"chevron-forward-outline"} color={colors.primary} />
            </View>
            <View style={[styles.listItem, styles.listBottom]}>
              <Text preset="itemTitle">{item.series} series</Text>
              <Text preset="itemTitle">{item.reps} Reps</Text>
            </View>
          </TouchableOpacity>
        )}
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
