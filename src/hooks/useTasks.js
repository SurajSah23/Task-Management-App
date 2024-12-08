import { useState, useEffect } from 'react';

// Custom Hook for managing tasks
export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a task
  const addTask = (title, description) => {
    const newTask = {
      id: crypto.randomUUID(), // generate a unique ID
      title,
      description,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  // Function to toggle the status of a task (pending/completed)
  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
        : task
    ));
  };

  // Function to delete a task by ID
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function to edit a task's title and description
  const editTask = (id, title, description) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title, description } : task
    ));
  };

  return { tasks, addTask, toggleTaskStatus, deleteTask, editTask };
};
