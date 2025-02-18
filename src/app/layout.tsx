'use client';

import { ThemeProvider, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import theme from '../styles/theme';
import Header from '@/components/header';
import Menu from '@/components/menu';
import AddNewModal from '../components/add-new-modal';
import NewCustomerModal from '../components/new-customer-modal';
import NewDealModal from '../components/new-deal-modal';
import NewTaskModal from '../components/new-task-modal';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { HeaderProvider } from '@/context/header-context';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  title?: string;
  buttonTitle?: string;
}>) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const renderModal = () => {
    if (pathname.includes('/customers')) {
      return <NewCustomerModal open={open} onClose={() => setOpen(false)} />;
    } else if (pathname.includes('/tasks')) {
      return <NewTaskModal open={open} onClose={() => setOpen(false)} />;
    } else if (pathname.includes('/deals')) {
      return <NewDealModal open={open} onClose={() => setOpen(false)} />;
    } else {
      return <AddNewModal open={open} onClose={() => setOpen(false)} />;
    }
  };

  useEffect(() => {
    console.log('Current Pathname:', pathname);
  }, [pathname]);

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
                <Header onOpenModalClick={() => setOpen(true)} />
                <Box
                  sx={{
                    margin: '80px -8px 24px 80px',
                    backgroundColor: '#F6FAFD',
                  }}
                >
                  <Menu />
                  <Box sx={{ padding: ' 24px' }}>{children}</Box>
                </Box>
                {renderModal()}
              </Box>
            </body>
          </html>
        </HeaderProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
