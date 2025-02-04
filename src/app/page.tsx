import React from 'react';
import NextAppointmentCard from '../components/next-appointment-card';
import RecentDealsCard from '../components/recent-deals-card';
import CustomersCard from '../components/customers-card';
import { Box } from '@mui/material';
import CounterCard from '@/components/counter-card';
import IconCustomers from '../../public/IconCustomers.png';
import IconDeals from '../../public/IconDeals.png';
import DealProgressCard from '@/components/deal-progress-card';
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
