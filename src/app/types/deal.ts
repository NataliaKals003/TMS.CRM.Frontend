export type Deal = {
  id: number;
  dealPicture: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  area: string;
  price: string;
  appointmentDate: string;
  status: 'CLOSE' | 'IN PROGRESS';
  details: string;
};

export const mockDeals: Deal[] = [
  {
    id: 1,
    dealPicture: 'https://randomuser.me/api/portraits/men/1.jpg',
    street: '319 Haul Road',
    city: 'Glenrock',
    state: 'PA',
    zipCode: '1234',
    area: '100',
    price: '5750',
    appointmentDate: 'Nov 14, 07:00 AM',
    status: 'IN PROGRESS',
    details: '',
  },
  {
    id: 2,
    dealPicture: 'https://randomuser.me/api/portraits/men/2.jpg',
    street: '47 Spruce Drive',
    city: 'Quantico',
    state: 'PA',
    zipCode: '1234',
    area: '100',
    price: '5750',
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'IN PROGRESS',
    details: '',
  },
  {
    id: 3,
    dealPicture: 'https://randomuser.me/api/portraits/men/3.jpg',
    street: '47 Spruce Drive',
    city: 'Quantico',
    state: 'PA',
    zipCode: '1234',
    area: '100',
    price: '5750',
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'IN PROGRESS',
    details: '',
  },
  {
    id: 4,
    dealPicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    street: '47 Spruce Drive',
    city: 'Quantico',
    state: 'PA',
    zipCode: '1234',
    area: '100',
    price: '5750',
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'IN PROGRESS',
    details: '',
  },
  {
    id: 5,
    dealPicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    street: '47 Spruce Drive',
    city: 'Quantico',
    state: 'PA',
    zipCode: '1234',
    area: '100',
    price: '5750',
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'CLOSE',
    details: '',
  },
  {
    id: 6,
    dealPicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    street: '47 Spruce Drive',
    city: 'Quantico',
    state: 'PA',
    zipCode: '1234',
    area: '100',
    price: '5750',
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'CLOSE',
    details: '',
  },
  {
    id: 7,
    dealPicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    street: '47 Spruce Drive',
    city: 'Quantico',
    state: 'PA',
    zipCode: '1234',
    area: '100',
    price: '5750',
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'CLOSE',
    details: '',
  },
  {
    id: 8,
    dealPicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    street: '47 Spruce Drive',
    city: 'Quantico',
    state: 'PA',
    zipCode: '1234',
    area: '100',
    price: '5750',
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'CLOSE',
    details: '',
  },
  {
    id: 9,
    dealPicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    street: '47 Spruce Drive',
    city: 'Quantico',
    state: 'PA',
    zipCode: '1234',
    area: '100',
    price: '5750',
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'CLOSE',
    details: '',
  },
  {
    id: 10,
    dealPicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    street: '47 Spruce Drive',
    city: 'Quantico',
    state: 'PA',
    zipCode: '1234',
    area: '100',
    price: '5750',
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'CLOSE',
    details: '',
  },
];
