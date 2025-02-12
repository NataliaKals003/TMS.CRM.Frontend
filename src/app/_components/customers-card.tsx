import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Button } from '@mui/material';
import { mockCustomers, Customer } from '../types/customer';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

const EditIcon = <BorderColorOutlinedIcon style={{ color: '#7E92A2', height: '23px', width: '23px' }} />;

const CustomersCard = () => {
  return (
    <Card
      sx={{
        padding: 2,
        backgroundColor: '#EEF6FB',
        color: '#092C4C',
        boxShadow: 'none',
        borderRadius: 'none',
        border: 'none',
        margin: '0',
        cursor: 'pointer',
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

        <Box>
          {mockCustomers.slice(0, 3).map((customer: Customer) => (
            <Box key={customer.id} display="flex" alignItems="center" gap={2} marginBottom={2} paddingRight="8px">
              <Avatar src={customer.avatar} alt={customer.name} />
              <Box width="100%">
                <Typography variant="body1" style={{ fontWeight: 700, fontSize: 16 }}>
                  {customer.name}
                </Typography>
                <Typography variant="body2" style={{ color: '#7E92A2', fontWeight: 400, lineHeight: '27px' }}>
                  {customer.email}
                </Typography>
              </Box>
              <Box marginLeft={1}>{EditIcon}</Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomersCard;
