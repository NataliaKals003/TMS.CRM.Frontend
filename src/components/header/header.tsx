'use client';

import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Avatar, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import logo from '../../assets/logo.jpg';
import { HeaderModalType, useHeader } from '@/context/header-context';
import NewCustomerModal from '../new-customer-modal/new-customer-modal';
import NewTaskModal from '../new-task-modal/new-task-modal';
import NewDealModal from '../new-deal-modal/new-deal-modal';
import AddNewModal from '../add-new-modal/add-new-modal';
import './header.css';
import SelectCustomerModal from '../select-customer-modal/select-customer-modal';

const Header: React.FC = () => {
  const { title, buttonTitle, modalType } = useHeader();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addNewDealOpen, setAddNewDealOpen] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => setOpacity(window.scrollY > 50 ? 0.7 : 1);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderModal = () => {
    switch (modalType) {
      case HeaderModalType.newCustomer:
        return <NewCustomerModal open={!!isModalOpen} onClose={() => setIsModalOpen(false)} />;
      case HeaderModalType.newTask:
        return <NewTaskModal open={!!isModalOpen} onClose={() => setIsModalOpen(false)} />;
      case HeaderModalType.newDeal:
        return (
          <>
            <SelectCustomerModal
              open={!!isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onCustomerSelected={(customerId) => {
                setSelectedCustomerId(customerId);
                setIsModalOpen(false);
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
                  setAddNewDealOpen(false);
                  setIsModalOpen(true);
                }}
                customerId={selectedCustomerId}
              />
            )}
          </>
        );
      case HeaderModalType.generalAddNew:
        return <AddNewModal open={!!isModalOpen} onClose={() => setIsModalOpen(false)} />;
    }
  };

  return (
    <AppBar
      sx={{
        backgroundColor: `rgba(246, 250, 253, ${opacity})`,
        boxShadow: 'none',
        transition: 'background-color 0.9s',
      }}
    >
      <Grid container alignItems={'center'}>
        <Grid size={{ xs: 2, sm: 1, md: 1, lg: 0.5 }} sx={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '22px' }}>
          <Image src={logo} alt="Logo" className="logo-image-header" />
        </Grid>

        <Grid size={{ xs: 0, sm: 6, md: 6, lg: 7.5 }}>
          <Typography className="title-header">{title}</Typography>
        </Grid>

        <Grid
          size={{ xs: 10, sm: 5, md: 5, lg: 4 }}
          sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, paddingRight: '24px' }}
        >
          <Button className="add-new-header" variant="contained" endIcon={<AddIcon />} onClick={() => setIsModalOpen(true)}>
            {buttonTitle}
          </Button>
          <Search className="search-header" />
          <Avatar className="avatar-header" src={'https://randomuser.me/api/portraits/women/1.jpg'} alt="User" />
        </Grid>
      </Grid>
      {renderModal()}
    </AppBar>
  );
};

export default Header;
