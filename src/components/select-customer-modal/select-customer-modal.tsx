import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, List, Modal, Avatar } from '@mui/material';
import { mockCustomers, Customer } from '../../types/customer';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import AddNewCustomer from '../new-customer-modal/new-customer-modal';
import '../../styles/modal.css';
import './select-customer-modal.css';

interface SelectCustomerModalProps {
  open: boolean;
  onClose: () => void;
  onCustomerSelected: (customerId: number) => void;
}

const SelectCustomerModal: React.FC<SelectCustomerModalProps> = ({ open, onClose, onCustomerSelected }) => {
  const [addNewCustomerOpen, setAddNewCustomerOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <Box>
      <Modal
        open={open}
        onClose={() => {
          onClose();
        }}
      >
        <Box
          ref={modalRef}
          className="box"
          sx={{
            width: { xs: 300, sm: 350, md: 400 },
            maxHeight: '80vh',
          }}
        >
          <Box className="box-header">
            <Typography className="title-header-modal">Select Customer</Typography>

            <Box>
              <Button
                onClick={() => {
                  setAddNewCustomerOpen(true);
                  onClose();
                }}
                variant="text"
                sx={{ marginRight: 1 }}
              >
                Add New
              </Button>
              <Button endIcon={<CancelIcon className="close-icon" />} onClick={onClose} />
            </Box>
          </Box>

          <Box className="select-box-select-customer">
            <List>
              {mockCustomers.map((customer: Customer) => (
                <Box
                  key={customer.id}
                  onClick={() => {
                    onCustomerSelected(customer.id);
                    onClose();
                  }}
                  className="customer-selected-select-customer"
                >
                  <Avatar src={customer.avatar} alt={customer.name} />
                  <Box width="100%">
                    <Typography variant="body1" className="customer-name-select-customer">
                      {customer.name}
                    </Typography>
                    <Typography variant="body2" className="customer-email-select-customer">
                      {customer.email}
                    </Typography>
                  </Box>
                  <ArrowForwardOutlinedIcon className="arrow-icon" />
                </Box>
              ))}
            </List>
          </Box>

          <Box display="flex" justifyContent="center" padding={1.5}>
            <Button variant="text">Load More</Button>
          </Box>
        </Box>
      </Modal>
      <AddNewCustomer
        open={addNewCustomerOpen}
        onClose={() => {
          setAddNewCustomerOpen(false);
        }}
      />
    </Box>
  );
};

export default SelectCustomerModal;
