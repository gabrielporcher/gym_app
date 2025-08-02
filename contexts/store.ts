import {
  DailyWorkoutTemplate as DailyWorkoutTemplateType,
  WorkoutPlan as WorkoutPlanType,
} from "@/constants/ListModels";
import { User as FirebaseUser, onAuthStateChanged, signOut } from "firebase/auth";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { create } from "zustand";
import { auth, db } from "../FirebaseConfig"; // Import db and auth from FirebaseConfig

interface WorkoutState {
  workoutPlan: WorkoutPlanType | null; // The currently saved workout plan
  workoutPlanBuilder: WorkoutPlanType | null; // The workout plan being created/edited
  loadWorkoutPlan: (userId: string) => Promise<void>;
  initWorkoutPlanBuilder: (template: WorkoutPlanType) => void;
  updateWorkoutPlanBuilder: (
    updatedDailyWorkoutTemplate: DailyWorkoutTemplateType
  ) => void;
  saveWorkoutPlan: (userId: string) => Promise<void>;
  resetWorkoutPlan: (userId: string) => Promise<void>;
}

export const useWorkoutStore = create<WorkoutState>((set, get) => ({
  workoutPlan: null,
  workoutPlanBuilder: null,

  loadWorkoutPlan: async (userId: string | undefined) => {
    if(!userId) return
    try {
      const workoutPlanDocRef = doc(db, "workout_plans", userId);
      const workoutPlanSnap = await getDoc(workoutPlanDocRef);
      if (workoutPlanSnap.exists()) {
        set({ workoutPlan: workoutPlanSnap.data() as WorkoutPlanType });
      } else {
        set({ workoutPlan: null });
      }
    } catch (error) {
      console.error("Error loading workout plan from Firebase: ", error);
    }
  },

  initWorkoutPlanBuilder: (template) => {
    set({ workoutPlanBuilder: template });
  },

  updateWorkoutPlanBuilder: (updatedDailyWorkoutTemplate) => {
    set((state) => {
      if (!state.workoutPlanBuilder) return {};
      const newDailyWorkoutTemplates =
        state.workoutPlanBuilder.weeklyWorkout?.map((ww) =>
          ww.title === updatedDailyWorkoutTemplate.title
            ? { ...ww, ...updatedDailyWorkoutTemplate, registered: true }
            : ww
        );
      return {
        workoutPlanBuilder: {
          ...state.workoutPlanBuilder,
          weeklyWorkout: newDailyWorkoutTemplates,
        },
      };
    });
  },

  saveWorkoutPlan: async (userId: string) => {
    const { workoutPlanBuilder } = get();
    if (!workoutPlanBuilder) {
      throw new Error("No workout plan to save.");
    }

    try {
      const workoutPlanDocRef = doc(db, "workout_plans", userId);
      await setDoc(workoutPlanDocRef, workoutPlanBuilder);
      set({ workoutPlan: workoutPlanBuilder, workoutPlanBuilder: null }); // Update local state and clear builder
    } catch (error) {
      console.error("Error saving workout plan to Firebase: ", error);
      throw error;
    }
  },

  resetWorkoutPlan: async (userId: string) => {
    try {
      const workoutPlanDocRef = doc(db, "workout_plans", userId);
      await deleteDoc(workoutPlanDocRef);
      set({ workoutPlan: null });
    } catch (error) {
      console.error("Error resetting workout plan in Firebase: ", error);
    }
  },
}));

interface UserState {
  user: FirebaseUser | null;
  loading: boolean;
  loadUser: () => void;
  logoutUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: true,

  loadUser: () => {
    set({ loading: true });

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      set({ user: firebaseUser, loading: false });
      unsubscribe(); // escuta apenas uma vez
    });
  },

  logoutUser: async () => {
    try {
      await signOut(auth);
      set({ user: null });
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  },
}));
