import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

const RecentDealsCard = () => {
  const deals = [
    {
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      street: '319 Haul Road',
      price: '$5750',
      city: 'Glenrock, WY',
      date: 'Nov 14, 07:00 AM',
    },
    {
      profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg',
      street: '47 Spruce Drive',
      price: '$5750',
      city: 'Quantico, VA',
      date: 'Nov 15, 08:00 AM',
    },
    {
      profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
      street: '47 Spruce Drive',
      price: '$5750',
      city: 'Quantico, VA',
      date: 'Nov 15, 08:00 AM',
    },
    {
      profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
      street: '47 Spruce Drive',
      price: '$5750',
      city: 'Quantico, VA',
      date: 'Nov 15, 08:00 AM',
    },
  ];

  return (
    <Card
      sx={{
        backgroundColor: '#FFFFFF',
        color: '#092C4C',
        position: 'relative',
        border: '1px solid #EAEEF4',
        boxShadow: 'none',
        borderRadius: '12px',
        flex: 1,
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

        {deals.map((deal, index) => (
          <Box key={index} display={'flex'} sx={{ marginBottom: index === deals.length - 1 ? 0 : 4 }}>
            <Image src={deal.profilePicture} alt="Profile" width={44} height={44} style={{ borderRadius: '50%' }} />

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
                  {deal.date}
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
