'use client';
import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#514EF3',
    },
    secondary: {
      main: '#ECECFE',
    },
    background: {
      default: '#F6FAFD',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: '0',
          minHeight: '100vh',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid #EAEEF4',
          backgroundColor: '#F6FAFD',
          position: 'fixed',
          zIndex: 1201,
          height: '90px',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F6FAFD',
          marginTop: '90px',
          borderRight: '1px solid #EAEEF4',
          width: '90px',
          position: 'fixed',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 20,
          boxShadow: 'none',
          fontWeight: '500',
          fontSize: '14px',
          padding: '0',
          margin: '0',
          zIndex: 1,
          '&:hover': {
            backgroundColor: 'none',
            boxShadow: 'none',
          },
          variants: [
            {
              props: { variant: 'contained', color: 'primary' },
              style: {
                color: '#ffffff',
              },
            },
            {
              props: { variant: 'contained', color: 'secondary' },
              style: {
                color: '#092C4C',
              },
            },
            {
              props: { variant: 'text', color: 'primary' },
              style: {
                color: 'primary',
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
