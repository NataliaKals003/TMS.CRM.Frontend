'use client';

import React, { useEffect, useState } from 'react';
import { mockDeals, Deal } from '../../../types/deal';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { useRouter } from 'next/navigation';
import './recent-deals-card.css';

const RecentDealsCard = () => {
  const router = useRouter();
  const [deal, setDeal] = useState<Deal | null>(null);

  useEffect(() => {
    if (mockDeals.length > 0) {
      const mostRecentDeal = mockDeals.reduce((prev, current) =>
        new Date(prev.appointmentDate) > new Date(current.appointmentDate) ? prev : current
      );
      setDeal(mostRecentDeal);
    }
  }, []);

  if (!deal) {
    return (
      <Card
        className="card-recent-deals"
        sx={{
          height: { xs: 290, sm: 350, md: 400 },
        }}
      >
        <CardContent>
          <Box className="recent-deals-not-found-card">
            <BusinessCenterOutlinedIcon className="icon-not-found-card" />
            <Typography>No deals found.</Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }

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

        {mockDeals.slice(0, 4).map((deal) => (
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
                <Typography className="body-text-bottom-recent-deal">
                  {new Date(deal.appointmentDate)
                    .toLocaleString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                    .replace(',', '')}
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
