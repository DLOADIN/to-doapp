import React from 'react';
import { Trash2, Calendar } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="todo-item glass-effect rounded-xl p-4 mb-3 animate-slide-in">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="checkbox-custom"
        />
        
        <div className="flex-1 min-w-0">
          <p
            className={`text-lg transition-all duration-300 ${
              todo.completed
                ? 'text-gray-500 line-through'
                : 'text-gray-800'
            }`}
          >
            {todo.text}
          </p>
          <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
            <Calendar size={12} />
            <span>{formatDate(todo.createdAt)}</span>
          </div>
        </div>
        
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all duration-200 hover:scale-110"
          aria-label="Delete todo"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};