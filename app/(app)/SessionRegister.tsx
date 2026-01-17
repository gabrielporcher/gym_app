import { CircularProgress, Screen, SessionInput, Text } from "@/components";
import { useLocalSearchParams } from "expo-router";

export default function SessionRegister() {
  const { exercise } = useLocalSearchParams();
  const exerciseParsed = JSON.parse(exercise as string);
  return (
    <Screen centralize>
      <Text>{exerciseParsed.title}</Text>
      <CircularProgress totalSeries={3} currentSerie={2} />
      <SessionInput exercise={exerciseParsed} />
    </Screen>
  );
}
