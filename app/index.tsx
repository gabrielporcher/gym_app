import {
  Button,
  Icon,
  IconName,
  Screen,
  Text,
  TextInput,
  View,
} from "@/components";
import { colors, radius, spacing, typography } from "@/components/styles";
import { useToast } from "@/contexts/ToastContext";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../FirebaseConfig";

interface SocialButtonProps {
  title: string;
  icon: IconName;
  color?: string;
  onPress: () => void;
}

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  GoogleSignin.configure({
    webClientId:
      "20354049653-13e1supf35dngkcgm4t69nahdtt1itpg.apps.googleusercontent.com",
  });

  async function authUser(register = false) {
    setLoading(true);
    try {
      if (register) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      const err = error as FirebaseError;
      showToast(err.message);
      console.error("Auth failed: ", err.message);
    } finally {
      setLoading(false);
    }
  }

  const loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();

      if (response) {
        const user = response.data;
        const credential = GoogleAuthProvider.credential(user?.idToken);
        await signInWithCredential(auth, credential);
      } else {
        console.log("Login cancelado pelo usuário");
      }
    } catch (error) {
      console.log("Erro no login Google:", error);
    }
  };

  return (
    <Screen centralize>
      <TextInput
        title={"Email"}
        placeholder="example@email.com"
        icon="person"
        onChangeText={setEmail}
      />
      <TextInput
        title={"Password"}
        placeholder="Password"
        icon="key"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button
        title="Login"
        onPress={() => authUser(false)}
        style={styles.button}
        isLoading={loading}
      />

      <View style={styles.socialContainer}>
        <SocialButton
          title="Google"
          icon="google"
          color={colors.blue}
          onPress={loginWithGoogle}
        />
        <SocialButton
          title="Apple"
          icon="apple1"
          color={colors.green}
          onPress={loginWithGoogle}
        />
      </View>

      <Text preset="link" style={styles.linkText}>Sign up</Text>
    </Screen>
  );
}

function SocialButton({
  title,
  icon,
  color = colors.quinary,
  onPress,
}: SocialButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.socialButton, { borderColor: color }]}
      onPress={onPress}
    >
      <Icon library="AntDesign" name={icon} color={color} size={28} />
      <Text style={styles.socialButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: spacing.s,
  },

  socialContainer: {
    flexDirection: "row",
    gap: 10,
  },

  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: radius.regular,
    paddingVertical: spacing.m,
    flex: 1,
  },

  socialButtonText: {
    ...typography.body,
    marginLeft: spacing.s,
    fontWeight: "500",
    color: colors.primary,
  },

  linkText: {
    textAlign: "center",
    marginTop: spacing.xxxl,
  },
});
