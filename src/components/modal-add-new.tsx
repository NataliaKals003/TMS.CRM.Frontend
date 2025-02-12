import React, { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { BusinessCenterOutlined, PeopleAltOutlined } from '@mui/icons-material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ModalSelectCustomer from './modal-select-customer';
import AddNewCustomer from './add-new-customer-form';
import AddNewDeal from './add-new-deal-form';

interface AddNewFormProps {
  open: boolean;
  onClose: () => void;
}

const ModalAddNew: React.FC<AddNewFormProps> = ({ open, onClose }) => {
  const [selectedCustomersOpen, setSelectedCustomersOpen] = useState(false);
  const [addNewCustomerOpen, setAddNewCustomerOpen] = useState(false);
  const [addNewDealOpen, setAddNewDealOpen] = useState(false);

  const handleOpenSelectedCustomers = () => {
    setSelectedCustomersOpen(true);
  };

  const handleCloseSelectedCustomers = () => {
    setSelectedCustomersOpen(false);
  };

  const handleOpenAddNewCustomer = () => {
    setAddNewCustomerOpen(true);
  };

  const handleCloseAddNewCustomer = () => {
    setAddNewCustomerOpen(false);
  };

  const handleCustomerSelected = (customerId: string) => {
    console.log('customerId', customerId);
    setAddNewDealOpen(true);
  };

  return (
    <>
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
          <Box sx={{ padding: '11px 15px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5" marginBottom={0} fontWeight={500} fontSize={14} color={'#7E92A2'}>
              Add New
            </Typography>
            <Button sx={{ minWidth: 0 }} endIcon={<CancelIcon sx={{ color: '#7E92A2' }} />} onClick={onClose} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              cursor: 'pointer',
              padding: '10px 15px',
              paddingTop: 0,
              borderTop: '1px solid #EAEEF4',
            }}
          >
            <Box
              onClick={handleOpenSelectedCustomers}
              display="flex"
              alignItems="center"
              width="100%"
              justifyContent="space-between"
              paddingTop="11px"
              paddingBottom="11px"
              position="relative"
            >
              <Button
                variant="text"
                sx={{ color: '#092C4C', justifyContent: 'space-between' }}
                startIcon={<BusinessCenterOutlined sx={{ color: '#7E92A2', marginRight: '15px' }} />}
              >
                Deals
              </Button>
              <ArrowForwardOutlinedIcon sx={{ color: '#514EF3', width: 20, height: 20, justifyContent: 'end' }} />
            </Box>

            <Box
              onClick={handleOpenAddNewCustomer}
              display="flex"
              alignItems="center"
              width={'100%'}
              justifyContent={'space-between'}
              paddingTop={'11px'}
            >
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

      <AddNewCustomer open={addNewCustomerOpen} onClose={handleCloseAddNewCustomer} />
      <ModalSelectCustomer
        open={selectedCustomersOpen}
        onClose={handleCloseSelectedCustomers}
        onCustomerSelected={(customerId: string) => {
          handleCustomerSelected(customerId);
        }}
      />

      <AddNewDeal
        open={addNewDealOpen}
        onClose={() => {
          setAddNewDealOpen(false);
        }}
      />
    </>
  );
};

export default ModalAddNew;
