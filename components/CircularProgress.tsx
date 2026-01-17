import React from "react";
import Svg, { Path } from "react-native-svg";
import { Text } from "./Text";
import { View } from "./View";

type CircularProgressProps = {
  totalSeries: number;
  currentSerie: number;
};

export function CircularProgress({
  currentSerie = 0,
  totalSeries = 4,
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

  return (
    <View style={{ alignItems: "center" }}>
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

      <View
        style={{
          position: "absolute",
          top: radius / 2,
          alignItems: "center",
        }}
      >
        <Text preset="itemTitle">{currentSerie}</Text>
        <Text preset="itemTitle">semana</Text>
      </View>
    </View>
  );
}
