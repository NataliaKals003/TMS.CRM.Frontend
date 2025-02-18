'use client';

import { ThemeProvider, Box } from '@mui/material';
import React, { useState } from 'react';
import theme from '../styles/theme';
import Header from '@/components/header';
import Menu from '@/components/menu';
import ModalAddNew from '../components/add-new-modal';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <html
          lang="en"
          style={{
            height: '100vh',
            width: '100%',
          }}
        >
          <body>
            <Box>
              <Header onAddNewClick={() => setOpen(true)} />
              <Box
                sx={{
                  margin: '80px -8px 24px 80px',
                  backgroundColor: '#F6FAFD',
                }}
              >
                <Menu />
                <Box sx={{ padding: ' 24px' }}>{children}</Box>
              </Box>
              <ModalAddNew open={open} onClose={() => setOpen(false)} />
            </Box>
          </body>
        </html>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
