import React, { useState } from 'react';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import { TextField } from '@mui/material';
import '../../styles/modal-style.css';
import AlertSnackbar from '../alert/alert';
import './new-customer-modal-style.css';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface NewCustomerModalProps {
  open: boolean;
  onClose: () => void;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface Name {
  firstName: string;
  lastName: string;
}

interface FormValues {
  name: Name;
  email: string;
  phone: string;
  address: Address;
  // imageFile?: File;
  // imageUrl?: string;
}

const NewCustomerModal: React.FC<NewCustomerModalProps> = ({ open, onClose }) => {
  const [fileName, setFileName] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'saved' | 'deleted'>('saved');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const schema = yup.object().shape({
    name: yup.object().shape({
      firstName: yup
        .string()
        .typeError('First name must be a text')
        .min(2, 'First name must be at least 2 characters')
        .max(30, 'First name cannot exceed 30 characters')
        .required('First name is required'),
      lastName: yup
        .string()
        .typeError('Last name must be a text')
        .min(2, 'First name must be at least 2 characters')
        .max(30, 'First name cannot exceed 30 characters')
        .required('Last name is required'),
    }),
    email: yup
      .string()
      .email('Invalid email')
      .min(5, 'Email must be at least 5 characters')
      .max(50, 'Email cannot exceed 50 characters')
      .required('Email is required'),
    phone: yup
      .string()
      .matches(/^\d{10,15}$/, 'Phone number must be between 10 and 15 digits')
      .required('Phone is required'),
    address: yup.object().shape({
      street: yup.string().required('Street address is required'),
      city: yup.string().required('City is required'),
      state: yup.string().required('State is required'),
      zipCode: yup
        .string()
        .matches(/^\d{3,15}$/, 'Phone number must be between 10 and 15 digits')
        .required('Zip code is required'),
    }),
    // imageUrl: yup.string(),
  });

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: {
        firstName: undefined,
        lastName: undefined,
      },
      email: undefined,
      phone: undefined,
      address: { street: undefined, city: undefined, state: undefined, zipCode: undefined },
    },
  });

  const onSubmit = form.handleSubmit((formData) => {
    console.log('Form Data:', formData);
    onClose();
    setSnackbarMessage('Deal Saved');
    setSnackbarSeverity('saved');
    setSnackbarOpen(true);
  });

  const handleCancel = () => {
    setFileName('');
    if (open) {
      onClose();
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Modal open={open}>
        <Box
          className="box"
          sx={{
            width: 620,
            maxHeight: 700,
          }}
        >
          <Box className="titleModalBox">
            <Typography className="titleModal">Add New Customer</Typography>
            <Button sx={{ minWidth: 0, margin: 0 }} endIcon={<CancelIcon sx={{ color: '#7E92A2' }} />} onClick={handleCancel} />
          </Box>

          <FormProvider {...form}>
            <Box padding={4} display={'flex'} flexDirection={'column'}>
              <div>
                <Typography className="label">Avatar</Typography>
                <label htmlFor="upload-image" style={{ cursor: 'pointer' }}>
                  <input id="upload-image" name="file" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                  <Button
                    variant="contained"
                    component="span"
                    sx={{
                      padding: '10px 20px',
                      background: (theme) => theme.palette.background.default,
                      color: '#7E92A2',
                      fontWeight: 400,
                      borderRadius: '8px',
                      border: '1px solid #EAEEF4',
                      marginTop: '12px',
                      marginBottom: '20px',
                      '&:hover': {
                        borderColor: '#7E92A2',
                      },
                    }}
                  >
                    <span style={{ display: 'block' }}>{fileName || 'ADD'}</span>
                  </Button>
                </label>
              </div>

              <Grid container width={'100%'}>
                <Grid size={{ xs: 12, md: 12 }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography className="label">First Name</Typography>
                      <TextField name="name.firstName" type="text" variant="outlined" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography className="label">Last Name</Typography>
                      <TextField name="name.lastName" type="text" variant="outlined" fullWidth />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} marginTop={'24px'}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography className="label">Email</Typography>
                      <TextField name="email" type="text" variant="outlined" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography className="label">Phone</Typography>
                      <TextField name="phone" type="phone" variant="outlined" fullWidth />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} margin={'24px 0 24px 0'}>
                    <Grid size={{ xs: 12, md: 12 }}>
                      <Typography className="label">Address</Typography>
                      <TextField name="address.street" className="textField" placeholder="Street Address" type="text" variant="outlined" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                      <TextField name="address.city" className="textField" placeholder="City" type="text" variant="outlined" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <TextField name="address.state" className="textField" placeholder="State/Province" type="text" variant="outlined" fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <TextField name="address.zipCode" className="textField" placeholder="Zip Code" type="text" variant="outlined" fullWidth />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'} marginTop={'22px'}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Button variant="outlined" onClick={handleCancel} sx={{ mr: 2, color: '#092C4C', border: 'none', padding: '10px 24px' }}>
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ padding: '10px 24px', fontWeight: 500, fontSize: '14px', lineHeight: '30px', borderRadius: '70px' }}
                    onClick={onSubmit}
                  >
                    Save Customer
                  </Button>
                </Box>
              </Box>
            </Box>
          </FormProvider>
        </Box>
      </Modal>

      <AlertSnackbar open={snackbarOpen} message={snackbarMessage} severity={snackbarSeverity} onClose={handleSnackbarClose} />
    </>
  );
};

export default NewCustomerModal;
