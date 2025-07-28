import { useUserStore } from "@/contexts/store";
import { Redirect, RelativePathString, Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  const {user} = useUserStore()

  if(!user) {
    return <Redirect href={"/login" as RelativePathString} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={"CreateWorkoutScreen"}
        options={{
          title: "Create Workout",
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={"DefineWorkoutScreen"}
        options={{
          title: "Define Workout",
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name={"SelectExercises"}
        options={{
          title: "Select Exercises",
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
