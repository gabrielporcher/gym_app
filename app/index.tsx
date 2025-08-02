import { Button, Screen, TextInput } from "@/components";
import { spacing } from "@/components/styles";
import { useToast } from "@/contexts/ToastContext";
import { useRouter } from "expo-router";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
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

  async function authUser(register = false) {
    setLoading(true);
    try {
      if (register) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      // A mudança de estado será detectada automaticamente por onAuthStateChanged
      // e o redirecionamento ocorrerá via useEffect no RootLayout.
    } catch (error) {
      const err = error as FirebaseError;
      showToast(err.message);
      console.error("Auth failed: ", err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Screen>
      <TextInput
        placeholder="User email"
        icon="person"
        onChangeText={setEmail}
      />
      <TextInput
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: spacing.s,
  },
});
