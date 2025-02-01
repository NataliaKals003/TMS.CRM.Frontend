import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';

const CustomersCard = () => {
  const customers = [
    {
      name: 'Deanna Annis',
      email: 'deannannis@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'Andrea Willis',
      email: 'andreavillis@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Brent Rodrigues',
      email: 'brodrigues@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  ];

  return (
    <Card
      sx={{
        padding: 2,
        backgroundColor: '#EEF6FB',
        color: '#092C4C',
        boxShadow: 'none',
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={3}>
          <Typography variant="h5" component="div" style={{ fontWeight: 700, fontSize: 18 }}>
            Customers
          </Typography>
          <Typography variant="body2" style={{ color: '#7E92A2', fontWeight: 500, cursor: 'pointer' }}>
            View All
          </Typography>
        </Box>

        {customers.map((customer, index) => (
          <Box key={index} display="flex" alignItems="center" gap={2} marginBottom={2}>
            <Avatar src={customer.avatar} alt={customer.name} />
            <Box>
              <Typography variant="body1" style={{ fontWeight: 700, fontSize: 16 }}>
                {customer.name}
              </Typography>
              <Typography variant="body2" style={{ color: '#7E92A2', fontWeight: 400 }}>
                {customer.email}
              </Typography>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default CustomersCard;
