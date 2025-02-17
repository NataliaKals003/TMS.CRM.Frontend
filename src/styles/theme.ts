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
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 0,
          backgroundColor: '#FFFFFF',
          border: '1px solid #EAEEF4',
          color: 'white',
          position: 'relative',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
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
          lineHeight: '30px',
          padding: '0',
          margin: '0',
          zIndex: 1,
          minWidth: 0,
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

                '&:hover': {
                  backgroundColor: 'none',
                  boxShadow: 'none',
                },
              },
            },
          ],
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: '#F6FAFD',
          borderRadius: '8px',
          '& fieldset': {
            border: '1px solid #EAEEF4',
          },
          '& .MuiInputLabel-root': {
            color: '#7E92A2',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7E92A2',
          },
          fontWeight: 400,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: '#F6FAFD',
          color: '#7E92A2',
          padding: '15px 20px',

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#EAEEF4',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7E92A2',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7E92A2',
          },
        },
        select: {
          padding: '0px 12px 0 0 !important',
        },
      },
    },
  },
});

export default theme;
