import { useState } from 'react';
import PropTypes from 'prop-types'; 
import { Trash2, Edit, Check, X } from 'lucide-react';

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);

  const handleSave = () => {
    if (editTitle.trim()) {
      onEdit(task.id, editTitle, editDescription);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md space-y-3">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          className="w-full p-2 border rounded"
          rows={2}
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSave}
            className="p-1 text-green-600 hover:text-green-800"
          >
            <Check className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="p-1 text-red-600 hover:text-red-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md ${task.status === 'completed' ? 'opacity-75' : ''}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className={`text-lg font-medium ${task.status === 'completed' ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </h3>
          <p className="text-gray-600 mt-1">{task.description}</p>
          <p className="text-sm text-gray-400 mt-2">
            {new Date(task.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onToggle(task.id)}
            className={`p-1 ${task.status === 'completed' ? 'text-green-600' : 'text-gray-400'} hover:text-green-800`}
          >
            <Check className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-blue-600 hover:text-blue-800"
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-1 text-red-600 hover:text-red-800"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TaskItem;
