'use client';

import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Button } from '@mui/material';
import { mockCustomers, Customer } from '../../../types/customer';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { useRouter } from 'next/navigation';
import './customer-card.css';

const EditIcon = <DriveFileRenameOutlineOutlinedIcon className="edit-icon-customer-card" />;

const CustomersCard = () => {
  const router = useRouter();

  const handleCustomerClick = () => {
    router.push('/customer');
  };

  return (
    <Card className="customer-card">
      <CardContent>
        <Box className="header-customer-card">
          <Typography className="title-header-customer-card">Customers</Typography>
          <Button
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
                <Typography className="customer-name-customer-card">{customer.name}</Typography>
                <Typography className="customer-email-customer-card">{customer.email}</Typography>
              </Box>
              <Box className=".edit-icon-customer-card" marginLeft={1}>
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
