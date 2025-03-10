'use client';

import React from 'react';
import { mockDeals, Deal } from '../../../types/deal';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './recent-deals-card.css';

const RecentDealsCard = () => {
  const router = useRouter();

  const handleDealClick = () => {
    router.push('/deal');
  };

  return (
    <Card className="card-recent-deals">
      <CardContent>
        <Box display={'flex'} justifyContent="space-between" alignContent={'center'} marginBottom={3}>
          <Typography className="title-recent-deal-card">Recent Deals</Typography>
          <Button className="text-button-recent-deal" onClick={handleDealClick} variant="text" color="primary">
            View All
          </Button>
        </Box>

        {mockDeals.slice(0, 4).map((deal: Deal) => (
          <Box className="deal-body-recent-deal" onClick={() => router.push(`deal/${deal.id}`)} key={deal.id}>
            <Image src={deal.dealPicture} alt="Deal" width={44} height={44} style={{ borderRadius: '50%' }} />

            <Box className="details-body-recent-deal">
              <Box className="body-text-recent-deal">
                <Typography className="body-text-bold-recent-deal" width={'100%'}>
                  {deal.street}
                </Typography>
                <Typography className="body-text-bottom-recent-deal">{deal.city}</Typography>
              </Box>

              <Box className="body-text-recent-deal">
                <Typography className="body-text-bold-recent-deal">{deal.price}</Typography>
                <Typography className="body-text-bottom-recent-deal">{deal.appointmentDate}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentDealsCard;
