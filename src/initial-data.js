const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Learn React' },
    'task-2': { id: 'task-2', content: 'Learn GraphQL' },
    'task-3': { id: 'task-3', content: 'Learn AWS' },
    'task-4': { id: 'task-4', content: 'Learn Python' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To-do',
      tasksId: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      tasksId: []
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      tasksId: []
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
};

export default initialData;
