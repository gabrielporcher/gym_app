import { IconVariants } from "@/components";
import type { Ionicons } from "@expo/vector-icons";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

type PredefinedModelType = {
  icon: string;
  title: string;
};

export type ListItemType = {
  icon: IoniconName | IconVariants;
  title: string;
  description: string;
  tags: string[];
  predefinedModel?: PredefinedModelType[];
};

export type MuscleListItemType = {
  id: number;
  icon: IoniconName;
  title: string;
  agonistMuscle: string;
  synergistMuscles: string[];
  series: number;
  reps: number;
};

export const popularModels: ListItemType[] = [
  {
    icon: "barbell-outline",
    title: "ABC 2x",
    description: "3 different workouts, 2x per week",
    tags: ["6 days/week", "Intermediate"],
    predefinedModel: [
      { icon: "A", title: "A 1" },
      { icon: "B", title: "B 1" },
      { icon: "C", title: "C 1" },
      { icon: "A", title: "A 2" },
      { icon: "B", title: "B 2" },
      { icon: "C", title: "C 2" },
    ],
  },
  {
    icon: "calendar-outline",
    title: "ABCDE",
    description: "5 different workouts, each muscle group",
    tags: ["5 days/week", "Advanced"],
    predefinedModel: [
      { icon: "A", title: "A" },
      { icon: "B", title: "B" },
      { icon: "C", title: "C" },
      { icon: "D", title: "D" },
      { icon: "E", title: "E" },
    ],
  },
  {
    icon: "swap-vertical-outline",
    title: "Push/Pull",
    description: "Alternating push and pull movements",
    tags: ["4-6 days/week", "Intermediate"],
    predefinedModel: [
      { icon: "A", title: "PUSH 1" },
      { icon: "B", title: "PULL 1" },
      { icon: "A", title: "PUSH 2" },
      { icon: "B", title: "PULL 2" },
    ],
  },
  {
    icon: "body-outline",
    title: "Full Body",
    description: "Complete body workout each session",
    tags: ["3 days/week", "Beginner"],
    predefinedModel: [
      { icon: "A", title: "A" },
      { icon: "B", title: "B" },
      { icon: "C", title: "C" },
    ],
  },
  {
    icon: "swap-vertical-outline",
    title: "Upper/Lower",
    description: "Complete segment workout each session",
    tags: ["4 days/week", "Beginner"],
    predefinedModel: [
      { icon: "A", title: "UPPER 1" },
      { icon: "B", title: "LOWER 1" },
      { icon: "A", title: "UPPER 2" },
      { icon: "B", title: "LOWER 2" },
    ],
  },
];

export const muscleGroups: string[] = [
  "Chest",
  "Back",
  "Shoulders",
  "Biceps",
  "Triceps",
  "Legs",
];

export const exercisesList: MuscleListItemType[] = [
  {
    id: 1,
    icon: "barbell-outline",
    title: "Supino Reto",
    agonistMuscle: "Chest",
    synergistMuscles: ["Chest", "Shoulders", "Triceps"],
    series: 4,
    reps: 8,
  },
  {
    id: 2,
    icon: "barbell-outline",
    title: "Remada Curvada",
    agonistMuscle: "Back",
    synergistMuscles: ["Back", "Biceps"],
    series: 4,
    reps: 8,
  },
  {
    id: 3,
    icon: "barbell-outline",
    title: "Desenvolvimento Militar",
    agonistMuscle: "Shoulders",
    synergistMuscles: ["Shoulders", "Triceps"],
    series: 4,
    reps: 8,
  },
  {
    id: 4,
    icon: "barbell-outline",
    title: "Rosca Direta",
    agonistMuscle: "Biceps",
    synergistMuscles: ["Biceps"],
    series: 4,
    reps: 10,
  },
  {
    id: 5,
    icon: "barbell-outline",
    title: "Tríceps Testa",
    agonistMuscle: "Triceps",
    synergistMuscles: ["Triceps"],
    series: 4,
    reps: 10,
  },
  {
    id: 6,
    icon: "barbell-outline",
    title: "Agachamento Livre",
    agonistMuscle: "Legs",
    synergistMuscles: ["Legs", "Glutes"],
    series: 4,
    reps: 8,
  },
];
