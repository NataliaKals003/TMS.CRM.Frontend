export type Task = {
  id: number;
  dueDate: string;
  description: string;
  done: boolean;
};

export const mockTasks: Task[] = [
  {
    id: 1,
    dueDate: '2025-02-20T10:30:00.000Z',
    description: 'Description goes here',
    done: false,
  },
  {
    id: 2,
    dueDate: '2025-02-19T10:30:00.000Z',
    description: 'Web conference agenda (overdue)',
    done: true,
  },
  {
    id: 3,
    dueDate: '2025-02-24T10:30:00.000Z',
    description: 'Meeting with partners',
    done: false,
  },
  {
    id: 4,
    dueDate: '2025-02-19T10:30:00.000Z',
    description: 'Add new services',
    done: true,
  },
  {
    id: 5,
    dueDate: '2022-11-24T10:30:00.000Z',
    description: 'Upload new legals (terms & conditions)',
    done: false,
  },
  {
    id: 6,
    dueDate: '2022-11-24T10:30:00.000Z',
    description: 'Description goes here',
    done: true,
  },
  {
    id: 7,
    dueDate: '2025-02-24T10:30:00.000Z',
    description: 'Sales report due',
    done: false,
  },
];
