import React from 'react';
import NextAppointmentCard from './_components/next-appointment-card';
import RecentDealsCard from './_components/recent-deals-card';
import CustomersCard from './_components/customers-card';
import Grid from '@mui/material/Grid2';
import CounterCard from '@/app/_components/counter-card';
import IconCustomers from '../assets/icon-customer.png';
import IconDeals from '../assets/icon-deals.png';
import DealProgressCard from '@/app/_components/deal-progress-card';
import TaskCard from '@/app/_components/task-card';

const Home: React.FC = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 2.5 }} padding={'0 24px 24px 0'}>
        <NextAppointmentCard />
        <CounterCard title="Customers" count="78" iconCounter={IconCustomers} />
        <CounterCard title="Deals" count="136" iconCounter={IconDeals} />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} padding={'0 24px 24px 0'}>
        <RecentDealsCard />
        <DealProgressCard />
      </Grid>

      <Grid size={{ xs: 12, md: 3.5 }}>
        <CustomersCard />
        <TaskCard />
      </Grid>
    </Grid>
  );
};

export default Home;
