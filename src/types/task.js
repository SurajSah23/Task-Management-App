// Creating a Task Object without TypeScript

const createTask = (title, description) => {
    return {
      id: crypto.randomUUID(),          // Generate a unique ID for the task
      title: title,                     // Task title
      description: description,         // Task description
      status: 'pending',                // Task status can be 'pending' or 'completed'
      createdAt: new Date().toISOString() // Task creation date
    };
  };
  
  // Example usage:
  const newTask = createTask('New Task', 'This is a task description');
  console.log(newTask);
  