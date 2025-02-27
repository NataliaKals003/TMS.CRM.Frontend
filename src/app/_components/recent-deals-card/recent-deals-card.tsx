'use client';

import React from 'react';
import { mockDeals, Deal } from '../../../types/deal';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './recent-deals-card-style.css';

const RecentDealsCard = () => {
  const router = useRouter();

  const handleDealClick = () => {
    router.push('/deal');
  };

  return (
    <Card className="cardRecentDeals">
      <CardContent>
        <Box display={'flex'} justifyContent="space-between" alignContent={'center'} marginBottom={3}>
          <Typography className="titleCard">Recent Deals</Typography>
          <Button className="textButton" onClick={handleDealClick} variant="text" color="primary">
            View All
          </Button>
        </Box>

        {mockDeals.slice(0, 4).map((deal: Deal) => (
          <Box className="dealBody" onClick={() => router.push(`deal/${deal.id}`)} key={deal.id}>
            <Image src={deal.dealPicture} alt="Deal" width={44} height={44} style={{ borderRadius: '50%' }} />

            <Box className="detailsBody">
              <Box className="bodyText">
                <Typography className="bodyTextBold" width={'100%'}>
                  {deal.street}
                </Typography>
                <Typography className="bodyTextBottom">{deal.city}</Typography>
              </Box>

              <Box className="bodyText">
                <Typography className="bodyTextBold">{deal.price}</Typography>
                <Typography className="bodyTextBottom">{deal.appointmentDate}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentDealsCard;
