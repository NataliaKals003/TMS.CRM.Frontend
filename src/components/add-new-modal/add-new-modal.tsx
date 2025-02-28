import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Button, Modal, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { BusinessCenterOutlined, PeopleAltOutlined } from '@mui/icons-material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ModalSelectCustomer from '../select-customer-modal/select-customer-modal';
import AddNewCustomer from '../new-customer-modal/new-customer-modal';
import NewDealModal from '../new-deal-modal/new-deal-modal';
import '../../styles/modal-style.css';
import './add-new-modal-style.css';

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
          <Grid container className="boxHeaderAddNew">
            <Grid size={{ xs: 10, md: 10 }}>
              <Typography className="titleHeaderAddNew">Add New</Typography>
            </Grid>
            <Grid size={{ xs: 2, md: 2 }}>
              <Button endIcon={<CancelIcon className="closeIcon" />} onClick={onClose} />
            </Grid>
          </Grid>
          <Grid container className="contextBox">
            <Grid size={{ xs: 12, md: 12 }} onClick={openSelectCustomerModal} className="optionsBox">
              <Grid container alignItems="center">
                <Grid size={{ xs: 10, md: 11 }}>
                  <Button variant="text" className="textOptions" startIcon={<BusinessCenterOutlined className="optionIcon" />}>
                    Deals
                  </Button>
                </Grid>
                <Grid size={{ xs: 2, md: 1 }} className="arowGrid">
                  <ArrowForwardOutlinedIcon className="arrowIcon" />
                </Grid>
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }} onClick={openAddNewCustomerModal} className="optionsBox">
              <Grid container alignItems="center">
                <Grid size={{ xs: 10, md: 11 }}>
                  <Button variant="text" className="textOptions" startIcon={<PeopleAltOutlined className="optionIcon" />}>
                    Customers
                  </Button>
                </Grid>
                <Grid size={{ xs: 2, md: 1 }} className="arowGrid">
                  <ArrowForwardOutlinedIcon className="arrowIcon" />
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
          console.log('customerId: ', customerId);
          setSelectedCustomerId(customerId);
          setAddNewDealOpen(true);
        }}
      />

      {selectedCustomerId && (
        <NewDealModal
          open={addNewDealOpen}
          onClose={() => {
            setAddNewDealOpen(false);
          }}
          onChangeCustomerRequested={() => {
            setSelectedCustomersOpen(true);
            console.log('onChangeCustomerRequested');
            setAddNewDealOpen(false);
          }}
          customerId={selectedCustomerId}
        />
      )}
    </>
  );
};

export default AddNewModal;
