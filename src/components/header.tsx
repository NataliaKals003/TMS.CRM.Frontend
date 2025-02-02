import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import LogoImage from './logo-image';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          padding: 0,
          '@media (min-width: 600px)': {
            paddingLeft: '23px',
            paddingRight: '0px',
          },
        }}
      >
        <LogoImage />
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

        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#EEF6FB',
            paddingRight: '24px',
            height: '89px',
            width: '393px',
            justifyContent: 'end',
          }}
        >
          <Button variant="contained" style={{ padding: '10px 16px 10px 16px' }} endIcon={<AddIcon />}>
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
