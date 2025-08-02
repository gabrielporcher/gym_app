import { useUserStore } from "@/contexts/store";
import { Redirect, Stack } from "expo-router";
import "react-native-reanimated";

export default function AppLayout() {
  const { user } = useUserStore();

  if (!user) {
    return <Redirect href="/" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" options={{ title: "Start page" }} />
      <Stack.Screen
        name="CreateWorkoutScreen"
        options={{ title: "Create Workout" }}
      />
      <Stack.Screen
        name="DefineWorkoutScreen"
        options={{ title: "Define Workout" }}
      />
      <Stack.Screen
        name="SelectExercises"
        options={{ title: "Select Exercises" }}
      />
    </Stack>
  );
}
