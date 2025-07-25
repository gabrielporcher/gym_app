import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { radius, spacing } from './styles';
import { Text } from './Text';

interface ToastProps {
  message: string;
  visible: boolean;
  onHide: () => void;
}

export function Toast({ message, visible, onHide }: ToastProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      const timer = setTimeout(() => {
        onHide();
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -50,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, onHide, opacity, translateY]);

  if (!visible) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opacity,
          transform: [{ translateY: translateY }],
        },
      ]}
    >
      <Text preset='defaultLight' style={styles.message}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50, // Position from the top
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 9999,
  },
  message: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    //color: 'white',
    paddingVertical: 10,
    paddingHorizontal: spacing.l,
    borderRadius: radius.round,
    overflow: 'hidden',
  },
});