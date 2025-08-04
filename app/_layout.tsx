import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import "react-native-reanimated";

import { useUserStore } from "@/contexts/store";
import { ToastProvider } from "@/contexts/ToastContext";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const { user, loading, loadUser } = useUserStore();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
  if (!loading) {
    if (user) {
      router.replace("/(app)/(tabs)/MainScreen");
    } else {
      console.log('rediredionando de vorta po começo')
      router.replace("/"); // volta pro login se não estiver logado
    }
  }
}, [user, loading]);

  if (!fontsLoaded || loading) return null;

  return (
    <ToastProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(app)" />
          <Stack.Screen name="index" options={{ title: "Login" }} />
        </Stack>
      </ThemeProvider>
    </ToastProvider>
  );
}
