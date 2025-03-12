export type Activity = {
  id: number;
  activityDate: string;
  description: string;
  image?: string;
  dealId: number;
};

export const mockActivity: Activity[] = [
  {
    id: 1,
    dealId: 3,
    activityDate: '17 Nov 2021',
    description: 'Installation of the new air conditioning system',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 2,
    dealId: 10,
    activityDate: '17 Nov 2021',
    description: 'System maintenance checkup',
  },
  {
    id: 3,
    dealId: 3,
    activityDate: '17 Nov 2021',
    description: 'System maintenance checkup',
  },
  {
    id: 4,
    dealId: 10,
    activityDate: '17 Nov 2021',
    description: 'Installation of the new air conditioning system',
    image: '',
  },
  {
    id: 5,
    dealId: 10,
    activityDate: '17 Nov 2021',
    description: 'Installation of the new air conditioning system',
    image: '',
  },
  {
    id: 6,
    dealId: 10,
    activityDate: '17 Nov 2021',
    description: 'Installation of the new air conditioning system',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 7,
    dealId: 10,
    activityDate: '17 Nov 2021',
    description: 'Installation of the new air conditioning system',
    image: '',
  },
  {
    id: 8,
    dealId: 3,
    activityDate: '17 Nov 2021',
    description: 'Installation of the new air conditioning system',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 9,
    dealId: 5,
    activityDate: '17 Nov 2021',
    description: 'Installation of the new air conditioning system',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 10,
    dealId: 10,
    activityDate: '17 Nov 2021',
    description: 'Installation of the new air conditioning system',
    image: '',
  },
  {
    id: 11,
    dealId: 8,
    activityDate: '17 Nov 2021',
    description: 'Installation of the new air conditioning system',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
];
