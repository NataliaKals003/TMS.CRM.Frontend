'use client';

import { ThemeProvider, Box } from '@mui/material';
import React from 'react';
import theme from '../styles/theme';
import Header from '../components/header/header';
import Menu from '../components/menu/menu';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { HeaderProvider } from '@/context/header-context';
import { AuthProvider } from '../hooks/auth-provider';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  title?: string;
  buttonTitle?: string;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <HeaderProvider>
          <AuthProvider>
            <html
              lang="en"
              style={{
                height: '100vh',
                width: '100%',
              }}
            >
              <body style={{ margin: 0 }}>
                <Box>
                  {!isLoginPage && <Header />}
                  <Box
                    sx={{
                      margin: isLoginPage ? '0' : '80px -8px 24px 80px',
                      backgroundColor: isLoginPage ? 'transparent' : '#F6FAFD',
                    }}
                  >
                    {!isLoginPage && <Menu />}
                    <Box
                      sx={
                        !isLoginPage
                          ? {
                              padding: {
                                xs: '12px',
                                sm: '16px',
                                md: '20px',
                                lg: '24px',
                              },
                            }
                          : undefined
                      }
                    >
                      {children}
                    </Box>
                  </Box>
                </Box>
              </body>
            </html>
          </AuthProvider>
        </HeaderProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
