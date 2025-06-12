import React from 'react';
import { CheckSquare, Trash2 } from 'lucide-react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { TodoFilter } from './components/TodoFilter';
import { TodoStats } from './components/TodoStats';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    todos,
    filter,
    todoCount,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    setFilter,
  } = useTodos();

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl">
              <CheckSquare className="text-white" size={32} />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Todo App
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Stay organized and get things done
          </p>
        </div>

        {/* Stats */}
        <TodoStats
          totalTodos={todoCount.all}
          completedTodos={todoCount.completed}
          activeTodos={todoCount.active}
        />

        {/* Input */}
        <TodoInput onAddTodo={addTodo} />

        {/* Filter */}
        <TodoFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          todoCount={todoCount}
        />

        {/* Todo List */}
        <div className="mb-6">
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <CheckSquare size={64} className="mx-auto opacity-50" />
              </div>
              <p className="text-gray-500 text-lg">
                {filter === 'completed' && todoCount.completed === 0
                  ? 'No completed tasks yet'
                  : filter === 'active' && todoCount.active === 0
                  ? 'No active tasks'
                  : 'No tasks yet. Add one above!'}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          )}
        </div>

        {/* Clear Completed Button */}
        {todoCount.completed > 0 && (
          <div className="text-center">
            <button
              onClick={clearCompleted}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <Trash2 size={18} />
              Clear Completed ({todoCount.completed})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;