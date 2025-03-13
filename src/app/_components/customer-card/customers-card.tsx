'use client';

import { Card, CardContent, Typography, Box, Avatar, Button } from '@mui/material';
import { mockCustomers, Customer } from '../../../types/customer';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { useRouter } from 'next/navigation';
import './customer-card.css';
import { PeopleAltOutlined } from '@mui/icons-material';

const EditIcon = <DriveFileRenameOutlineOutlinedIcon className="edit-icon-customer-card" />;

const CustomersCard = () => {
  const router = useRouter();

  const hasCustomers = mockCustomers.length > 0;

  if (!hasCustomers) {
    return (
      <Card
        className="customer-card"
        sx={{
          height: { xs: 290, sm: 350, md: 400 },
        }}
      >
        <CardContent>
          <Box className="header-customer-card">
            <Typography className="title-header-customer-card">Customers</Typography>
          </Box>

          <Box className="not-found-customer-card">
            <PeopleAltOutlined className="icon-not-found-card" />
            <Typography>No customers found.</Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }

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
              <Avatar src={customer.avatar} alt={`${customer.firstName} ${customer.lastName}`} />
              <Box width="100%">
                <Typography className="customer-name-customer-card">
                  {customer.firstName} {customer.lastName}
                </Typography>
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
