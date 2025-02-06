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
                position: 'relative',
                backgroundColor: '#F6FAFD',
              }}
            >
              <Menu />
              <Box>{children}</Box>
            </Box>
          </Box>
        </body>
      </html>
    </ThemeProvider>
  );
}
