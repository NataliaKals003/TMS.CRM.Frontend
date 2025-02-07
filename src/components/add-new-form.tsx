import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { BusinessCenterOutlined, PeopleAltOutlined } from '@mui/icons-material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

interface AddNewFormProps {
  open: boolean;
  onClose: () => void;
}

const ModalAddNew: React.FC<AddNewFormProps> = ({ open, onClose }) => {
  return (
    <Modal open={open}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          width: 240,
        }}
      >
        <Box sx={{ padding: '15px', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" marginBottom={0} fontWeight={500} fontSize={14} color={'#7E92A2'}>
            Add New
          </Typography>
          <Button endIcon={<CancelIcon sx={{ color: '#7E92A2', minWidth: 0 }} />} onClick={onClose} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            cursor: 'pointer',
            gap: 2,
            padding: '10px 15px',
            paddingTop: 0,
          }}
        >
          <Box display="flex" alignItems="center" width={'100%'} justifyContent={'space-between'}>
            <Button
              variant="text"
              sx={{ color: '#092C4C', justifyContent: 'space-between' }}
              startIcon={<BusinessCenterOutlined sx={{ color: '#7E92A2', marginRight: '15px' }} />}
            >
              Deals
            </Button>
            <ArrowForwardOutlinedIcon sx={{ color: '#514EF3', width: 20, height: 20, justifyContent: 'end' }} />
          </Box>

          <Box display="flex" alignItems="center" width={'100%'} justifyContent={'space-between'}>
            <Button
              variant="text"
              sx={{ color: '#092C4C', justifyContent: 'space-between' }}
              startIcon={<PeopleAltOutlined sx={{ color: '#7E92A2', marginRight: '15px' }} />}
            >
              Customers
            </Button>
            <ArrowForwardOutlinedIcon sx={{ color: '#514EF3', width: 20, height: 20, justifyContent: 'end' }} />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalAddNew;
