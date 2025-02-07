'use client';

import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Avatar, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import logo from '../assets/logo.jpg';

interface HeaderProps {
  onAddNewClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddNewClick }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => setOpacity(window.scrollY > 50 ? 0.7 : 1);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar sx={{ backgroundColor: `rgba(255, 255, 255, ${opacity})`, boxShadow: 'none', transition: '0.3s' }}>
      <Grid container alignItems={'center'}>
        <Grid size={0.7} sx={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '22px' }}>
          <Image src={logo} alt="Logo" width={46} height={46} />
        </Grid>

        <Grid size={7.6}>
          <Typography variant="h6" fontSize={24} fontWeight={700} color="#092C4C" sx={{ marginRight: 2, padding: '25px 24px' }}>
            Dashboard
          </Typography>
        </Grid>

        <Grid size={3.7} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, paddingRight: '24px' }}>
          <Button variant="contained" sx={{ padding: '10px 16px' }} endIcon={<AddIcon />} onClick={onAddNewClick}>
            Add New
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
            }}
          />
          <Avatar src="/profile.jpg" alt="User" />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
