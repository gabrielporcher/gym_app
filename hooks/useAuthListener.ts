import { auth } from "@/FirebaseConfig";
import { useUserStore } from "@/contexts/store";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export const useAuthListener = () => {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);
};
