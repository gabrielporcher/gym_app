import { Button, Screen, TextInput } from "@/components";
import { spacing } from "@/components/styles";
import { useToast } from "@/contexts/ToastContext";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { auth } from "../FirebaseConfig";

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
    <Screen>
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
          //secureTextEntry
          onChangeText={setPassword}
        />
        <Button
          title="Login"
          onPress={() => authUser(false)}
          style={styles.button}
          isLoading={loading}
        />
        <Button
          title="Create account"
          onPress={() => authUser(true)}
          style={styles.button}
          isLoading={loading}
        />
        <GoogleSigninButton onPress={loginWithGoogle} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: spacing.s,
  },
});
