'use client';

import React from 'react';
import { mockDeals, Deal } from '../../../types/deal';
import { CardContent, Typography, Button } from '@mui/material';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import '../customer-page.css';
import { useRouter } from 'next/navigation';
import Grid from '@mui/material/Grid2';

const RecentDeals = () => {
  const router = useRouter();

  const handleDealClick = () => {
    router.push('/deal');
  };

  const handleDealIdClick = (dealId: number) => {
    router.push(`/deal/${dealId}`);
  };

  return (
    <CardContent className="card-recent-deals">
      <Grid container justifyContent="space-between" alignItems="center" marginBottom={3}>
        <Grid size={{ xs: 11, md: 11 }}>
          <Typography variant="h5" component="div" style={{ fontWeight: 700, fontSize: 18 }}>
            Recent Deals
          </Typography>
        </Grid>
        <Grid size={{ xs: 1, md: 1 }}>
          <Button variant="contained" className="button-add-recent-deals-card" onClick={() => {}}>
            <AddIcon className="add-icon-recent-deals-card" sx={{ width: '20px', height: '20px' }} />
          </Button>
        </Grid>
      </Grid>

      {mockDeals.slice(0, 3).map((deal: Deal) => (
        <Grid container key={deal.id} className="conatiner-recent-deals-card" alignItems="center" onClick={() => handleDealIdClick(deal.id)}>
          <Grid size={{ xs: 12, sm: 1, md: 2, lg: 1.5 }}>
            <Image src={deal.dealPicture} alt="Deal" width={44} height={44} style={{ borderRadius: '50%' }} />
          </Grid>

          <Grid size={{ xs: 12, sm: 11, md: 10, lg: 10.5 }}>
            <Grid container direction="column">
              <Grid size={{ xs: 11, md: 12 }} className="deal-address-recent-deals-card">
                <Typography className="typography-deal-address-recent-deals-card">
                  {deal.street}, {deal.city}, {deal.state}
                </Typography>
              </Grid>

              <Grid size={{ xs: 11, md: 12 }} className="deal-details-recent-deals-card" alignItems="center">
                <Typography className="typography-deal-info-recent-deals-card">
                  {new Date(deal.appointmentDate).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Typography>
                <Typography className="dote-typography-deal-info-recent-deals-card">•</Typography>
                <Typography className="typography-deal-info-recent-deals-card">$ {deal.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}

      <Grid container className="recent-deals-text-button">
        <Button onClick={handleDealClick} variant="text">
          Load More
        </Button>
      </Grid>
    </CardContent>
  );
};

export default RecentDeals;
