import React from 'react';
import NextAppointmentCard from './_components/next-appointment-card';
import RecentDealsCard from './_components/recent-deals-card';
import CustomersCard from './_components/customers-card';
import { Box } from '@mui/material';
import CounterCard from '@/app/_components/counter-card';
import IconCustomers from '../assets/icon-customer.png';
import IconDeals from '../assets/icon-deals.png';
import DealProgressCard from '@/app/_components/deal-progress-card';
import TaskCard from '@/components/task-card';

const Home: React.FC = () => {
  return (
    <main>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', paddingLeft: '24px', paddingTop: '24px' }}>
          <Box sx={{ display: 'flex', gap: '24px' }}>
            <NextAppointmentCard date="Nov 18 2021, 17:00" roomArea={100} street={'319 Haul Road'} city={'WY 1234'} price={'$5750'} people={10} />
            <RecentDealsCard />
          </Box>

          <Box sx={{ display: 'flex', gap: '24px' }}>
            <Box display={'flex'} flexDirection={'column'} gap={'24px'}>
              <CounterCard title={'Customers'} count={'78'} iconCounter={IconCustomers} />
              <CounterCard title={'Deals'} count={'136'} iconCounter={IconDeals} />
            </Box>

            <DealProgressCard />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CustomersCard />
          <TaskCard />
        </Box>
      </Box>
    </main>
  );
};

export default Home;
