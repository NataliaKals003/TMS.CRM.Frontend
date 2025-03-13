export type Task = {
  id: number;
  dueDate: string;
  description: string;
  complete: boolean;
};

export const mockTasks: Task[] = [
  {
    id: 1,
    dueDate: '2025-02-20T10:30:00.000Z',
    description: 'Description goes here',
    complete: false,
  },
  {
    id: 2,
    dueDate: '2025-02-19T10:30:00.000Z',
    description: 'Web conference agenda (overdue)',
    complete: true,
  },
  {
    id: 3,
    dueDate: '2026-02-24T10:30:00.000Z',
    description: 'Meeting with partners',
    complete: false,
  },
  {
    id: 4,
    dueDate: '2025-02-19T10:30:00.000Z',
    description: 'Add new services',
    complete: true,
  },
  {
    id: 5,
    dueDate: '2022-11-24T10:30:00.000Z',
    description: 'Upload new legals (terms & conditions)',
    complete: false,
  },
  {
    id: 6,
    dueDate: '2026-11-24T10:30:00.000Z',
    description: 'Description goes here',
    complete: true,
  },
  {
    id: 7,
    dueDate: '2026-02-24T10:30:00.000Z',
    description: 'Sales report due',
    complete: false,
  },
  {
    id: 8,
    dueDate: '2026-02-24T10:30:00.000Z',
    description: 'Sales report due',
    complete: false,
  },
  {
    id: 9,
    dueDate: '2026-02-24T10:30:00.000Z',
    description: 'Sales report due',
    complete: false,
  },
  {
    id: 10,
    dueDate: '2026-02-24T10:30:00.000Z',
    description: 'Sales report due',
    complete: true,
  },
];
