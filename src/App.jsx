import { TaskForm } from './components/TaskForm';
import TaskList from './components/TaskList';
import { useTasks } from './hooks/useTasks';
import { ClipboardList } from 'lucide-react';

function App() {
  const { tasks, addTask, toggleTaskStatus, deleteTask, editTask } = useTasks();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <ClipboardList className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
          <p className="mt-2 text-gray-600">Organize your tasks efficiently</p>
        </div>

        <div className="mb-8">
          <TaskForm onSubmit={addTask} />
        </div>

        {tasks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No tasks yet. Add your first task above!</p>
          </div>
        ) : (
          <TaskList
            tasks={tasks}
            onToggle={toggleTaskStatus}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
