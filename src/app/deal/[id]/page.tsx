import React from 'react';
import Grid from '@mui/material/Grid2';
import { mockCustomers, Customer } from '../../types/customer';
import { mockDeals, Deal } from '../../types/deal';
import { Avatar, Box, Button, Typography } from '@mui/material';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Image from 'next/image';
import '../../../styles/deal-page-style.css';
import RecordActivityCard from '../_components/activity-card';
import ActivityLogCard from '../_components/activity-log-card';

export default async function Page({ params }: { params: { id: string } }) {
  const dealId = params.id;
  const deal: Deal | undefined = mockDeals.find((d) => d.id.toString() === dealId);
  const customer: Customer | undefined = mockCustomers.find((cust) => cust.id === deal?.customerId);

  if (!deal) {
    return (
      <main>
        <Typography variant="h6">Deal not found</Typography>
      </main>
    );
  }

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
          <Grid size={{ xs: 12, md: 12 }} paddingBottom={'24px'} display={'flex'} alignItems={'center'} gap={2}>
            <Avatar src={customer.avatar} alt={customer.name} sx={{ height: '44px', width: '44px' }} />
            <Box display={'flex'} alignItems={'center'} width="100%">
              <Box display={'flex'} flexDirection={'column'} flex={1}>
                <Typography className="titleTypography">Customer</Typography>
                <Typography className="Typography">{customer.name}</Typography>
              </Box>
              <Box display={'flex'} flexDirection={'column'} flex={1}>
                <Typography className="titleTypography">Email</Typography>
                <Typography className="Typography">{customer.email}</Typography>
              </Box>
              <Box display={'flex'} flexDirection={'column'} flex={1}>
                <Typography className="titleTypography">Phone</Typography>
                <Typography className="Typography">{customer.phone}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 12 }}
            sx={{
              marginLeft: '-24px',
            }}
          >
            <Box
              sx={{
                padding: '24px 0 24px 24px',
                paddingLeft: '48px',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                left: '-24px',
                width: '100% ',
                bgcolor: '#FFFFFF',
              }}
            >
              <Box flex={1}>
                <Typography fontWeight={700} fontSize="28px" lineHeight="40px">
                  {deal.street},
                </Typography>
                <Typography fontWeight={700} fontSize="28px" lineHeight="40px">
                  {deal.city}, {deal.state} {deal.zipCode}
                </Typography>
              </Box>
              <Box>
                <Button
                  sx={{
                    color: '#7E92A2',
                    border: '1px solid #EAEEF4',
                    bgcolor: '#FFFFFF',
                    borderRadius: '50%',
                    marginRight: '20px',
                  }}
                >
                  <BorderColorOutlinedIcon sx={{ width: '23px', height: '23px', padding: '15px' }} />
                </Button>
                <Button
                  sx={{
                    color: '#7E92A2',
                    border: '1px solid #EAEEF4',
                    bgcolor: '#FFFFFF',
                    borderRadius: '50%',
                    marginRight: '24px',
                  }}
                >
                  <DeleteOutlineOutlinedIcon sx={{ width: '23px', height: '23px', padding: '15px' }} />
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 12 }}>
            <Grid container width={'100%'}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Box display={'flex'} marginBottom={'40px'}>
                  <Box display={'flex'} flexDirection={'column'} flex={1}>
                    <Typography className="titleTypography">Progress</Typography>
                    <Typography className="Typography">{deal.status.charAt(0).toUpperCase() + deal.status.slice(1).toLowerCase()}</Typography>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'} flex={1}>
                    <Typography className="titleTypography">Appointment Date</Typography>
                    <Typography className="Typography">{deal.appointmentDate}</Typography>
                  </Box>
                </Box>
                <Box display={'flex'} marginBottom={'40px'}>
                  <Box display={'flex'} flexDirection={'column'} flex={1}>
                    <Typography className="titleTypography">Room Area</Typography>
                    <Typography className="Typography">{deal.area} M&sup2;</Typography>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'} flex={1}>
                    <Typography className="titleTypography">Number of people</Typography>
                    <Typography className="Typography">{deal.people}</Typography>
                  </Box>
                </Box>
                <Box display={'flex'} marginBottom={'40px'}>
                  <Box display={'flex'} flexDirection={'column'} flex={1}>
                    <Typography className="titleTypography">Price</Typography>
                    <Typography className="Typography">{deal.price}</Typography>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'} flex={1}>
                    <Typography className="titleTypography">Room Access</Typography>
                    <Typography className="Typography">{deal.roomAccess}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Typography className="titleTypography">Special Instructions</Typography>
                    <Typography lineHeight={'30px'} fontWeight={500} fontSize={'16px'} color="#526477">
                      {deal.details}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Image src={deal.dealPicture} alt="Deal" width={320} height={320} style={{ borderRadius: '12%' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={{ xs: 12, md: 3.5 }}>
        <RecordActivityCard />
        <ActivityLogCard />
      </Grid>
    </Grid>
  );
}
