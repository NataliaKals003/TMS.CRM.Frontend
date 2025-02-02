import React from 'react';
import NextAppointmentCard from '../components/next-appointment-card';
import RecentDealsCard from '../components/recent-deals-card';
import CustomersCard from '../components/customers-card';
import { Box } from '@mui/material';
import CounterCard from '@/components/counter-card';
import IconCustomers from '../../public/IconCustomers.png';
import IconDeals from '../../public/IconDeals.png';

const Home: React.FC = () => {
  return (
    <main>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          overflowX: 'auto',
        }}
      >
        <NextAppointmentCard date="Nov 18 2021, 17:00" roomArea={100} street={'319 Haul  Road'} city={'WY 1234'} price={'$5750'} people={10} />
        <RecentDealsCard />
        <CustomersCard />
      </Box>
      <Box>
        <CounterCard title={'Customers'} count={'78'} iconCounter={IconCustomers} />
        <CounterCard title={'Deals'} count={'136'} iconCounter={IconDeals} />
      </Box>
    </main>
  );
};

export default Home;
