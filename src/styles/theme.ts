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
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid #EAEEF4',
          zIndex: 1201,
          backgroundColor: '#F6FAFD',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 16px 10px 20px',
          textTransform: 'none',
          borderRadius: 20,
          boxShadow: 'none',
          fontWeight: 'normal',
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
    // MuiAlert: {
    //   styleOverrides: {
    //     root: {
    //       variants: [
    //         {
    //           props: { severity: 'info' },
    //           style: {
    //             backgroundColor: '#60a5fa',
    //           },
    //         },
    //       ],
    //     },
    //   },
    // },
  },
});

export default theme;
