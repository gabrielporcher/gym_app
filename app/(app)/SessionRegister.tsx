import { Screen, Text } from "@/components";
import { useLocalSearchParams } from "expo-router";

export default function SessionRegister() {
  const params = useLocalSearchParams();
  return (
    <Screen>
      <Text>Session</Text>
    </Screen>
  );
}
