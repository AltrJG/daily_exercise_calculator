import React from 'react';
import { Pencil, Trash2, Dumbbell, Clock3 } from 'lucide-react';
import { ExerciseEntry, exercises } from '../utils/calculator';

interface ExerciseListProps {
  entries: ExerciseEntry[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  weight: number;
}

export function ExerciseList({ entries, onEdit, onDelete, weight }: ExerciseListProps) {
  return (
    <div className="space-y-4">
      {entries.map((entry, index) => (
        <div
          key={index}
          className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Dumbbell className="w-5 h-5 text-purple-400" />
              <span className="text-lg font-semibold text-white">
                {exercises[entry.exercise].name}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock3 className="w-4 h-4" />
              <span>{entry.duration} minutes</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                {entry.calories.toFixed(0)}
              </div>
              <div className="text-sm text-gray-400">calories</div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(index)}
                className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Pencil className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDelete(index)}
                className="p-2 text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {entries.length > 0 && (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mt-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-300">Total Calories Burned</span>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              {entries.reduce((sum, entry) => sum + entry.calories, 0).toFixed(0)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}