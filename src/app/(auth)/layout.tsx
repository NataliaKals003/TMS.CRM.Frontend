'use client';

import { ThemeProvider, Typography, Divider } from '@mui/material';
import theme from '@/styles/theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import logo from '../../assets/leaf.svg';
import './layout-style.css';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={4} className="layout-grid">
          <Grid size={{ xs: 12, sm: 12, md: 8 }} container direction="column" className="text-grid">
            <Grid container alignItems="center" className="crm-container">
              <Image src={logo} alt="Logo" className="logo-leaf" />
              <Typography className="text-CRM">CRM</Typography>
            </Grid>

            <Divider className="divider" />

            <Typography className="text-description">Create and manage customers, deals, activities and tasks</Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 4 }}>{children}</Grid>
        </Grid>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
