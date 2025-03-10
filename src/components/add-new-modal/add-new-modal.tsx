import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Button, Modal, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { BusinessCenterOutlined, PeopleAltOutlined } from '@mui/icons-material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ModalSelectCustomer from '../select-customer-modal/select-customer-modal';
import AddNewCustomer from '../customer-form-modal/customer-form-modal';
import DealModal from '../deal-form-modal/deal-form-modal';
import '../../styles/modal.css';
import './add-new-modal.css';

interface AddNewFormProps {
  open: boolean;
  onClose: () => void;
}

const AddNewModal: React.FC<AddNewFormProps> = ({ open, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedCustomersOpen, setSelectedCustomersOpen] = useState(false);
  const [addNewCustomerOpen, setAddNewCustomerOpen] = useState(false);
  const [addNewDealOpen, setAddNewDealOpen] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  const openSelectCustomerModal = () => {
    setSelectedCustomersOpen(true);
    onClose();
  };

  const openAddNewCustomerModal = () => {
    setAddNewCustomerOpen(true);
    onClose();
  };

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
    <>
      <Modal open={open}>
        <Box
          ref={modalRef}
          className="box"
          sx={{
            width: { xs: 200, sm: 220, md: 240 },
          }}
        >
          <Grid container className="box-header-add-new">
            <Grid size={{ xs: 10, md: 10 }}>
              <Typography className="title-header-add-new">Add New</Typography>
            </Grid>
            <Grid size={{ xs: 2, md: 2 }}>
              <Button endIcon={<CancelIcon className="close-icon" />} onClick={onClose} />
            </Grid>
          </Grid>
          <Grid container className="content-box-add-new">
            <Grid size={{ xs: 12, md: 12 }} onClick={openSelectCustomerModal} className="options-box-add-new">
              <Grid container alignItems="center">
                <Grid size={{ xs: 10, md: 11 }}>
                  <Button variant="text" className="text-options-add-new" startIcon={<BusinessCenterOutlined className="option-icon-add-new" />}>
                    Deals
                  </Button>
                </Grid>
                <Grid size={{ xs: 2, md: 1 }} className="arrow-grid-add-new">
                  <ArrowForwardOutlinedIcon className="arrow-icon" />
                </Grid>
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }} onClick={openAddNewCustomerModal} className="options-box-add-new">
              <Grid container alignItems="center">
                <Grid size={{ xs: 10, md: 11 }}>
                  <Button variant="text" className="text-options-add-new" startIcon={<PeopleAltOutlined className="option-icon-add-new" />}>
                    Customers
                  </Button>
                </Grid>
                <Grid size={{ xs: 2, md: 1 }} className="arrow-grid-add-new">
                  <ArrowForwardOutlinedIcon className="arrow-icon" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <AddNewCustomer open={addNewCustomerOpen} onClose={() => setAddNewCustomerOpen(false)} />
      <ModalSelectCustomer
        open={selectedCustomersOpen}
        onClose={() => setSelectedCustomersOpen(false)}
        onCustomerSelected={(customerId: number) => {
          setSelectedCustomerId(customerId);
          setAddNewDealOpen(true);
        }}
      />

      {selectedCustomerId && (
        <DealModal
          open={addNewDealOpen}
          onClose={() => {
            setAddNewDealOpen(false);
          }}
          onChangeCustomerRequested={() => {
            setSelectedCustomersOpen(true);
            setAddNewDealOpen(false);
          }}
          customerId={selectedCustomerId}
        />
      )}
    </>
  );
};

export default AddNewModal;
