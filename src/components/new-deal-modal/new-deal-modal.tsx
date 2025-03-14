import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from '@mui/material/Grid2';
import '../../styles/modal.css';
import './new-deal-modal.css';
import AlertSnackbar from '../alert/alert';
import { mockCustomers, Customer } from '../../types/customer';
import Image from 'next/image';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextFieldController from '../form/text-field-controller';
import SelectController from '../form/select-controller';
import DatePickerController from '../form/date-picker-controller';

interface NewDealModalProps {
  open: boolean;
  onClose: () => void;
  onChangeCustomerRequested?: () => void;
  customerId: number;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface FormValues {
  customerId: number;
  address: Address;
  roomArea: number;
  numberOfPeople: number;
  appointmentDate: Date;
  specialInstructions: string;
  roomAccess: string;
  price: number;
  progress: string;
}

const NewDealModal: React.FC<NewDealModalProps> = ({ open, onClose, onChangeCustomerRequested, customerId }) => {
  const customer: Customer | undefined = mockCustomers.find((cust) => cust.id === customerId);

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
    customerId: yup.number().required('Customer is required'),
    address: yup.object().shape({
      street: yup.string().required('Street is required'),
      city: yup.string().required('City is required'),
      state: yup.string().required('State is required'),
      zipCode: yup.string().required('Zip code is required'),
    }),
    roomArea: yup.number().required('Room area is required'),
    numberOfPeople: yup.number().required('Number of people is required'),
    appointmentDate: yup.date().required('Due date is required'),
    specialInstructions: yup.string().required('Special instructions are required'),
    roomAccess: yup.string().required('Room access is required'),
    price: yup.number().required('Price is required'),
    progress: yup.string().required('Progress is required'),
    // imageUrl: yup.string(),
  });

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      customerId: customerId ?? undefined,
      address: { street: undefined, city: undefined, state: undefined, zipCode: undefined },
      roomArea: undefined,
      numberOfPeople: undefined,
      appointmentDate: undefined,
      specialInstructions: undefined,
      roomAccess: 'KeysWithDorman',
      price: undefined,
      progress: 'InProgress',
    },
  });

  useEffect(() => {
    form.setValue('customerId', customerId);
  }, [customerId, form]);

  const onSubmit = form.handleSubmit(() => {
    onClose();
    setSnackbarMessage('Deal Saved');
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
            paddingBottom: '22px',
          }}
        >
          <Box className="box-header">
            <Typography className="title-header-modal">Add New Deal</Typography>
            <Button endIcon={<CancelIcon className="close-icon" />} onClick={handleCancel} />
          </Box>

          <FormProvider {...form}>
            <Grid container spacing={3} className="customer-box-new-deal">
              <Grid size={{ xs: 3, sm: 1.5, md: 1.5 }}>
                <Image
                  src={customer?.avatar || '/placeholder-avatar.jpg'}
                  alt="Customer picture"
                  width={44}
                  height={44}
                  className="deal-picture-new-deal"
                />
              </Grid>
              <Grid size={{ xs: 9, sm: 6.5, md: 6.5 }}>
                <Typography className="customer-label-new-deal">{'Customer'}</Typography>
                <Typography className="customer-name-new-deal">{customer?.name}</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Button onClick={onChangeCustomerRequested} variant="outlined" className="change-customer-button-new-deal">
                  Change Customer
                </Button>
              </Grid>
            </Grid>
            <Box />

            <Box className="form-new-deal">
              <div>
                <Typography className="label">Room Images</Typography>
                <label htmlFor="upload-image" style={{ cursor: 'pointer' }}>
                  <input id="upload-image" name="file" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                  <Button variant="contained" component="span" className="upload-button">
                    <span style={{ display: 'block' }}>{fileName || 'ADD'}</span>
                  </Button>
                </label>
              </div>
              <Box>
                <Grid container spacing={2} margin={'0 0 24px 0'}>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <Typography className="label">Address</Typography>
                    <TextFieldController name="address.street" placeholder="Street" type="text" />
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

                <Grid container spacing={3} className="deal-details-box-new-deal">
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography className="label">Room Area (m2)</Typography>
                    <TextFieldController type="number" name="roomArea" />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography className="label"># of People</Typography>
                    <TextFieldController type="number" name="numberOfPeople" />
                  </Grid>
                </Grid>
                <Typography className="label">Appointment Date</Typography>
                <DatePickerController name="appointmentDate" />

                <Typography margin={'20px 0px 12px'} className="label">
                  Special Instructions
                </Typography>
                <TextFieldController type="text" name="specialInstructions" />

                <Grid container spacing={3} className="deal-details-box-new-deal">
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography className="label">Room Access</Typography>
                    <SelectController
                      name="roomAccess"
                      skeletonOnLoading
                      options={[
                        { value: 'None', label: 'None' },
                        { value: 'KeysWithDorman', label: 'Keys with doorman' },
                      ]}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography className="label">Price ($)</Typography>
                    <TextFieldController name="price" type="number" />
                  </Grid>
                </Grid>
              </Box>

              <Grid container className="footer-box">
                <Grid size={{ xs: 12, md: 6 }} className="progress-box-new-deal">
                  <Grid alignItems={'center'} spacing={1} container>
                    <Grid size={{ xs: 12, md: 3.5 }}>
                      <Typography className="label" sx={{ marginBottom: '0' }}>
                        Progress
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7.5 }}>
                      <SelectController
                        name="progress"
                        skeletonOnLoading
                        options={[
                          { value: 'None', label: 'None' },
                          { value: 'InProgress', label: 'In Progress' },
                          { value: 'Closed', label: 'Closed' },
                        ]}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} className="actions-button">
                  <Button onClick={handleCancel} variant="outlined" className="cancel-button">
                    Cancel
                  </Button>

                  <Button variant="contained" color="primary" className="save-button" onClick={onSubmit}>
                    Save Deal
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

export default NewDealModal;
