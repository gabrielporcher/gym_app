import { Icon, Text } from '@/components';
import { useRouter } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "./styles";
interface ScreenProps {
  children: React.ReactNode;
  scrollable?: boolean;
  canGoBack?: boolean;
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

export function Screen({
  children,
  scrollable,
  canGoBack = false,
}: ScreenProps) {
  const { top, bottom } = useSafeAreaInsets();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const router = useRouter()
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container backgroundColor={colors.background}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: top,
            paddingBottom: bottom,
          }}
        >
          {canGoBack && (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{marginBottom: 12, flexDirection: 'row', alignItems: 'center'}}
            >
              <Icon name="arrow-back" color="primary" />
              <Text preset='itemTitleThin'>
                Back
              </Text>
            </TouchableOpacity>
          )}
          {children}
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}
