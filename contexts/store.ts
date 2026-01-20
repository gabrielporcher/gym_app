import {
  DailyWorkoutTemplate as DailyWorkoutTemplateType,
  ExerciseSet,
  WorkoutPlan as WorkoutPlanType,
} from "@/constants/ListModels";
import { User as FirebaseUser, signOut } from "firebase/auth";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { create } from "zustand";
import { auth, db } from "../FirebaseConfig";

interface WorkoutState {
  activeSession: DailyWorkoutTemplateType | null;
  startSession: (workout: DailyWorkoutTemplateType) => void;
  updateExerciseSet: (
    exerciseId: number,
    setIndex: number,
    formattedData: ExerciseSet,
  ) => void;
  addExerciseSet: (exerciseId: number) => void;
  completeExercise: (exerciseId: number) => void;
  discardSession: () => void;

  workoutPlan: WorkoutPlanType | null;
  workoutPlanBuilder: WorkoutPlanType | null;
  loadWorkoutPlan: (userId: string) => Promise<void>;
  initWorkoutPlanBuilder: (template: WorkoutPlanType) => void;
  updateWorkoutPlanBuilder: (
    updatedDailyWorkoutTemplate: DailyWorkoutTemplateType,
  ) => void;
  saveWorkoutPlan: (userId: string) => Promise<void>;
  resetWorkoutPlan: (userId: string) => Promise<void>;
}

export const useWorkoutStore = create<WorkoutState>((set, get) => ({
  activeSession: null,
  workoutPlan: null,
  workoutPlanBuilder: null,

  startSession: (workout) => {
    // Clone to avoid reference issues
    const sessionClone = JSON.parse(JSON.stringify(workout));
    set({ activeSession: sessionClone });
  },

  updateExerciseSet: (exerciseId, setIndex, formattedData) => {
    set((state) => {
      if (!state.activeSession || !state.activeSession.exercises) return {};
      const updatedExercises = state.activeSession.exercises.map((ex) => {
        if (ex.id === exerciseId) {
          const newSets = [...(ex.setsRecorded || [])];
          newSets[setIndex] = formattedData;
          return { ...ex, setsRecorded: newSets };
        }
        return ex;
      });
      return {
        activeSession: { ...state.activeSession, exercises: updatedExercises },
      };
    });
  },

  addExerciseSet: (exerciseId) => {
    set((state) => {
      if (!state.activeSession || !state.activeSession.exercises) return {};
      const updatedExercises = state.activeSession.exercises.map((ex) => {
        if (ex.id === exerciseId) {
          const newSets = [...(ex.setsRecorded || [])];
          newSets.push({ reps: "", weight: "", completed: false });
          return { ...ex, setsRecorded: newSets };
        }
        return ex;
      });
      return {
        activeSession: { ...state.activeSession, exercises: updatedExercises },
      };
    });
  },

  completeExercise: (exerciseId) => {
    set((state) => {
      if (!state.activeSession || !state.activeSession.exercises) return {};
      const updatedExercises = state.activeSession.exercises.map((ex) => {
        if (ex.id === exerciseId) {
          return { ...ex, isCompleted: true };
        }
        return ex;
      });
      return {
        activeSession: { ...state.activeSession, exercises: updatedExercises },
      };
    });
  },

  discardSession: () => {
    set({ activeSession: null });
  },

  loadWorkoutPlan: async (userId: string | undefined) => {
    if (!userId) return;
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
            : ww,
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
  setUser: (user: FirebaseUser | null) => void;
  logoutUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: true,

  setUser: (user) => {
    set({ user, loading: false });
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
