import { Button, Screen, TextInput } from "@/components";
import { spacing } from "@/components/styles";
import { useRouter } from "expo-router";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { auth } from '../FirebaseConfig';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function signUp() {
    setLoading(true);
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log('DEU BOM!! : ', user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage)
        });
    } catch (error: any) {
      const err = error as FirebaseError;
      console.error("Registration failed: ", err.message);
    }
    setLoading(false);
  }

  async function signIn() {
    setLoading(true);
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential;
          console.log('DEU BOM!! : ', user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage)
        });
    } catch (error: any) {
      const err = error as FirebaseError;
      console.error("Registration failed: ", err.message);
    }
    setLoading(false);
  }

  return (
    <Screen>
      <TextInput
        placeholder="User email"
        icon="person"
        onChangeText={text => setEmail(text)}
      />
      <TextInput placeholder="password" icon="key" onChangeText={text => setPassword(text)} />
      <Button title="Login" onPress={() => signIn()} style={styles.button} />
      <Button title="Create account" onPress={() => signUp()} style={styles.button} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: spacing.s,
  },
});
