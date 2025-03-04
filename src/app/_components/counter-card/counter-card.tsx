import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import './counter-card.css';

interface CounterCardProps {
  title: string;
  count: string;
  iconCounter: StaticImageData;
}

const CounterCard: React.FC<CounterCardProps> = (props: CounterCardProps) => {
  return (
    <Card className="card-counter">
      <Box className="content">
        <Typography className="title-counter">{props.title}</Typography>
        <Typography className="body-text-counter">{props.count}</Typography>
      </Box>
      <Image className="image-counter" src={props.iconCounter} alt="Deals" width={80} height={80} style={{ borderRadius: '50%', marginTop: 20 }} />
    </Card>
  );
};

export default CounterCard;
