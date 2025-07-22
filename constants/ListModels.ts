import { IconVariants } from "@/components";
import type { Ionicons } from "@expo/vector-icons";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

export type PredefinedModelType = {
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

type MuscleIntensity = {
  muscle: string;
  intensity: "heavy" | "moderate" | "medium";
};

export type MuscleListItemType = {
  id: number;
  icon: IoniconName;
  title: string;
  agonistMuscle: string;
  synergistMuscles: string[];
  muscleIntensity: MuscleIntensity[];
  series?: number;
  reps?: number;
};

export const exercisesList = [
  {
    "id": 1,
    "icon": "barbell-outline",
    "title": "Barbell Bench Press",
    "agonistMuscle": "Chest",
    "synergistMuscles": [
      "Chest",
      "Shoulders",
      "Triceps"
    ],
    "muscleIntensity": [
      {
        "muscle": "Chest",
        "intensity": "heavy"
      },
      {
        "muscle": "Triceps",
        "intensity": "moderate"
      },
      {
        "muscle": "Shoulders",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 2,
    "icon": "barbell-outline",
    "title": "Dumbbell Bench Press",
    "agonistMuscle": "Chest",
    "synergistMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "muscleIntensity": [
      {
        "muscle": "Chest",
        "intensity": "moderate"
      },
      {
        "muscle": "Triceps",
        "intensity": "moderate"
      },
      {
        "muscle": "Shoulders",
        "intensity": "medium"
      }
    ],
  },
  {
    "id": 3,
    "icon": "barbell-outline",
    "title": "Incline Barbell Press",
    "agonistMuscle": "Chest",
    "synergistMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "muscleIntensity": [
      {
        "muscle": "Chest",
        "intensity": "heavy"
      },
      {
        "muscle": "Shoulders",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 4,
    "icon": "barbell-outline",
    "title": "Incline Dumbbell Press",
    "agonistMuscle": "Chest",
    "synergistMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "muscleIntensity": [
      {
        "muscle": "Chest",
        "intensity": "moderate"
      },
      {
        "muscle": "Shoulders",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 5,
    "icon": "barbell-outline",
    "title": "Chest Fly Machine",
    "agonistMuscle": "Chest",
    "synergistMuscles": [
      "Shoulders"
    ],
    "muscleIntensity": [
      {
        "muscle": "Chest",
        "intensity": "moderate"
      },
      {
        "muscle": "Shoulders",
        "intensity": "medium"
      }
    ],
  },
  {
    "id": 6,
    "icon": "barbell-outline",
    "title": "Deadlift",
    "agonistMuscle": "Back",
    "synergistMuscles": [
      "Legs",
      "Glutes"
    ],
    "muscleIntensity": [
      {
        "muscle": "Back",
        "intensity": "heavy"
      },
      {
        "muscle": "Legs",
        "intensity": "moderate"
      },
      {
        "muscle": "Glutes",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 7,
    "icon": "barbell-outline",
    "title": "Barbell Row",
    "agonistMuscle": "Back",
    "synergistMuscles": [
      "Biceps",
      "Shoulders"
    ],
    "muscleIntensity": [
      {
        "muscle": "Back",
        "intensity": "heavy"
      },
      {
        "muscle": "Biceps",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 8,
    "icon": "barbell-outline",
    "title": "Lat Pulldown",
    "agonistMuscle": "Back",
    "synergistMuscles": [
      "Biceps"
    ],
    "muscleIntensity": [
      {
        "muscle": "Back",
        "intensity": "moderate"
      },
      {
        "muscle": "Biceps",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 9,
    "icon": "barbell-outline",
    "title": "Seated Cable Row",
    "agonistMuscle": "Back",
    "synergistMuscles": [
      "Biceps",
      "Shoulders"
    ],
    "muscleIntensity": [
      {
        "muscle": "Back",
        "intensity": "moderate"
      },
      {
        "muscle": "Biceps",
        "intensity": "medium"
      }
    ],
  },
  {
    "id": 10,
    "icon": "barbell-outline",
    "title": "T-Bar Row",
    "agonistMuscle": "Back",
    "synergistMuscles": [
      "Biceps",
      "Shoulders"
    ],
    "muscleIntensity": [
      {
        "muscle": "Back",
        "intensity": "heavy"
      },
      {
        "muscle": "Biceps",
        "intensity": "medium"
      }
    ],
  },
  {
    "id": 11,
    "icon": "barbell-outline",
    "title": "Dumbbell Shoulder Press",
    "agonistMuscle": "Shoulders",
    "synergistMuscles": [
      "Triceps"
    ],
    "muscleIntensity": [
      {
        "muscle": "Shoulders",
        "intensity": "heavy"
      },
      {
        "muscle": "Triceps",
        "intensity": "medium"
      }
    ],
  },
  {
    "id": 12,
    "icon": "barbell-outline",
    "title": "Lateral Raise",
    "agonistMuscle": "Shoulders",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Shoulders",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 13,
    "icon": "barbell-outline",
    "title": "Front Raise",
    "agonistMuscle": "Shoulders",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Shoulders",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 14,
    "icon": "barbell-outline",
    "title": "Reverse Pec Deck",
    "agonistMuscle": "Shoulders",
    "synergistMuscles": [
      "Back"
    ],
    "muscleIntensity": [
      {
        "muscle": "Shoulders",
        "intensity": "moderate"
      },
      {
        "muscle": "Back",
        "intensity": "medium"
      }
    ],
  },
  {
    "id": 15,
    "icon": "barbell-outline",
    "title": "Arnold Press",
    "agonistMuscle": "Shoulders",
    "synergistMuscles": [
      "Triceps"
    ],
    "muscleIntensity": [
      {
        "muscle": "Shoulders",
        "intensity": "heavy"
      },
      {
        "muscle": "Triceps",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 16,
    "icon": "barbell-outline",
    "title": "Barbell Squat",
    "agonistMuscle": "Legs",
    "synergistMuscles": [
      "Glutes",
      "Quads"
    ],
    "muscleIntensity": [
      {
        "muscle": "Legs",
        "intensity": "heavy"
      },
      {
        "muscle": "Quads",
        "intensity": "heavy"
      },
      {
        "muscle": "Glutes",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 17,
    "icon": "barbell-outline",
    "title": "Leg Press",
    "agonistMuscle": "Legs",
    "synergistMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "muscleIntensity": [
      {
        "muscle": "Legs",
        "intensity": "heavy"
      },
      {
        "muscle": "Glutes",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 18,
    "icon": "barbell-outline",
    "title": "Leg Extension",
    "agonistMuscle": "Quads",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Quads",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 19,
    "icon": "barbell-outline",
    "title": "Leg Curl",
    "agonistMuscle": "Hamstrings",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Hamstrings",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 20,
    "icon": "barbell-outline",
    "title": "Lunges",
    "agonistMuscle": "Legs",
    "synergistMuscles": [
      "Glutes",
      "Quads"
    ],
    "muscleIntensity": [
      {
        "muscle": "Legs",
        "intensity": "moderate"
      },
      {
        "muscle": "Glutes",
        "intensity": "moderate"
      },
      {
        "muscle": "Quads",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 21,
    "icon": "barbell-outline",
    "title": "Barbell Curl",
    "agonistMuscle": "Biceps",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Biceps",
        "intensity": "heavy"
      }
    ],
  },
  {
    "id": 22,
    "icon": "barbell-outline",
    "title": "Dumbbell Curl",
    "agonistMuscle": "Biceps",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Biceps",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 23,
    "icon": "barbell-outline",
    "title": "Concentration Curl",
    "agonistMuscle": "Biceps",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Biceps",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 24,
    "icon": "barbell-outline",
    "title": "Hammer Curl",
    "agonistMuscle": "Biceps",
    "synergistMuscles": [
      "Forearms"
    ],
    "muscleIntensity": [
      {
        "muscle": "Biceps",
        "intensity": "moderate"
      },
      {
        "muscle": "Forearms",
        "intensity": "medium"
      }
    ],
  },
  {
    "id": 25,
    "icon": "barbell-outline",
    "title": "Preacher Curl",
    "agonistMuscle": "Biceps",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Biceps",
        "intensity": "heavy"
      }
    ],
  },
  {
    "id": 26,
    "icon": "barbell-outline",
    "title": "Triceps Pushdown",
    "agonistMuscle": "Triceps",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Triceps",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 27,
    "icon": "barbell-outline",
    "title": "Overhead Dumbbell Extension",
    "agonistMuscle": "Triceps",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Triceps",
        "intensity": "heavy"
      }
    ],
  },
  {
    "id": 28,
    "icon": "barbell-outline",
    "title": "Close Grip Bench Press",
    "agonistMuscle": "Triceps",
    "synergistMuscles": [
      "Chest",
      "Shoulders"
    ],
    "muscleIntensity": [
      {
        "muscle": "Triceps",
        "intensity": "heavy"
      },
      {
        "muscle": "Chest",
        "intensity": "medium"
      }
    ],
  },
  {
    "id": 29,
    "icon": "barbell-outline",
    "title": "Skull Crushers",
    "agonistMuscle": "Triceps",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Triceps",
        "intensity": "heavy"
      }
    ],
  },
  {
    "id": 30,
    "icon": "barbell-outline",
    "title": "Kickbacks",
    "agonistMuscle": "Triceps",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Triceps",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 31,
    "icon": "barbell-outline",
    "title": "Crunches",
    "agonistMuscle": "Abs",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Abs",
        "intensity": "moderate"
      }
    ],
  },
  {
    "id": 32,
    "icon": "barbell-outline",
    "title": "Leg Raises",
    "agonistMuscle": "Abs",
    "synergistMuscles": [
      "Hip Flexors"
    ],
    "muscleIntensity": [
      {
        "muscle": "Abs",
        "intensity": "moderate"
      },
      {
        "muscle": "Hip Flexors",
        "intensity": "medium"
      }
    ],
  },
  {
    "id": 33,
    "icon": "barbell-outline",
    "title": "Plank",
    "agonistMuscle": "Abs",
    "synergistMuscles": [
      "Back",
      "Shoulders"
    ],
    "muscleIntensity": [
      {
        "muscle": "Abs",
        "intensity": "moderate"
      },
      {
        "muscle": "Back",
        "intensity": "medium"
      }
    ],
  },
  {
    "id": 34,
    "icon": "barbell-outline",
    "title": "Russian Twist",
    "agonistMuscle": "Abs",
    "synergistMuscles": [
      "Obliques"
    ],
    "muscleIntensity": [
      {
        "muscle": "Abs",
        "intensity": "moderate"
      },
      {
        "muscle": "Obliques",
        "intensity": "medium"
      }
    ],
  },
  {
    "id": 35,
    "icon": "barbell-outline",
    "title": "Cable Crunch",
    "agonistMuscle": "Abs",
    "synergistMuscles": [],
    "muscleIntensity": [
      {
        "muscle": "Abs",
        "intensity": "heavy"
      }
    ],
  }
]