export type Activity = {
  id: number;
  date: string;
  details: string;
  completed: boolean;
  image?: string;
  dealId: number;
};

export const mockActivity: Activity[] = [
  {
    id: 1,
    dealId: 3,
    date: '17 Nov 2021',
    details: 'Installation of the new air conditioning system',
    completed: true,
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 2,
    dealId: 10,
    date: '17 Nov 2021',
    details: 'System maintenance checkup',
    completed: false,
  },
  {
    id: 3,
    dealId: 3,
    date: '17 Nov 2021',
    details: 'System maintenance checkup',
    completed: false,
  },
  {
    id: 4,
    dealId: 10,
    date: '17 Nov 2021',
    details: 'Installation of the new air conditioning system',
    completed: true,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 5,
    dealId: 10,
    date: '17 Nov 2021',
    details: 'Installation of the new air conditioning system',
    completed: true,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 6,
    dealId: 10,
    date: '17 Nov 2021',
    details: 'Installation of the new air conditioning system',
    completed: true,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 7,
    dealId: 10,
    date: '17 Nov 2021',
    details: 'Installation of the new air conditioning system',
    completed: true,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 8,
    dealId: 3,
    date: '17 Nov 2021',
    details: 'Installation of the new air conditioning system',
    completed: true,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 9,
    dealId: 5,
    date: '17 Nov 2021',
    details: 'Installation of the new air conditioning system',
    completed: true,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 10,
    dealId: 10,
    date: '17 Nov 2021',
    details: 'Installation of the new air conditioning system',
    completed: true,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 11,
    dealId: 8,
    date: '17 Nov 2021',
    details: 'Installation of the new air conditioning system',
    completed: true,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
];
