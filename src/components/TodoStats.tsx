import React from 'react';
import { CheckCircle, Circle, Target } from 'lucide-react';

interface TodoStatsProps {
  totalTodos: number;
  completedTodos: number;
  activeTodos: number;
}

export const TodoStats: React.FC<TodoStatsProps> = ({
  totalTodos,
  completedTodos,
  activeTodos,
}) => {
  const completionRate = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="glass-effect rounded-xl p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <Target className="text-blue-500" size={24} />
        </div>
        <div className="text-2xl font-bold text-gray-800">{totalTodos}</div>
        <div className="text-sm text-gray-600">Total Tasks</div>
      </div>
      
      <div className="glass-effect rounded-xl p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <Circle className="text-orange-500" size={24} />
        </div>
        <div className="text-2xl font-bold text-gray-800">{activeTodos}</div>
        <div className="text-sm text-gray-600">Active</div>
      </div>
      
      <div className="glass-effect rounded-xl p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <CheckCircle className="text-green-500" size={24} />
        </div>
        <div className="text-2xl font-bold text-gray-800">{completionRate}%</div>
        <div className="text-sm text-gray-600">Completed</div>
      </div>
    </div>
  );
};