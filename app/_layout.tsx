import { useUserStore } from "@/contexts/store";
import { ToastProvider } from "@/contexts/ToastContext";
import { useAuthListener } from "@/hooks/useAuthListener";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, usePathname, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const { user, loading } = useUserStore();
  const router = useRouter();
  const pathname = usePathname();

  useAuthListener();

  useEffect(() => {
    if (!loading) {
      if (user) {
        if (!pathname.startsWith("/(app)")) {
          router.replace("/(app)/(tabs)/MainScreen");
        }
      } else {
        if (pathname !== "/") {
          router.replace("/");
        }
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
        <StatusBar style="dark" />
      </ThemeProvider>
    </ToastProvider>
  );
}
