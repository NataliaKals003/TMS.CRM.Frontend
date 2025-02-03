'use client';

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Avatar, IconButton } from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const DealProgressCard = () => {
  const deal = {
    profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
    street: '319 Haul Road',
    price: '$5750',
    city: 'Glenrock, WY',
  };

  const initialActivities = [
    { date: '17 Nov 2021', details: 'Installation of the new air conditioning system', completed: false },
    { date: '17 Nov 2021', details: 'Installation of the new air conditioning system', completed: false },
    // Add more activities as needed
  ];

  const [activities, setActivities] = useState(initialActivities);

  const toggleActivity = (index: number) => {
    setActivities((prev) => prev.map((activity, i) => (i === index ? { ...activity, completed: !activity.completed } : activity)));
  };

  return (
    <Card
      sx={{
        maxWidth: 519,
        width: '100%',
        margin: 3,
        padding: '0 8px',
        backgroundColor: '#FFFFFF',
        color: '#092C4C',
        position: 'relative',
        border: '1px solid #EAEEF4',
        boxShadow: 'none',
        borderRadius: '12px',
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" marginBottom={3} justifyContent="space-between" paddingBottom={2} borderBottom="1px solid #EAEEF4">
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src={deal.profilePicture} alt="Profile" />
            <Box>
              <Typography variant="subtitle1" fontWeight={700} fontSize={16}>
                {deal.street}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {deal.city}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Button
              variant="contained"
              sx={{
                padding: '10px 16px',
                backgroundColor: '#ECECFE',
                color: '#514EF3',
                textTransform: 'none',
              }}
            >
              IN PROGRESS
            </Button>
            <ArrowForwardOutlinedIcon sx={{ color: '#514EF3', width: 20, height: 20, marginLeft: 1.5 }} />
          </Box>
        </Box>

        {activities.map((activity, index) => (
          <Box key={index} display="flex" alignItems="center" marginBottom={2.5}>
            {/* Vertical Line */}
            {/* {index !== 0 && (
              <Box
                sx={{
                  position: 'absolute',
                  left: 45,
                  height: 207,
                  borderLeft: '1px solid #EAEEF4',
                  top: 0,
                }}
              />
            )} */}
            <Box display="flex" alignItems="center" gap={1}>
              <IconButton onClick={() => toggleActivity(index)} sx={{ padding: 0 }}>
                <Box
                  sx={{
                    width: 27,
                    height: 27,
                    borderRadius: '50%',
                    border: '2px solid #514EF3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: activity.completed ? '#514EF3' : 'transparent',
                  }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: activity.completed ? 'white' : 'transparent',
                    }}
                  />
                </Box>
              </IconButton>
              {/* Activity Details */}
              <Box>
                <Typography variant="body2" color="#7E92A2" fontWeight={400}>
                  {activity.date}
                </Typography>
                <Typography variant="body2" color="#092C4C" fontWeight={500}>
                  {activity.details}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
        <Box display="flex" justifyContent="center" marginTop={4}>
          <Button
            variant="text"
            color="primary"
            style={{ fontSize: '16px', fontWeight: 700 }}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
              },
            }}
          >
            Load More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DealProgressCard;
