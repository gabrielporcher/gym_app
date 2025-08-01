import { Button, Screen, TextInput } from "@/components";
import { spacing } from "@/components/styles";
import { useUserStore } from "@/contexts/store";
import { useToast } from "@/contexts/ToastContext";
import { useRouter } from "expo-router";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { auth } from "../FirebaseConfig";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { setUser } = useUserStore();
  const { showToast } = useToast();

  async function authUser(register = false) {
    setLoading(true);
    try {
      if (register) {
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("DEU BOM!! : ", user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            showToast(errorMessage);
            console.error(errorMessage);
          });
          setLoading(false)
        return;
      }
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential;
          console.log("DEU BOM!! : ", user);
          setUser(user);
          router.navigate("/(app)/CreateWorkoutScreen");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          showToast(errorMessage);
          console.error(errorMessage);
        });
        setLoading(false);
        return
    } catch (error) {
      const err = error as FirebaseError;
      console.error("Auth failed: ", err.message);
      showToast(err.message);
      setLoading(false);
    }
  }

  return (
    <Screen>
      <TextInput
        placeholder="User email"
        icon="person"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="password"
        icon="key"
        onChangeText={(text) => setPassword(text)}
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
