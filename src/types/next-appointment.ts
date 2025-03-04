export type Appointment = {
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
  people: number;
};

export const mockNextAppointment: Appointment = {
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
  people: 10,
};
