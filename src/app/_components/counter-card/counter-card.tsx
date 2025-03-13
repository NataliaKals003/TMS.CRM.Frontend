import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import './counter-card.css';

interface CounterCardProps {
  title: string;
  count: number;
  iconCounter: StaticImageData;
}

const CounterCard: React.FC<CounterCardProps> = (props: CounterCardProps) => {
  const { title, count, iconCounter } = props;

  // Determine if the count is 0
  const isCountZero = count === 0;

  return (
    <Card className="card-counter">
      <Box className="content">
        <Typography className={`title-counter ${isCountZero ? 'zero-count' : ''}`}>{title}</Typography>
        <Typography className={`body-text-counter ${isCountZero ? 'zero-count' : ''}`}>{count}</Typography>
      </Box>
      <Image
        className="image-counter"
        src={iconCounter}
        alt={title}
        width={80}
        height={80}
        style={{
          borderRadius: '50%',
          marginTop: 20,
          filter: isCountZero ? 'grayscale(100%)' : 'none',
        }}
      />
    </Card>
  );
};

export default CounterCard;
