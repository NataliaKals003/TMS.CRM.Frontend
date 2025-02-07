'use client';

import { ThemeProvider, Box } from '@mui/material';
import React, { useState } from 'react';
import theme from '../styles/theme';
import Header from '@/components/header';
import Menu from '@/components/menu';
import ModalAddNew from '../components/modal-add-new';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <html
        lang="en"
        style={{
          height: '100vh',
          width: '100%',
        }}
      >
        <body>
          <Box>
            <Header onAddNewClick={handleOpen} />
            <Box
              sx={{
                margin: '80px -8px 24px 80px',
                position: 'relative',
                backgroundColor: '#F6FAFD',
              }}
            >
              <Menu />
              <Box>{children}</Box>
            </Box>
            <ModalAddNew open={open} onClose={handleClose} />
          </Box>
        </body>
      </html>
    </ThemeProvider>
  );
}
