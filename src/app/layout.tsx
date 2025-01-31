import { ThemeProvider, Box } from '@mui/material';
import type { Metadata } from 'next';
import theme from '../styles/theme';
import Header from '@/components/header';
import Menu from '@/components/menu';

export const metadata: Metadata = {
  title: 'CRM',
  description: 'CRM',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <Box>
            <Header />
            <Box
              sx={{
                marginTop: '90px',
                marginLeft: '80px',
                position: 'relative',
              }}
            >
              <Menu />
              <Box sx={{ backgroundColor: '#F6FAFD' }}>{children}</Box>
            </Box>
          </Box>
        </body>
      </html>
    </ThemeProvider>
  );
}
