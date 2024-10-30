export type ExerciseType = keyof typeof exercises;

interface Exercise {
  name: string;
  met: number;
}

export interface ExerciseEntry {
  exercise: ExerciseType;
  duration: number;
  calories: number;
}

export const exercises: Record<string, Exercise> = {
  running: { name: 'Correr', met: 9.8 },
  cycling: { name: 'Ciclismo', met: 7.5 },
  swimming: { name: 'Nadar', met: 8.3 },
  walking: { name: 'Caminar', met: 3.5 },
  weightLifting: { name: 'Levantamiento de Pesas', met: 6.0 },
  yoga: { name: 'Yoga', met: 2.5 },
  hiit: { name: 'Entrenamiento HIIT', met: 8.0 },
  dancing: { name: 'Bailar', met: 4.8 },
  boxing: { name: 'Boxeo', met: 7.8 },
};

export const calculateCalories = (
  weight: number,
  duration: number,
  exerciseType: ExerciseType
): number => {
  const met = exercises[exerciseType].met;
  return (duration / 60) * met * weight;
};