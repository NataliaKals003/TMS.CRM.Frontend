'use client';

import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { mockCustomers, Customer } from '../../../types/customer';
import { mockDeals, Deal } from '../../../types/deal';
import { Avatar, Box, Button, Typography } from '@mui/material';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Image from 'next/image';
import '../deal-page.css';
import './page.css';
import ActivityFormCard from '../_components/activity-form-card/activity-form-card';
import ActivityLogCard from '../_components/activity-log-card/activity-card';
import AlertSnackbar from '@/components/alert-snackbar/alert-snackbar';
import { useParams } from 'next/navigation';
import DealModal from '@/components/deal-form-modal/deal-form-modal';
import { useHeader } from '@/context/header-context';
import '@/types/activity-log';
import { ActivityLog } from '@/types/activity-log';

export default function Page() {
  const { setTitle, setButtonTitle } = useHeader();

  useEffect(() => {
    setTitle('Deal Details');

    if (setButtonTitle) {
      setButtonTitle(undefined);
    }
  }, [setTitle, setButtonTitle]);

  const { id } = useParams();

  const [deal, setDeal] = useState<Deal | undefined>(undefined);
  const [customer, setCustomer] = useState<Customer | undefined>(undefined);
  const [editDealOpen, setEditDealOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'saved' | 'deleted'>('saved');

  useEffect(() => {
    const fetchDealAndCustomer = async () => {
      const selectedDeal = mockDeals.find((d) => d.id === Number(id));
      setDeal(selectedDeal);

      if (selectedDeal) {
        const selectedCustomer = mockCustomers.find((cust) => cust.id === selectedDeal.customerId);
        setCustomer(selectedCustomer);
      }
    };

    if (id) fetchDealAndCustomer();
  }, [id]);

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

  // const handleAddActivity = (newActivity: ActivityLog) => {
  //   setActivities((prevActivities) => [newActivity, ...prevActivities]);
  // };

  const handleDelete = () => {
    setSnackbarMessage('Deal Deleted');
    setSnackbarSeverity('deleted');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Grid container spacing={3} sx={{ padding: { xs: '12px', sm: '16px', md: '24px ' } }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 9 }}>
          <Grid container>
            <Grid className="customer-details-deal-page" size={{ xs: 12, md: 12 }} paddingBottom={'24px'} gap={2} alignItems={'center'}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 12, md: 1, lg: 1 }}>
                  <Avatar src={customer.avatar} alt={customer.firstName} sx={{ height: '44px', width: '44px', marginTop: '8px' }} />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                  <Typography className="title-typography-deal-page">Customer</Typography>
                  <Typography className="typography-deal-page">
                    {customer.firstName} {customer.lastName}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5 }}>
                  <Typography className="title-typography-deal-page">Email</Typography>
                  <Typography className="typography-deal-page">{customer.email}</Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                  <Typography className="title-typography-deal-page">Phone</Typography>
                  <Typography className="typography-deal-page">{customer.phone}</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }} className="grid-address-id-page">
              <Box className="box-address-id-page">
                <Box flex={1}>
                  <Typography fontWeight={700} fontSize="28px" lineHeight="40px">
                    {deal.street},
                  </Typography>
                  <Typography fontWeight={700} fontSize="28px" lineHeight="40px">
                    {deal.city}, {deal.state} {deal.zipCode}
                  </Typography>
                </Box>
                <Box>
                  <Button className="button-actions-address-id-page">
                    <DriveFileRenameOutlineOutlinedIcon
                      className="actions-button-addres-id-page"
                      onClick={() => {
                        setEditDealOpen(true);
                      }}
                    />
                  </Button>
                  <Button className="button-actions-address-id-page">
                    <DeleteOutlineOutlinedIcon onClick={handleDelete} className="actions-button-addres-id-page" />
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
              <Grid container width={'100%'}>
                <Grid size={{ xs: 12, md: 7 }}>
                  <Box display={'flex'} marginBottom={'40px'}>
                    <Box display={'flex'} flexDirection={'column'} flex={1}>
                      <Typography className="title-typography-deal-page">Progress</Typography>
                      <Typography className="typography-deal-page">
                        {deal.progress.charAt(0).toUpperCase() + deal.progress.slice(1).toLowerCase()}
                      </Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} flex={1}>
                      <Typography className="title-typography-deal-page">Appointment Date</Typography>
                      <Typography className="typography-deal-page">
                        {new Date(deal.appointmentDate).toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display={'flex'} marginBottom={'40px'}>
                    <Box display={'flex'} flexDirection={'column'} flex={1}>
                      <Typography className="title-typography-deal-page">Room Area</Typography>
                      <Typography className="typography-deal-page">{deal.roomArea} M&sup2;</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} flex={1}>
                      <Typography className="title-typography-deal-page">Number of people</Typography>
                      <Typography className="typography-deal-page">{deal.numberOfPeople}</Typography>
                    </Box>
                  </Box>
                  <Box display={'flex'} marginBottom={'40px'}>
                    <Box display={'flex'} flexDirection={'column'} flex={1}>
                      <Typography className="title-typography-deal-page">Price</Typography>
                      <Typography className="typography-deal-page">{deal.price}</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} flex={1}>
                      <Typography className="title-typography-deal-page">Room Access</Typography>
                      <Typography className="typography-deal-page">{deal.roomAccess}</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <Typography className="title-typography-deal-page">Special Instructions</Typography>
                      <Typography lineHeight={'30px'} fontWeight={500} fontSize={'16px'} color="#526477">
                        {deal.specialInstructions}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }} className="grid-image-deal-id-page">
                  <Image width={320} height={320} className="deal-image-deal-page" src={deal.dealPicture} alt="Deal" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 12, lg: 3 }}>
          <ActivityFormCard />
          <ActivityLogCard />
        </Grid>
      </Grid>
      <DealModal
        open={editDealOpen}
        onClose={() => {
          setEditDealOpen(false);
        }}
        dealId={Number(id)}
      />
      <AlertSnackbar open={snackbarOpen} message={snackbarMessage} severity={snackbarSeverity} onClose={handleSnackbarClose} />
    </>
  );
}
