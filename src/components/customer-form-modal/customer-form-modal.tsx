import React, { useState } from 'react';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import './customer-form-modal.css';
import '../../styles/modal.css';
import AlertSnackbar from '../alert-snackbar/alert-snackbar';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFieldController from '../form/text-field-controller';

interface CustomerModalProps {
  open: boolean;
  onClose: () => void;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
}

const CustomerFormModal: React.FC<CustomerModalProps> = ({ open, onClose }) => {
  const [fileName, setFileName] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'saved' | 'deleted'>('saved');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const schema = yup.object().shape({
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
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      address: { street: undefined, city: undefined, state: undefined, zipCode: undefined },
    },
  });

  const onSubmit = form.handleSubmit(() => {
    onClose();
    setSnackbarMessage('Customer Saved');
    setSnackbarSeverity('saved');
    setSnackbarOpen(true);
  });

  const handleCancel = () => {
    setFileName('');
    form.reset();

    if (open) {
      onClose();
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box
          className="box"
          sx={{
            width: { xs: 300, sm: 520, md: 620 },
            maxHeight: 700,
          }}
        >
          <Box className="box-header">
            <Typography className="title-header-modal">Add New Customer</Typography>
            <Button endIcon={<CancelIcon className="close-icon" />} onClick={handleCancel} />{' '}
          </Box>

          <FormProvider {...form}>
            <Box className="new-customer-form">
              <div>
                <Typography className="label">Avatar</Typography>
                <label htmlFor="upload-image" style={{ cursor: 'pointer' }}>
                  <input id="upload-image" name="file" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                  <Button variant="contained" component="span" className="upload-button">
                    <span style={{ display: 'block' }}>{fileName || 'ADD'}</span>
                  </Button>
                </label>
              </div>

              <Grid container width={'100%'}>
                <Grid size={{ xs: 12, md: 12 }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography className="label">First Name</Typography>
                      <TextFieldController name="firstName" type="text" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography className="label">Last Name</Typography>
                      <TextFieldController name="lastName" type="text" />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} marginTop={'24px'}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography className="label">Email</Typography>
                      <TextFieldController name="email" type="text" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography className="label">Phone</Typography>
                      <TextFieldController name="phone" type="phone" />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} margin={'24px 0 24px 0'}>
                    <Grid size={{ xs: 12, md: 12 }}>
                      <Typography className="label">Address</Typography>
                      <TextFieldController name="address.street" placeholder="Street Address" type="text" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                      <TextFieldController name="address.city" placeholder="City" type="text" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <TextFieldController name="address.state" placeholder="State/Province" type="text" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <TextFieldController name="address.zipCode" placeholder="Zip Code" type="text" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container marginTop={'12px'}>
                <Grid size={{ xs: 12, md: 12 }} className="new-customer-footer">
                  <Button variant="outlined" onClick={handleCancel} className="cancel-button">
                    Cancel
                  </Button>
                  <Button variant="contained" color="primary" onClick={onSubmit} className="save-button">
                    Save Customer
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </FormProvider>
        </Box>
      </Modal>

      <AlertSnackbar open={snackbarOpen} message={snackbarMessage} severity={snackbarSeverity} onClose={handleSnackbarClose} />
    </>
  );
};

export default CustomerFormModal;
