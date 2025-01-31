import React from 'react'
import NextAppointmentCard from '../components/next-appointment-card'
import RecentDealsCard from '../components/recent-deals-card'

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'auto',
        paddingBottom: '10px',
      }}
    >
      <NextAppointmentCard
        date="Nov 18 2021, 17:00"
        roomArea={100}
        street={'319 Haul  Road'}
        city={'WY 1234'}
        price={'$5750'}
        people={10}
      />

      <RecentDealsCard />
      {/* <NextAppointmentCard /> */}
      {/* <NextAppointmentCard /> */}
    </div>
  )
}

export default Home
