import { auth } from "@/FirebaseConfig";
import { Button, Card, Icon, Screen, Text, View } from "@/components";
import { colors, spacing } from "@/components/styles";
import { useUserStore, useWorkoutStore } from "@/contexts/store";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

export default function MainScreen() {
  const { logoutUser, user } = useUserStore();
  const {workoutPlan, workoutPlanBuilder, loadWorkoutPlan} = useWorkoutStore();
  const router = useRouter();

  useEffect(() => {
    if(user) {
      loadWorkoutPlan(user.uid);
    }
  }, [])


  function goToCreateWorkout() {
    router.push('/(app)/CreateWorkoutScreen')
  }

  async function handleLogout() {
    try {
      await auth.signOut();
      await logoutUser();
      router.replace("/"); // Navigate to the login screen
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  }

  return (
    <Screen>

      {workoutPlan && (
              <Card style={styles.card}>
                <View style={styles.section}>
                  <Text preset="buttonSecondary">{workoutPlan.title}</Text>
                  <Text preset="default">{workoutPlan.description}</Text>
                </View>
                <View style={[styles.section, styles.icon]}>
                  <Icon name="checkmark-circle" size={28} />
                </View>
              </Card>
            )}
        
            <Button title="Create workout" onPress={goToCreateWorkout} style={{marginVertical: 10}} />
        <Button title="Logout" onPress={handleLogout} style={{marginVertical: 10}} />
        
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
  button: {
    marginTop: spacing.m,
  },
});
