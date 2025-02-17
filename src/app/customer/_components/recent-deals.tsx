'use client';

import React from 'react';
import { mockDeals, Deal } from '../../types/deal';
import { CardContent, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import '../../../styles/customer-page-style.css';
import { useRouter } from 'next/navigation';

const RecentDeals = () => {
  const router = useRouter();

  const handleDealClick = () => {
    router.push('/deal');
  };

  const handleDealIdClick = (dealId: string) => {
    router.push(`/deal/${dealId}`);
  };

  return (
    <CardContent className="card">
      <Box display={'flex'} justifyContent="space-between" marginBottom={3}>
        <Typography variant="h5" component="div" style={{ fontWeight: 700, fontSize: 18, marginTop: '24px' }}>
          Recent Deals
        </Typography>
        <Button variant="contained" sx={{ padding: '10px', marginTop: '19px' }} onClick={() => {}}>
          {<AddIcon sx={{ width: '20px', height: '20px' }} />}
        </Button>
      </Box>

      {mockDeals.slice(0, 3).map((deal: Deal) => (
        <Box onClick={() => handleDealIdClick(`${deal.id}`)} key={deal.id} display={'flex'} marginBottom={'22px'}>
          <Image src={deal.dealPicture} alt="Deal" width={44} height={44} style={{ borderRadius: '50%' }} />

          <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} width={'100%'}>
            <Box marginLeft={'16px'} fontSize={14}>
              <Typography className="typographyDealAddress">
                {deal.street}, {deal.city}, {deal.state}
              </Typography>
            </Box>

            <Box display={'flex'} alignItems={'center'} marginLeft={'16px'} fontSize={14} width={'100%'}>
              <Typography className="typographyDealInfo">{deal.appointmentDate}</Typography>
              <Typography className="doteTypographyDealInfo">•</Typography>
              <Typography className="typographyDealInfo">$ {deal.price}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
      <Box display="flex" justifyContent="center">
        <Button onClick={handleDealClick} variant="text">
          Load More
        </Button>
      </Box>
    </CardContent>
  );
};

export default RecentDeals;
