export type ActivityLog = {
  id: number;
  date: string;
  details: string;
  completed: boolean;
  image?: string;
};

export const mockActivityLog: ActivityLog[] = [
  {
    id: 1,
    date: '17 Nov 2021',
    details: 'Installation of the new air conditioning system',
    completed: true,
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 2,
    date: '17 Nov 2021',
    details: 'System maintenance checkup',
    completed: false,
  },
  {
    id: 3,
    date: '17 Nov 2021',
    details: 'System maintenance checkup',
    completed: false,
  },
  {
    id: 4,
    date: '17 Nov 2021',
    details: 'Installation of the new air conditioning system',
    completed: true,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
];
