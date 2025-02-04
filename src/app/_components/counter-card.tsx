import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

interface CounterCardProps {
  title: string;
  count: string;
  iconCounter: StaticImageData;
}

const CounterCard: React.FC<CounterCardProps> = ({ title, count, iconCounter }) => {
  return (
    <Card
      sx={{
        color: '#7E92A2',
        boxShadow: 'none',
        borderRadius: '12px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
        padding: '24px',
      }}
    >
      <Box>
        <Typography variant="h5" component="div" style={{ fontWeight: 500, fontSize: 18, marginBottom: 10, marginRight: 45 }}>
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{
            color: '#092C4C',
            fontWeight: 600,
            fontSize: 48,
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
          }}
        >
          {count}
        </Typography>
      </Box>
      <Image src={iconCounter} alt="Deals" width={80} height={80} style={{ borderRadius: '50%', marginTop: 20 }} />
    </Card>
  );
};

export default CounterCard;
