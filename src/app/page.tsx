'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NextAppointmentCard from './_components/next-appointment-card/next-appointment-card';
import RecentDealsCard from './_components/recent-deals-card/recent-deals-card';
import CustomersCard from './_components/customer-card/customers-card';
import Grid from '@mui/material/Grid2';
import CounterCard from '@/app/_components/counter-card/counter-card';
import IconCustomers from '../assets/icon-customer.png';
import IconDeals from '../assets/icon-deals.png';
import DealProgressCard from '@/app/_components/deal-progress-card/deal-progress-card';
import TaskCard from '@/app/_components/task-card/task-card';
import { HeaderModalType, useHeader } from '@/context/header-context';

const Home: React.FC = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { setTitle, setButtonTitle, setModalType } = useHeader();

  useEffect(() => {
    setTitle('Dashboard');
    setButtonTitle('Add New');
    setModalType(HeaderModalType.generalAddNew);
  }, [setTitle, setButtonTitle, setModalType]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login');
    } else {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, [router]);

  if (loading) return <p>Loading...</p>;

  if (!isAuthenticated) return null;

  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 4, lg: 2.5 }} padding={'0 24px 24px 0'}>
        <Grid container>
          <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12 }}>
            <NextAppointmentCard />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12 }}>
            <CounterCard title="Customers" count="78" iconCounter={IconCustomers} />
            <CounterCard title="Deals" count="136" iconCounter={IconDeals} />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={{ xs: 12, md: 8, lg: 6 }} padding={'0 24px 24px 0'}>
        <RecentDealsCard />
        <DealProgressCard />
      </Grid>

      <Grid size={{ xs: 12, md: 12, lg: 3.5 }}>
        <CustomersCard />
        <TaskCard />
      </Grid>
    </Grid>
  );
};

export default Home;
