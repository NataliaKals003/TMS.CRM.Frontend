import React, { useState } from 'react';
import { Avatar, Box, Button, Modal, TextField, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import SelectButton from './select-button';
import AddressForm from './address-form';
import ModalSelectCustomer from './modal-select-customer';
import TimeStamp from './date-picker';
import '../styles/modal-style.css';

interface FormAddNewDealProps {
  open: boolean;
  onClose: () => void;
}

const AddNewDeal: React.FC<FormAddNewDealProps> = ({ open, onClose }) => {
  const [selectedCustomersOpen, setSelectedCustomersOpen] = useState(false);

  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleCancel = () => {
    setFileName('');
    if (open) {
      onClose();
    }
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box
          className="box"
          sx={{
            width: 620,
            maxHeight: 700,
          }}
        >
          <Box sx={{ padding: '24px 29px 24px 32px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5" marginBottom={0} fontWeight={700} fontSize={18} color={'#092C4C'}>
              Add New Deal
            </Typography>
            <Button sx={{ minWidth: 0, margin: 0 }} endIcon={<CancelIcon sx={{ color: '#7E92A2' }} />} onClick={handleCancel} />
          </Box>

          <Box bgcolor={'#F6FAFD'} padding={'16px 32px'} display={'flex'} alignItems={'center'} gap={2}>
            <Avatar src={'https://randomuser.me/api/portraits/women/1.jpg'} alt={'Customer'} />
            <Box width="100%">
              <Typography variant="body2" color="#7E92A2" fontWeight={400} lineHeight="27px">
                {'Customer'}
              </Typography>
              <Typography variant="body1" fontWeight={700} fontSize={16} lineHeight="27px">
                {'Deanna Annis '}
              </Typography>
            </Box>
            <Button
              onClick={() => {
                setSelectedCustomersOpen(true);
              }}
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

          <Box padding={4} display={'flex'} flexDirection={'column'}>
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
              <AddressForm />

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px 0', width: '100%' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                    Room Area (m2)
                  </Typography>
                  <TextField type="text" variant="outlined" fullWidth />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                    # of People
                  </Typography>
                  <TextField type="text" variant="outlined" fullWidth />
                </Box>
              </Box>

              <TimeStamp />

              <Typography margin={'20px 0px 12px'} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                Special Instructions
              </Typography>
              <TextField type="text" variant="outlined" fullWidth />

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
                  <TextField type="text" variant="outlined" fullWidth />
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
                  onClick={() => {}}
                >
                  Save Deal
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
      <ModalSelectCustomer
        open={selectedCustomersOpen}
        onClose={() => {
          setSelectedCustomersOpen(false);
        }}
        onCustomerSelected={(customerId: string) => {
          console.log(customerId);
        }}
      />
    </>
  );
};

export default AddNewDeal;
