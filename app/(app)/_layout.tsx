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
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
      <Stack.Screen
        name="CreateSessionScreen"
        options={{ title: "Create workout session" }}
      />
    </Stack>
  );
}
