export type Task = {
  id: number;
  dueDate: string;
  description: string;
  done: boolean;
};

export const mockTasks: Task[] = [
  {
    id: 1,
    dueDate: '20 Fev 2025',
    description: 'Description goes here',
    done: false,
  },
  {
    id: 2,
    dueDate: '19 Fev 2025',
    description: 'Web conference agenda (overdue)',
    done: true,
  },
  {
    id: 3,
    dueDate: '24 Fev 2025',
    description: 'Meeting with partners',
    done: false,
  },
  {
    id: 4,
    dueDate: '24 Nov 2022',
    description: 'Add new services',
    done: true,
  },
  {
    id: 5,
    dueDate: '24 Nov 2022',
    description: 'Upload new legals (terms & conditions)',
    done: false,
  },
  {
    id: 6,
    dueDate: '24 Nov 2022',
    description: 'Description goes here',
    done: true,
  },
  {
    id: 7,
    dueDate: '24 Nov 2022',
    description: 'Sales report due',
    done: false,
  },
];
