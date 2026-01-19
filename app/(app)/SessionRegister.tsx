import {
  Button,
  CircularProgress,
  Screen,
  SessionInput,
  Text,
  View,
} from "@/components";
import { useLocalSearchParams } from "expo-router";

export default function SessionRegister() {
  const { exercise } = useLocalSearchParams();
  const exerciseParsed = JSON.parse(exercise as string);
  return (
    <Screen canGoBack>
      <Text preset="title">{exerciseParsed.title}</Text>
      <CircularProgress totalSeries={exerciseParsed.series} currentSerie={0} />
      <SessionInput exercise={exerciseParsed} />
      <View
        style={{
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <Button title="Add série" preset="secondary" />
        <Button title="Exercicio concluido" preset="primary" />
      </View>
    </Screen>
  );
}
