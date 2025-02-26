import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import SelectButton from '../components/select-button';
import Grid from '@mui/material/Grid2';
import TimeStamp from '../components/date-picker';
import '../styles/modal-style.css';
import AlertSnackbar from '../components/alert/alert';
import { mockCustomers, Customer } from '../app/types/customer';
import Image from 'next/image';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextFieldController from './form/text-field-controller';

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
  // progress: string;
}

const NewDealModal: React.FC<NewDealModalProps> = ({ open, onClose, onChangeCustomerRequested, customerId: initialCustomerId }) => {
  const [customerId, setCustomerId] = useState<number | null>(initialCustomerId);

  useEffect(() => {
    setCustomerId(initialCustomerId);
  }, [initialCustomerId]);

  const customer: Customer | undefined = mockCustomers.find((cust) => cust.id === customerId);

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
    // progress: yup.string().required('Progress is required'),
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
      roomAccess: undefined,
      price: undefined,
      // progress: '',
    },
  });

  const onSubmit = form.handleSubmit((formData) => {
    console.log('Form Data:', formData);
    onClose();
    setSnackbarMessage('Deal Saved');
    setSnackbarSeverity('saved');
    setSnackbarOpen(true);
  });

  // const form = useForm({ resolver: yupResolver(schema) });

  // const onSubmit = (formData) => {
  //   console.log('Form Data Submitted:', formData);
  // const dealData: FormData = {
  //   customerId: Number(formData.get('customerId') as unknown as string),
  //   address: {
  //     street: formData.get('street') as string,
  //     city: formData.get('city') as string,
  //     state: formData.get('state') as string,
  //     zipCode: formData.get('zipCode') as string,
  //   },
  //   roomArea: Number(formData.get('roomArea') as unknown as string),
  //   numberOfPeople: Number(formData.get('numberOfPeople') as unknown as string),
  //   appointmentDate: new Date(formData.get('appointmentDate') as string),
  //   specialInstructions: formData.get('specialInstructions') as string,
  //   roomAccess: formData.get('roomAccess') as string,
  //   price: Number(formData.get('price') as unknown as string),
  //   progress: formData.get('progress') as string,
  // };

  // console.log('Form Data Submitted:', dealData);

  // };

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
      <Modal open={open} onClose={onClose}>
        <Box
          className="box"
          sx={{
            width: 620,
            paddingBottom: '22px',
          }}
        >
          <Box sx={{ padding: '24px 29px 24px 32px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5" marginBottom={0} fontWeight={700} fontSize={18} color={'#092C4C'}>
              Add New Deal
            </Typography>
            <Button sx={{ minWidth: 0, margin: 0 }} endIcon={<CancelIcon sx={{ color: '#7E92A2' }} />} onClick={handleCancel} />
          </Box>

          <FormProvider {...form}>
            <Box bgcolor={'#F6FAFD'} padding={'16px 32px'} display={'flex'} alignItems={'center'} gap={2}>
              <Image
                src={customer?.avatar || '/placeholder-avatar.jpg'}
                alt="Customer picture"
                width={44}
                height={44}
                style={{ objectFit: 'cover', borderRadius: '50%' }}
              />
              <Box width="100%">
                <Typography variant="body2" color="#7E92A2" fontWeight={400} lineHeight="27px">
                  {'Customer'}
                </Typography>
                <Typography variant="body1" fontWeight={700} fontSize={16} lineHeight="27px">
                  {customer?.name}
                </Typography>
              </Box>
              <Button
                onClick={onChangeCustomerRequested}
                variant="outlined"
                sx={{
                  border: '1px solid #EAEEF4',
                  bgcolor: ' #FFFFFF',
                  borderRadius: '70px',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  color: '#092C4C',
                  padding: '10px 29px',
                  fontSize: '14px',
                  lineHeight: '30px',
                  minWidth: 'auto',
                }}
              >
                Change Customer
              </Button>
            </Box>
            <Box />

            <Box padding={4} paddingBottom={0} display={'flex'} flexDirection={'column'}>
              <div>
                <Typography marginBottom={0} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                  Room Images
                </Typography>
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
              <Box>
                <Grid container spacing={2} margin={'0 0 24px 0'}>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <Typography className="label">Address</Typography>
                    <TextFieldController className="textField" name="address.street" placeholder="Street" type="text" />
                  </Grid>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <TextFieldController className="textField" name="address.city" placeholder="City" type="text" />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <TextFieldController name="address.state" className="textField" placeholder="State/Province" type="text" />
                  </Grid>
                  <Grid size={{ xs: 12, md: 3 }}>
                    <TextFieldController name="address.zipCode" className="textField" placeholder="Zip Code" type="text" />
                  </Grid>
                </Grid>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px 0', width: '100%' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                      Room Area (m2)
                    </Typography>
                    <TextFieldController type="text" name="roomArea" />
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                      # of People
                    </Typography>
                    <TextFieldController type="text" name="numberOfPeople" />
                  </Box>
                </Box>

                <TimeStamp />

                <Typography margin={'20px 0px 12px'} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                  Special Instructions
                </Typography>
                <TextFieldController type="text" name="specialInstructions" />

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px 0 24px', width: '100%' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                      Room Access
                    </Typography>
                    <SelectButton value={['Keys with doorman', 'None']} defaultValue="Keys with doorman" />
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                      Price ($)
                    </Typography>
                    <TextFieldController name="price" type="text" />
                  </Box>
                </Box>
              </Box>

              <Box display={'flex'} alignItems={'center'} gap={'70px'} paddingTop={'16px'}>
                <Box display={'flex'} alignItems={'center'} gap={'12px'} flex={2}>
                  <Typography fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                    Progress
                  </Typography>
                  <Box flex={1}>
                    <SelectButton value={['In Progress', 'Closed']} defaultValue="In Progress" />
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Button onClick={handleCancel} variant="outlined" sx={{ mr: 2, color: '#092C4C', border: 'none', padding: '10px 24px' }}>
                    Cancel
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ padding: '10px 24px', fontWeight: 500, fontSize: '14px', lineHeight: '30px', borderRadius: '70px' }}
                    onClick={onSubmit}
                  >
                    Save Deal
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

export default NewDealModal;
