'use client';

import React from 'react';
import '../styles/not-found.css';
import { Box, Container, Typography } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <Container className="not-found-container">
      <Box className="not-found-content">
        <Typography className="not-found-error-code">404</Typography>
        <Typography className="not-found-error-title">Page Not Found</Typography>
        <Typography className="not-found-error-message">Sorry, the page you are looking for could not be found.</Typography>
        <Link href="/" className="not-found-return-home" title="Return Home">
          <ArrowBackOutlinedIcon />
          <Typography>Return Home</Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
