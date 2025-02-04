'use client';

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import logo from '../../public/Logo.jpg'; // Direct import of logo image

const Header = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOpacity(scrollY > 50 ? 0.7 : 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      sx={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        boxShadow: 'none',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <Toolbar
        sx={{
          padding: 0,
          display: 'flex',
          alignItems: 'center', // Align all elements in the header
          '@media (min-width: 600px)': {
            paddingLeft: '23px',
            paddingRight: '0px',
          },
        }}
      >
        {/* Logo on the left side */}
        <Box sx={{ display: 'flex', alignItems: 'center', borderRight: '1px solid #EAEEF4', height: '89px' }}>
          <Image src={logo} alt="Logo" width={46} height={46} style={{ marginRight: 21 }} />
        </Box>

        {/* Main title */}
        <Typography
          variant="h6"
          component="div"
          fontSize={24}
          fontWeight={700}
          sx={{
            flexGrow: 1,
            marginLeft: '21px',
            color: '#092C4C',
          }}
        >
          Dashboard
        </Typography>

        {/* Right section with buttons and avatar */}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: `rgba(238, 246, 251, ${opacity})`,
            paddingRight: '24px',
            height: '89px',
            width: '393px',
            justifyContent: 'end',
            transition: 'background-color 0.3s ease-in-out',
          }}
        >
          <Button variant="contained" sx={{ padding: '10px 16px' }} endIcon={<AddIcon />}>
            Add New
          </Button>

          <Search
            sx={{
              width: 23,
              height: 23,
              color: '#7E92A2',
              backgroundColor: '#ffffff',
              borderRadius: '50px',
              border: '1px solid #EAEEF4',
              padding: '15px',
              margin: '0 20px',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          />
          <Avatar src="/profile.jpg" alt="User" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
