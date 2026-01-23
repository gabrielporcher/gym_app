import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { RoundButton } from "./RoundButton";
import { Text } from "./Text";
import { View } from "./View";

type CircularProgressProps = {
  totalSeries: number;
  currentSerie: number;
  isResting?: boolean;
  restTimer?: number; // in seconds
  isPaused?: boolean;
  isFinished?: boolean;
  onPause?: () => void;
  onSkipRest?: () => void;
  onCompleteRest?: () => void;
  onCompleteSet?: () => void;
};

export function CircularProgress({
  currentSerie = 0,
  totalSeries = 4,
  isResting = false,
  restTimer = 120,
  isPaused = false,
  isFinished = false,
  onPause,
  onSkipRest,
  onCompleteSet,
}: CircularProgressProps) {
  const radius = 150;
  const strokeWidth = 12;

  const width = radius * 2 + strokeWidth * 2;
  const height = radius + strokeWidth * 2;

  const cx = width / 2;
  const cy = radius + strokeWidth;

  const totalAngle = 180;
  const gapAngle = 6;
  const stepAngle = (totalAngle - gapAngle * (totalSeries - 1)) / totalSeries;

  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const polar = (angle: number) => ({
    x: cx + radius * Math.cos(toRad(angle)),
    y: cy - radius * Math.sin(toRad(angle)),
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        {Array.from({ length: totalSeries }).map((_, index) => {
          const startAngle = 180 - index * (stepAngle + gapAngle);
          const endAngle = startAngle - stepAngle;

          const start = polar(startAngle);
          const end = polar(endAngle);

          const isActive = index < currentSerie;

          return (
            <Path
              key={index}
              d={`M ${start.x} ${start.y}
                   A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`}
              stroke={isActive ? "green" : "black"}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
            />
          );
        })}
      </Svg>

      <View style={[styles.childrenContent, { top: radius / 3 }]}>
        {isFinished ? (
          <Text preset="title">Exercício concluído</Text>
        ) : isResting ? (
          <>
            <Text preset="title" style={styles.timerText}>
              {formatTime(restTimer)}
            </Text>
            <View style={styles.timerButtons}>
              <RoundButton
                title={isPaused ? "Retomar" : "Pausar"}
                iconName={isPaused ? "play" : "pause"}
                onPress={onPause}
                style={{ backgroundColor: "orange" }}
              />
              <RoundButton
                title="Próxima série"
                iconName="play-skip-forward"
                onPress={onSkipRest}
              />
            </View>
          </>
        ) : (
          <>
            <Text preset="title">{currentSerie + 1}ª serie</Text>
            <RoundButton
              title="Completar série"
              iconName="play-skip-forward"
              onPress={onCompleteSet}
            />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  childrenContent: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },

  timerText: {
    fontSize: 40,
    marginBottom: 10,
  },

  timerButtons: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    width: "100%",
  },
});
