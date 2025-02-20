'use client';

import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Button } from '@mui/material';
import { mockCustomers, Customer } from '../types/customer';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { useRouter } from 'next/navigation';
import '../../styles/customer-card-style.css';

const EditIcon = <BorderColorOutlinedIcon style={{ color: '#7E92A2', height: '23px', width: '23px' }} />;

const CustomersCard = () => {
  const router = useRouter();

  const handleCustomerClick = () => {
    router.push('/customer');
  };

  return (
    <Card className="customerCard">
      <CardContent>
        <Box className="headerCustomerCard">
          <Typography className="titleHeader">Customers</Typography>
          <Button
            className="textButtonCounter"
            onClick={handleCustomerClick}
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
            <Box onClick={() => router.push(`customer/${customer.id}`)} key={customer.id} className="customer">
              <Avatar src={customer.avatar} alt={customer.name} />
              <Box width="100%">
                <Typography className="customerName">{customer.name}</Typography>
                <Typography className="customerEmail">{customer.email}</Typography>
              </Box>
              <Box className="editIcon" marginLeft={1}>
                {EditIcon}
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomersCard;
