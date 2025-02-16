export type Deal = {
  id: number;
  dealPicture: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  area: string;
  price: string;
  people: number;
  appointmentDate: string;
  status: 'CLOSE' | 'IN PROGRESS';
  details: string;
  customerId: number;
  roomAccess: string;
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
    people: 10,
    appointmentDate: 'Nov 14, 07:00 AM',
    status: 'IN PROGRESS',
    details: 'At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.',
    customerId: 3,
    roomAccess: 'Keys with doorman',
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
    people: 10,
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'IN PROGRESS',
    details: 'At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.',
    customerId: 2,
    roomAccess: 'Keys with doorman',
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
    people: 10,
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'IN PROGRESS',
    details: 'At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.',
    customerId: 3,
    roomAccess: 'Keys with doorman',
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
    people: 10,
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'IN PROGRESS',
    details: 'At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.',
    customerId: 4,
    roomAccess: 'Keys with doorman',
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
    people: 10,
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'CLOSE',
    details: 'At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.',
    customerId: 5,
    roomAccess: 'Keys with doorman',
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
    people: 10,
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'CLOSE',
    details: 'At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.',
    customerId: 6,
    roomAccess: 'Keys with doorman',
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
    people: 10,
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'CLOSE',
    details: 'At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.',
    customerId: 7,
    roomAccess: 'Keys with doorman',
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
    people: 10,
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'CLOSE',
    details: 'At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.',
    customerId: 8,
    roomAccess: 'Keys with doorman',
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
    people: 10,
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'CLOSE',
    details: 'At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.',
    customerId: 9,
    roomAccess: 'Keys with doorman',
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
    people: 10,
    appointmentDate: 'Nov 15, 08:00 AM',
    status: 'CLOSE',
    details: 'At risus viverra adipiscing at in tellus. Blandit massa enim nec dui nunc mattis. Lacus vel facilisis volutpat est velit.',
    customerId: 1,
    roomAccess: 'Keys with doorman',
  },
];
