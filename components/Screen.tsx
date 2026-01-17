import { useRouter } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "./Icon";
import { colors } from "./styles";
import { Text } from "./Text";
interface ScreenProps {
  children: React.ReactNode;
  scrollable?: boolean;
  canGoBack?: boolean;
  backgroundColor?: string;
  centralize?: boolean;
}

interface Props {
  children?: React.ReactNode;
  backgroundColor: string;
  center?: boolean;
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

function ViewContainer({ children, backgroundColor, center = false }: Props) {
  return (
    <View
      style={[
        { backgroundColor, flex: 1 },
        center ? styles.centralizedContainer : styles.container,
      ]}
    >
      {children}
    </View>
  );
}

export function Screen({
  children,
  scrollable,
  canGoBack = false,
  backgroundColor = colors.bgWhiteMid,
  centralize = false,
}: ScreenProps) {
  const { top, bottom } = useSafeAreaInsets();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const router = useRouter();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container backgroundColor={backgroundColor} center={centralize}>
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
              style={styles.backButton}
            >
              <Icon
                name="chevron-left"
                color="primary"
                library="MaterialCommunityIcons"
                style={styles.icon}
                size={26}
              />
              <Text preset="itemTitleThin">Voltar</Text>
            </TouchableOpacity>
          )}
          {children}
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {},

  centralizedContainer: {
    justifyContent: "center",
  },

  backButton: {
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginLeft: -5,
  },
});
