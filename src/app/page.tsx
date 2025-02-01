import React from 'react';
import NextAppointmentCard from '../components/next-appointment-card';
import RecentDealsCard from '../components/recent-deals-card';
import CustomersCard from '../components/customers-card';

const Home: React.FC = () => {
  return (
    <main>
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          paddingBottom: '10px',
        }}
      >
        <NextAppointmentCard date="Nov 18 2021, 17:00" roomArea={100} street={'319 Haul  Road'} city={'WY 1234'} price={'$5750'} people={10} />
        <RecentDealsCard />
        <CustomersCard />
      </div>
    </main>
  );
};

export default Home;
