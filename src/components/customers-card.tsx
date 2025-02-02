import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Button } from '@mui/material';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

const EditIcon = <BorderColorOutlinedIcon style={{ color: '#7E92A2', height: '23px', width: '23px' }} />;

const CustomersCard = () => {
  const customers = [
    {
      name: 'Deanna Annis',
      email: 'deannannis@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      icon: EditIcon,
    },
    {
      name: 'Andrea Willis',
      email: 'andreavillis@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      icon: EditIcon,
    },
    {
      name: 'Brent Rodrigues',
      email: 'brodrigues@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      icon: EditIcon,
    },
  ];

  return (
    <Card
      sx={{
        padding: 2,
        width: 385,
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
          <Button
            variant="text"
            color="primary"
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
              },
            }}
          >
            View All
          </Button>
        </Box>

        {customers.map((customer, index) => (
          <Box key={index} display="flex" alignItems="center" gap={2} marginBottom={2}>
            <Avatar src={customer.avatar} alt={customer.name} />
            <Box width="100%">
              <Typography variant="body1" style={{ fontWeight: 700, fontSize: 16 }}>
                {customer.name}
              </Typography>
              <Typography variant="body2" style={{ color: '#7E92A2', fontWeight: 400 }}>
                {customer.email}
              </Typography>
            </Box>
            <Box marginLeft={1}>{customer.icon}</Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default CustomersCard;
