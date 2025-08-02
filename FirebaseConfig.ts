import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import {
  initializeFirestore,
  memoryLocalCache
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYsBBeQ94rcZAhIUypnjcHrYwNMVqN7GM",
  authDomain: "gym-app-c85b4.firebaseapp.com",
  projectId: "gym-app-c85b4",
  storageBucket: "gym-app-c85b4.firebasestorage.app",
  messagingSenderId: "20354049653",
  appId: "1:20354049653:web:3a5b0f9ec1faf5460fba3c",
  measurementId: "G-H55294DLTT"
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

//persistência local ativada
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true, //testando poblema de envios
  localCache: memoryLocalCache()
});

