import { Button, Card, Icon, Screen, Text, View } from "@/components";
import { spacing } from "@/components/styles";
import { useWorkoutStore } from "@/contexts/store";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function WorkoutsScreen() {
  const { workoutPlan, workoutPlanBuilder, loadWorkoutPlan } =
    useWorkoutStore();
  const router = useRouter();

  function goToCreateWorkout() {
    router.push("/(app)/CreateWorkoutScreen");
  }
  return (
    <Screen>
      <Text preset="title">Active workouts</Text>
      <Text preset="subtitle">Select and modify your workout</Text>
      {workoutPlan ? (
        <Card style={styles.card}>
          <View style={styles.section}>
            <Text preset="buttonSecondary">{workoutPlan.title}</Text>
            <Text preset="default">{workoutPlan.description}</Text>
          </View>
          <View style={[styles.section, styles.icon]}>
            <Icon name="checkmark-circle" size={28} />
          </View>
        </Card>
      ) : (
        <View>
          <Text preset="subtitle">Looks like you don't have any workout registered.</Text>
          <Button
            title="Create workout"
            onPress={goToCreateWorkout}
            style={{ marginVertical: 10 }}
          />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flex: 1,
  },
  icon: {
    alignItems: "flex-end",
  },
  button: {
    marginTop: spacing.m,
  },
});
