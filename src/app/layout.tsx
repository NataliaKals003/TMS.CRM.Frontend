'use client';

import { ThemeProvider, Box } from '@mui/material';
import React from 'react';
import theme from '../styles/theme';
import Header from '@/components/header';
import Menu from '@/components/menu';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { HeaderProvider } from '@/context/header-context';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  title?: string;
  buttonTitle?: string;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <HeaderProvider>
          <html
            lang="en"
            style={{
              height: '100vh',
              width: '100%',
            }}
          >
            <body>
              <Box>
                <Header />
                <Box
                  sx={{
                    margin: '80px -8px 24px 80px',
                    backgroundColor: '#F6FAFD',
                  }}
                >
                  <Menu />
                  <Box sx={{ padding: ' 24px' }}>{children}</Box>
                </Box>
              </Box>
            </body>
          </html>
        </HeaderProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
