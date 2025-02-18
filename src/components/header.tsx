'use client';

import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Avatar, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import logo from '../assets/logo.jpg';
import { HeaderModalType, useHeader } from '@/context/header-context';
import NewCustomerModal from './new-customer-modal';
import NewTaskModal from './new-task-modal';
import NewDealModal from './new-deal-modal';
import AddNewModal from './add-new-modal';

const Header: React.FC = () => {
  const { title, buttonTitle, modalType } = useHeader();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        return <NewDealModal open={!!isModalOpen} onClose={() => setIsModalOpen(false)} />;
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
        <Grid size={0.7} sx={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '22px' }}>
          <Image src={logo} alt="Logo" width={46} height={46} />
        </Grid>

        <Grid size={7.6}>
          <Typography variant="h6" fontSize={24} fontWeight={700} color="#092C4C" sx={{ marginRight: 2, padding: '25px 24px' }}>
            {title}
          </Typography>
        </Grid>

        <Grid size={3.7} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, paddingRight: '24px' }}>
          <Button variant="contained" sx={{ padding: '10px 16px' }} endIcon={<AddIcon />} onClick={() => setIsModalOpen(true)}>
            {buttonTitle}
          </Button>
          <Search
            sx={{
              width: 23,
              height: 23,
              color: '#7E92A2',
              backgroundColor: '#fff',
              borderRadius: '50px',
              border: '1px solid #EAEEF4',
              padding: '15px',
              cursor: 'pointer',
            }}
          />
          <Avatar src={'https://randomuser.me/api/portraits/women/1.jpg'} alt="User" />
        </Grid>
      </Grid>
      {renderModal()}
    </AppBar>
  );
};

export default Header;
