'use client';

import React from 'react';
import { mockDeals, Deal } from '../types/deal';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const RecentDealsCard = () => {
  const router = useRouter();

  const handleDealClick = () => {
    router.push('/deal');
  };

  return (
    <Card
      onClick={handleDealClick}
      sx={{
        backgroundColor: '#FFFFFF',
        color: '#092C4C',
        position: 'relative',
        border: '1px solid #EAEEF4',
        boxShadow: 'none',
        borderRadius: '12px',
        flex: 1,
        cursor: 'pointer',
      }}
    >
      <CardContent>
        <Box display={'flex'} justifyContent="space-between" alignContent={'center'} marginBottom={3}>
          <Typography variant="h5" component="div" style={{ fontWeight: 700, fontSize: 18 }}>
            Recent Deals
          </Typography>
          <Button
            variant="text"
            color="primary"
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
              },
            }}
          >
            View All
          </Button>
        </Box>

        {mockDeals.slice(0, 4).map((deal: Deal) => (
          <Box key={deal.id} display={'flex'} marginBottom={2}>
            <Image src={deal.dealPicture} alt="Profile" width={44} height={44} style={{ borderRadius: '50%' }} />

            <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
              <Box marginLeft={1.5} fontSize={14}>
                <Typography variant="body2" color="092C4C" style={{ fontWeight: 700, fontSize: 16 }}>
                  {deal.street}
                </Typography>
                <Typography variant="body2" color="#7E92A2" style={{ fontWeight: 400, lineHeight: '27px' }}>
                  {deal.city}
                </Typography>
              </Box>

              <Box marginLeft={1.5} fontSize={14}>
                <Typography variant="body2" color="092C4C" style={{ fontWeight: 700, fontSize: 16, textAlign: 'right' }}>
                  {deal.price}
                </Typography>
                <Typography variant="body2" color="#7E92A2" width={'max-content'} textAlign={'right'} style={{ fontWeight: 400, lineHeight: '27px' }}>
                  {deal.appointmentDate}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentDealsCard;
