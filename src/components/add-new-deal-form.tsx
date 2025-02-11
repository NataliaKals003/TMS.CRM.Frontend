import React, { useState } from 'react';
import { Avatar, Box, Button, Modal, TextField, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SelectButton from './select-button';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import dayjs, { Dayjs } from 'dayjs';
import AddressForm from './address-form';

interface FormAddNewDealProps {
  open: boolean;
  onClose: () => void;
}

const AddNewDeal: React.FC<FormAddNewDealProps> = ({ open, onClose }) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleCancel = () => {
    setFileName('');
    if (onClose) {
      onClose();
    }
  };

  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <Modal open={open}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          maxWidth: '620px',
          boxShadow: 24,
          borderRadius: 2,
          width: 620,
          maxHeight: 700,
          overflowY: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
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
            variant="outlined"
            sx={{
              border: '1px solid #EAEEF4',
              bgcolor: ' #FFFFFF',
              borderRadius: '70px',
              whiteSpace: 'nowrap', // Prevents text from breaking
              display: 'inline-flex', // Ensures the button fits content dynamically
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

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box width="100%">
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    label="Appointment Date"
                    format="LL"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    slots={{
                      openPickerIcon: CalendarMonthOutlinedIcon,
                    }}
                    sx={{ width: '100%' }}
                  />
                </DemoContainer>
              </Box>
            </LocalizationProvider>

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
  );
};

export default AddNewDeal;
