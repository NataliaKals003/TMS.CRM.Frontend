import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddressForm from './address-form';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import { TextField } from '@mui/material';
import '../styles/modal-style.css';

interface NewCustomerModalProps {
  open: boolean;
  onClose: () => void;
}

const NewCustomerModal: React.FC<NewCustomerModalProps> = ({ open, onClose }) => {
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
    <Modal open={open}>
      <Box
        className="box"
        sx={{
          width: 620,
          maxHeight: 700,
        }}
      >
        <Box sx={{ padding: '24px 29px 24px 32px', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" marginBottom={0} fontWeight={700} fontSize={18} color={'#092C4C'}>
            Add New Customer
          </Typography>
          <Button sx={{ minWidth: 0, margin: 0 }} endIcon={<CancelIcon sx={{ color: '#7E92A2' }} />} onClick={handleCancel} />
        </Box>
        <Box padding={4} display={'flex'} flexDirection={'column'}>
          <div>
            <Typography marginBottom={0} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
              Avatar
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
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px 0', width: '100%' }}>
              <Box sx={{ flex: 1 }}>
                <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                  First Name
                </Typography>
                <TextField type="text" variant="outlined" fullWidth />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                  Last Name
                </Typography>
                <TextField type="text" variant="outlined" fullWidth />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '0 0 20px', width: '100%' }}>
              <Box sx={{ flex: 1 }}>
                <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                  Email
                </Typography>
                <TextField type="text" variant="outlined" fullWidth />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                  Phone
                </Typography>
                <TextField type="number" variant="outlined" fullWidth />
              </Box>
            </Box>
            <AddressForm />
          </Box>

          <Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'} marginTop={'22px'}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Button variant="outlined" onClick={handleCancel} sx={{ mr: 2, color: '#092C4C', border: 'none', padding: '10px 24px' }}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ padding: '10px 24px', fontWeight: 500, fontSize: '14px', lineHeight: '30px', borderRadius: '70px' }}
                onClick={() => {}}
              >
                Save Customer
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewCustomerModal;
