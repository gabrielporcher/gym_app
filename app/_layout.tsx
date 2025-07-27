import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import "react-native-reanimated";
import { auth } from '../FirebaseConfig';

import { useColorScheme } from "@/hooks/useColorScheme";
import { ToastProvider } from "../contexts/ToastContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState(null)

  //controlar o estado para garantir auth no app
  onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('tya chamando aq')
    console.log(user)
    const uid = user.uid;
    // ...
  } else {
    console.log('ainda nada')
  }
});


  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }


  return (
    <ToastProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          initialRouteName="index"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name={"index"}
            options={{
              title: "Login",
              headerShadowVisible: false,
              headerTitleAlign: "center",
            }}
          />
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
      </ThemeProvider>
    </ToastProvider>
  );
}
