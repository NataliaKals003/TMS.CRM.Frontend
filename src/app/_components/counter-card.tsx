import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import '../../styles/counter-card-style.css';

interface CounterCardProps {
  title: string;
  count: string;
  iconCounter: StaticImageData;
}

const CounterCard: React.FC<CounterCardProps> = ({ title, count, iconCounter }) => {
  return (
    <Card className="cardCounter">
      <Box>
        <Typography className="titleCounter">{title}</Typography>
        <Typography className="bodyText">{count}</Typography>
      </Box>
      <Image className="imageCounter" src={iconCounter} alt="Deals" width={80} height={80} style={{ borderRadius: '50%', marginTop: 20 }} />
    </Card>
  );
};

export default CounterCard;
