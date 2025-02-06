import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface DealsProps {
  ProfileImage: string;
  street: string;
  city: string;
  date: string;
  roomArea?: number;
  price: string;
  people?: number;
}

const Deals: React.FC<DealsProps> = ({ ProfileImage, street, city, date, roomArea, price, people }) => {
  return (
    <Box display="flex" alignItems="center" marginTop={2}>
      <Image src={ProfileImage} alt="Profile" width={44} height={44} style={{ borderRadius: '50%' }} />
      <Box marginLeft={1.5} fontSize={14}>
        <Typography variant="body2" color="white" style={{ fontWeight: 700 }}>
          {street}
        </Typography>
        <Typography variant="body2" color="#D6E1E6" style={{ fontWeight: 400 }}>
          {city}
        </Typography>
        <Typography variant="body2" color="#D6E1E6" style={{ fontWeight: 400 }}>
          {date}
        </Typography>
        <Typography variant="body2" color="#D6E1E6" style={{ fontWeight: 400 }}>
          {roomArea} M²
        </Typography>
        <Typography variant="body2" color="#D6E1E6" style={{ fontWeight: 400 }}>
          {price}
        </Typography>
        <Typography variant="body2" color="#D6E1E6" style={{ fontWeight: 400 }}>
          {people}
        </Typography>
      </Box>
    </Box>
  );
};

export default Deals;
