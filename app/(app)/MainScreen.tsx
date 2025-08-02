import { auth } from "@/FirebaseConfig";
import { Button, Screen } from "@/components";
import { useUserStore, useWorkoutStore } from "@/contexts/store";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";

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
        
            <Button title="Create workout" onPress={goToCreateWorkout} style={{marginVertical: 10}} />
        <Button title="Logout" onPress={handleLogout} style={{marginVertical: 10}} />
        
    </Screen>
  );
}