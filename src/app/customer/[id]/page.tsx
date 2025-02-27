'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Grid from '@mui/material/Grid2';
import { mockCustomers, Customer } from '../../../types/customer';
import { Box, Button, TextField, Typography } from '@mui/material';
import bgCover from '../../../assets/Cover.jpg';
import Image from 'next/image';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import '../customer-page-style.css';
import RecentDeals from '../_components/recent-deals';
import { HeaderModalType, useHeader } from '@/context/header-context';
import AlertSnackbar from '@/components/alert/alert';

export default function Page() {
  const { setTitle, setButtonTitle, setModalType } = useHeader();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'saved' | 'deleted'>('saved');
  const { id } = useParams();
  const customer: Customer | undefined = mockCustomers.find((cust) => cust.id.toString() === id);

  useEffect(() => {
    setTitle('Customers');
    setButtonTitle('Add New Customer');
    setModalType(HeaderModalType.newCustomer);
  }, [setTitle, setButtonTitle, setModalType]);

  if (!customer) {
    return (
      <div>
        <Typography variant="h6">Customer not found</Typography>
      </div>
    );
  }

  const handleDelete = () => {
    setSnackbarMessage('Customer Deleted');
    setSnackbarSeverity('deleted');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Grid container padding={0}>
        <Grid size={{ xs: 12, md: 8.5 }}>
          <Grid container className="customerContainer">
            <Grid container size={{ xs: 12, md: 12 }} paddingBottom={'24px'} position="relative" alignItems={'end'}>
              <Image src={bgCover} alt="Background Cover" sizes="100%" className="cover" />

              <Box position="absolute" margin={'24px'}>
                <Box borderRadius="50%" overflow="hidden" width={100} height={100}>
                  <Image src={customer.avatar} alt="Profile Picture" width={100} height={100} style={{ objectFit: 'cover' }} />
                </Box>

                <Button className="editButton">
                  <DriveFileRenameOutlineOutlinedIcon sx={{ width: '20px', height: '20px' }} />
                </Button>
              </Box>

              <Button className="deleteButton">
                <DeleteOutlineOutlinedIcon onClick={handleDelete} sx={{ width: '23px', height: '23px', padding: '15px' }} />
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
              <Grid container width={'100%'}>
                <Grid size={{ xs: 12, md: 12 }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography className="typography">First Name</Typography>
                      <TextField className="textField" type="text" value={customer.name?.split(' ')[0] || ''} variant="outlined" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography className="typography">Last Name</Typography>
                      <TextField className="textField" type="text" value={customer.name?.split(' ').pop() || ''} variant="outlined" fullWidth />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} marginTop={'24px'}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography className="typography">Email</Typography>
                      <TextField className="textField" type="email" value={customer.email} variant="outlined" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography className="typography">Phone </Typography>
                      <TextField className="textField" type="tel" value={customer.phone} variant="outlined" fullWidth />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} margin={'24px 0 24px 0'}>
                    <Grid size={{ xs: 12, md: 12 }}>
                      <Typography className="typography">Address </Typography>
                      <TextField className="textField" value={customer.street} type="text" variant="outlined" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                      <TextField className="textField" value={customer.city} type="text" variant="outlined" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <TextField className="textField" value={customer.state} type="text" variant="outlined" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <TextField className="textField" value={customer.zipCode} type="text" variant="outlined" fullWidth />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 3.5 }}>
          <RecentDeals />
        </Grid>
      </Grid>
      <AlertSnackbar open={snackbarOpen} message={snackbarMessage} severity={snackbarSeverity} onClose={handleSnackbarClose} />
    </>
  );
}
