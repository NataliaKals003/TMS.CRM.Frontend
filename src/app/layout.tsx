import { ThemeProvider } from '@mui/material';
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
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              backgroundColor: '#F5F5F5',
            }}
          >
            <Header />
            <div style={{ display: 'flex', flex: 1 }}>
              <Menu />
              <main style={{ flex: 1 }}>{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
