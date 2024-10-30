import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import { ExerciseType, ExerciseEntry, calculateCalories } from './utils/calculator';
import { ExerciseForm } from './components/ExerciseForm';
import { ExerciseList } from './components/ExerciseList';

function App() {
  const [weight, setWeight] = useState<number>(70);
  const [duration, setDuration] = useState<number>(30);
  const [exercise, setExercise] = useState<ExerciseType>('running');
  const [entries, setEntries] = useState<ExerciseEntry[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAdd = () => {
    const newEntry: ExerciseEntry = {
      exercise,
      duration,
      calories: calculateCalories(weight, duration, exercise),
    };

    if (editIndex !== null) {
      const newEntries = [...entries];
      newEntries[editIndex] = newEntry;
      setEntries(newEntries);
      setEditIndex(null);
    } else {
      setEntries([...entries, newEntry]);
    }

    setDuration(30);
    setExercise('running');
  };

  const handleEdit = (index: number) => {
    const entry = entries[index];
    setExercise(entry.exercise);
    setDuration(entry.duration);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Calculadora de Ejercicio Diario
          </h1>
          <p className="text-gray-400 text-lg">
            Lleva un registro de las calorías que quemas en tus entrenamientos diarios
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
            {/* Weight Input */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-gray-300 mb-2">
                <Scale className="w-5 h-5 text-purple-400" />
                <span>Tu Peso (kg)</span>
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full md:w-1/3 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Exercise Form */}
            <ExerciseForm
              duration={duration}
              exercise={exercise}
              onDurationChange={setDuration}
              onExerciseChange={setExercise}
              onAdd={handleAdd}
            />

            {/* Exercise List */}
            <div className="mt-8">
              <ExerciseList
                entries={entries}
                onEdit={handleEdit}
                onDelete={handleDelete}
                weight={weight}
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="font-semibold mb-2 text-purple-400">¿Cómo funciona?</h3>
              <p className="text-gray-400 text-sm">
                Agrega tus ejercicios uno a uno para ver cuántas calorías quemas cada día usando los valores MET.
              </p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="font-semibold mb-2 text-purple-400">Precisión</h3>
              <p className="text-gray-400 text-sm">
                Los resultados son aproximados y pueden variar según factores personales e intensidad del ejercicio.
              </p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="font-semibold mb-2 text-purple-400">Consejos</h3>
              <p className="text-gray-400 text-sm">
                Mantén un registro de tus ejercicios diarios para seguir una rutina constante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;