import React, { useState } from 'react';
import { Box, Typography, Button, List, Modal, Avatar } from '@mui/material';
import { customers, Customer } from '../app/utils/customers';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import AddNewCustomer from './add-new-customer-form';

interface ModalSelectCustomerProps {
  open: boolean;
  onClose: () => void;
}

const ModalSelectCustomer: React.FC<ModalSelectCustomerProps> = ({ open, onClose }) => {
  const [addNewCustomerOpen, setAddNewCustomerOpen] = useState(false);

  const handleOpenAddNewCustomer = () => {
    setAddNewCustomerOpen(true);
  };

  const handleCloseAddNewCustomer = () => {
    setAddNewCustomerOpen(false);
  };

  return (
    <Box>
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            width: 400,
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ padding: '24px', display: 'flex', justifyContent: 'space-between', flexShrink: 0 }}>
            <Typography variant="h5" fontWeight={700} fontSize={18} color={'#092C4C'}>
              Select Customer
            </Typography>

            <Box>
              <Button onClick={handleOpenAddNewCustomer} variant="text" sx={{ marginRight: 1 }}>
                Add New
              </Button>
              <Button sx={{ minWidth: 0, margin: 0 }} endIcon={<CancelIcon sx={{ color: '#7E92A2' }} />} onClick={onClose} />
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              overflowY: 'auto',
              padding: '0px 34px 0 24px',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                width: '5px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
                borderRadius: '10px',
              },
            }}
          >
            <List>
              {customers.map((customer: Customer) => (
                <Box key={customer.id} display="flex" alignItems="center" gap={2} marginBottom={2}>
                  <Avatar src={customer.avatar} alt={customer.name} />
                  <Box width="100%">
                    <Typography variant="body1" fontWeight={700} fontSize={16}>
                      {customer.name}
                    </Typography>
                    <Typography variant="body2" color="#7E92A2" fontWeight={400} lineHeight="27px">
                      {customer.email}
                    </Typography>
                  </Box>
                  <ArrowForwardOutlinedIcon sx={{ color: '#514EF3', width: 20, height: 20, justifyContent: 'end' }} />
                </Box>
              ))}
            </List>
          </Box>

          <Box display="flex" justifyContent="center" padding={1.5}>
            <Button variant="text">Load More</Button>
          </Box>
        </Box>
      </Modal>
      <AddNewCustomer open={addNewCustomerOpen} onClose={handleCloseAddNewCustomer} />
    </Box>
  );
};

export default ModalSelectCustomer;
