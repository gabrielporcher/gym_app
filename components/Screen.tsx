import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "./styles";
interface ScreenProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

interface Props {
  children?: React.ReactNode;
  backgroundColor: string;
}

function ScrollViewContainer({ children, backgroundColor }: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ backgroundColor, flex: 1 }}
    >
      {children}
    </ScrollView>
  );
}

function ViewContainer({ children, backgroundColor }: Props) {
  return <View style={{ backgroundColor, flex: 1 }}>{children}</View>;
}

export function Screen({ children, scrollable }: ScreenProps) {
  const { top, bottom } = useSafeAreaInsets();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container backgroundColor={colors.background}>
        <View style={{paddingHorizontal: 20, paddingTop: top, paddingBottom: bottom}}>{children}</View>
      </Container>
    </KeyboardAvoidingView>
  );
}
