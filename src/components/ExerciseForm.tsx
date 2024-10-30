import React from 'react';
import { Dumbbell, Clock3 } from 'lucide-react';
import { ExerciseType, exercises } from '../utils/calculator';

interface ExerciseFormProps {
  duration: number;
  exercise: ExerciseType;
  onDurationChange: (duration: number) => void;
  onExerciseChange: (exercise: ExerciseType) => void;
  onAdd: () => void;
}

export function ExerciseForm({
  duration,
  exercise,
  onDurationChange,
  onExerciseChange,
  onAdd,
}: ExerciseFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
      <div>
        <label className="flex items-center gap-2 text-gray-300 mb-2">
          <Dumbbell className="w-5 h-5 text-purple-400" />
          <span>Tipo de Ejercicio</span>
        </label>
        <select
          value={exercise}
          onChange={(e) => onExerciseChange(e.target.value as ExerciseType)}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        >
          {Object.entries(exercises).map(([key, { name }]) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2 text-gray-300 mb-2">
          <Clock3 className="w-5 h-5 text-purple-400" />
          <span>Duración (minutos)</span>
        </label>
        <input
          type="number"
          value={duration}
          onChange={(e) => onDurationChange(Number(e.target.value))}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
      </div>

      <button
        onClick={onAdd}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
      >
        Agregar Ejercicio
      </button>
    </div>
  );
}