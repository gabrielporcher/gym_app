import { WorkoutModel } from '@/constants/ListModels';
import { create } from 'zustand';

interface WorkoutState {
  workout: WorkoutModel | null;
  createWorkout: (newWorkout: WorkoutModel) => void;
  updateWorkout: (
  updatedFields: Partial<WorkoutModel> | ((prev: WorkoutModel) => WorkoutModel)
) => void;
  resetWorkout: () => void;
}

export const useWorkoutStore = create<WorkoutState>((set) => ({
  workout: null,

  createWorkout: (newWorkout) => set({ workout: newWorkout }),

  updateWorkout: (updatedFields) =>
  set((state) => {
    if (!state.workout) return state;

    const updatedWorkout =
      typeof updatedFields === "function"
        ? updatedFields(state.workout)
        : { ...state.workout, ...updatedFields };

    return { workout: updatedWorkout };
  }),

  resetWorkout: () => set({ workout: null }),
}));
