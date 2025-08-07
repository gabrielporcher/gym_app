import { Button, Screen } from "@/components";
import { useUserStore } from "@/contexts/store";
import { auth } from "@/FirebaseConfig";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const { logoutUser } = useUserStore();
  const router = useRouter();

  async function handleLogout() {
    try {
      await auth.signOut();
      await logoutUser();
      router.replace("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  }

  return (
    <Screen>
      <Button
        title="Logout"
        onPress={handleLogout}
        style={{ marginVertical: 10 }}
      />
    </Screen>
  );
}
