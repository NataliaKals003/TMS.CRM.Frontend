'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Grid from '@mui/material/Grid2';
import { mockCustomers, Customer } from '../../../types/customer';
import { Box, Button, Typography } from '@mui/material';
import * as yup from 'yup';
import bgCover from '@/assets/cover.jpg';
import defaultAvatar from '../../../assets/default-avatar.png';
import Image from 'next/image';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import '../customer-page.css';
import './page.css';
import RecentDeals from '../_components/recent-deals';
import AlertSnackbar from '@/components/alert-snackbar/alert-snackbar';
import { FormProvider, useForm } from 'react-hook-form';
import TextFieldController from '@/components/form/text-field-controller';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHeader } from '@/context/header-context';

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface FormValues {
  avatar?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
}

export default function Page() {
  const { setTitle, setButtonTitle } = useHeader();

  useEffect(() => {
    setTitle('Customer Details');

    if (setButtonTitle) {
      setButtonTitle(undefined);
    }
  }, [setTitle, setButtonTitle]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'saved' | 'deleted'>('saved');
  const { id: customerId } = useParams();

  const schema = yup.object().shape({
    avatar: yup.string(),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().required('Email is required'),
    phone: yup.string().required('Phone is required'),
    address: yup.object().shape({
      street: yup.string().required('Street address is required'),
      city: yup.string().required('City is required'),
      state: yup.string().required('State is required'),
      zipCode: yup.string().required('Zip code is required'),
    }),
  });

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      avatar: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      address: { street: undefined, city: undefined, state: undefined, zipCode: undefined },
    },
  });

  useEffect(() => {
    console.log('custoemrId', customerId);

    if (customerId) {
      const customer: Customer | undefined = mockCustomers.find((cust) => cust.id === Number(customerId));

      if (!customer) {
        return;
      }

      form.reset({
        avatar: customer.avatar,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        phone: customer.phone,
        address: {
          street: customer.street,
          city: customer.city,
          state: customer.state,
          zipCode: customer.zipCode,
        },
      });
    }
  }, [customerId, form]);

  const onSubmit = form.handleSubmit(() => {
    setSnackbarMessage('Customer Edited');
    setSnackbarSeverity('saved');
    setSnackbarOpen(true);
  });

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
        <Grid size={{ xs: 12, md: 8.5 }} padding={'24px'} paddingRight={'0px'}>
          <Grid container className="customer-container">
            <FormProvider {...form}>
              <Grid container size={{ xs: 12, md: 12 }} paddingBottom={'24px'} position="relative" alignItems={'end'}>
                <Image src={bgCover} alt="Background Cover" sizes="100%" className="cover-bg-customer-page" />

                <Box position="absolute" margin={'24px'}>
                  <Box borderRadius="50%" overflow="hidden" width={100} height={100}>
                    <Image
                      src={form.watch('avatar') || defaultAvatar}
                      alt="Profile Picture"
                      width={100}
                      height={100}
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>

                  <Button className="edit-button-customer-page">
                    <DriveFileRenameOutlineOutlinedIcon sx={{ width: '20px', height: '20px' }} />
                  </Button>
                </Box>

                <Button className="delete-button-customer-page">
                  <DeleteOutlineOutlinedIcon onClick={handleDelete} sx={{ width: '23px', height: '23px', padding: '15px' }} />
                </Button>
              </Grid>

              <Grid size={{ xs: 12, md: 12 }}>
                <Grid container width={'100%'}>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography className="typography-customer-page">First Name</Typography>
                        <TextFieldController className="text-field-customer-page" name="firstName" type="text" />
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography className="typography-customer-page">Last Name</Typography>
                        <TextFieldController className="text-field-customer-page" name="lastName" type="text" />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} marginTop={'24px'}>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography className="typography-customer-page">Email</Typography>
                        <TextFieldController className="text-field-customer-page" name="email" type="text" />
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography className="typography-customer-page">Phone </Typography>
                        <TextFieldController className="text-field-customer-page" name="phone" type="phone" />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} margin={'24px 0 24px 0'}>
                      <Grid size={{ xs: 12, md: 12 }}>
                        <Typography className="typography-customer-page">Address </Typography>
                        <TextFieldController className="text-field-customer-page" name="address.street" placeholder="Street Address" type="text" />
                      </Grid>
                      <Grid size={{ xs: 12, md: 5 }}>
                        <TextFieldController className="text-field-customer-page" name="address.city" placeholder="City" type="text" />
                      </Grid>
                      <Grid size={{ xs: 12, md: 4 }}>
                        <TextFieldController className="text-field-customer-page" name="address.state" placeholder="State/Province" type="text" />
                      </Grid>
                      <Grid size={{ xs: 12, md: 3 }}>
                        <TextFieldController className="text-field-customer-page" name="address.zipCode" placeholder="Zip Code" type="text" />
                      </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" onClick={onSubmit} className="save-button">
                      Save Customer
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </FormProvider>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 3.5 }} padding={'24px'}>
          <RecentDeals />
        </Grid>
      </Grid>
      <AlertSnackbar open={snackbarOpen} message={snackbarMessage} severity={snackbarSeverity} onClose={handleSnackbarClose} />
    </>
  );
}
