'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Grid from '@mui/material/Grid2';
import { mockCustomers, Customer } from '../../types/customer';
import { Box, Button, TextField, Typography } from '@mui/material';
import bgCover from '../../../assets/Cover.jpg';
import Image from 'next/image';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import '../../../styles/customer-page-style.css';
import RecentDeals from '../_components/recent-deals';

export default function Page() {
  const { id } = useParams();
  const customer: Customer | undefined = mockCustomers.find((cust) => cust.id.toString() === id);

  if (!customer) {
    return (
      <div>
        <Typography variant="h6">Customer not found</Typography>
      </div>
    );
  }

  return (
    <Grid container padding={0}>
      <Grid size={{ xs: 12, md: 8.5 }}>
        <Grid container>
          <Grid container size={{ xs: 12, md: 12 }} paddingBottom={'24px'} marginRight={'24px'} position="relative" alignItems={'end'}>
            <Image src={bgCover} alt="Background Cover" sizes="100%" className="cover" />

            <Box position="absolute" margin={'24px'}>
              <Box borderRadius="50%" overflow="hidden" width="100%" height="100%">
                <Image src={customer.avatar} alt="Profile Picture" width={100} height={100} style={{ objectFit: 'cover' }} />
              </Box>

              <Button className="editButton">
                <BorderColorOutlinedIcon sx={{ width: '20px', height: '20px' }} />
              </Button>
            </Box>

            <Button className="deleteButton">
              <DeleteOutlineOutlinedIcon sx={{ width: '23px', height: '23px', padding: '15px' }} />
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 12 }} marginRight={'24px'}>
            <Grid container width={'100%'}>
              <Grid size={{ xs: 12, md: 12 }}>
                <Box display={'flex'} marginBottom={'40px'} gap={'20px'}>
                  <Box display={'flex'} flexDirection={'column'} flex={1}>
                    <Typography className="typography">First Name</Typography>
                    <TextField className="textField" type="text" value={customer.name?.split(' ')[0] || ''} variant="outlined" fullWidth />
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography className="typography">Last Name</Typography>
                    <TextField className="textField" type="text" value={customer.name?.split(' ').pop() || ''} variant="outlined" fullWidth />
                  </Box>
                </Box>
                <Box display={'flex'} marginBottom={'40px'} gap={'20px'}>
                  <Box display={'flex'} flexDirection={'column'} flex={1}>
                    <Typography className="typography">Email</Typography>
                    <TextField className="textField" type="email" value={customer.email} variant="outlined" fullWidth />
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography className="typography">Phone </Typography>
                    <TextField className="textField" type="tel" value={customer.phone} variant="outlined" fullWidth />
                  </Box>
                </Box>

                <Box display={'flex'} marginBottom={'40px'}>
                  <Box marginTop={'0px'}>
                    <Typography className="typography">Address</Typography>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, md: 12 }}>
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
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={{ xs: 12, md: 3.5 }}>
        <RecentDeals />
      </Grid>
    </Grid>
  );
}
