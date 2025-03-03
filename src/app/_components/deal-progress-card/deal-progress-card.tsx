'use client';

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Avatar, IconButton } from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import './deal-progress-card.css';

const DealProgressCard = () => {
  const deal = {
    dealPicture: 'https://randomuser.me/api/portraits/men/1.jpg',
    street: '319 Haul Road',
    price: '$5750',
    city: 'Glenrock, WY',
  };

  const initialActivities = [
    { date: '17 Nov 2021', details: 'Installation of the new air conditioning system', completed: false },
    { date: '17 Nov 2021', details: 'Installation of the new air conditioning system', completed: false },
  ];

  const [activities, setActivities] = useState(initialActivities);

  const toggleActivity = (index: number) => {
    setActivities((prev) => prev.map((activity, i) => (i === index ? { ...activity, completed: !activity.completed } : activity)));
  };

  return (
    <Card className="recent-card">
      <CardContent>
        <Box className="header-progress-card">
          <Box className="deal-profile">
            <Avatar src={deal.dealPicture} alt="Profile" />
            <Box>
              <Typography className="dealDetails" variant="subtitle1" fontWeight={700} fontSize={16}>
                {deal.street}
              </Typography>
              <Typography className="dealDetails" variant="body2" color="textSecondary">
                {deal.city}
              </Typography>
            </Box>
          </Box>
          <Box className="in-progress-button">
            <Button variant="contained" className="header-button">
              IN PROGRESS
            </Button>
            <ArrowForwardOutlinedIcon className="arrow-icon" />
          </Box>
        </Box>

        {activities.map((activity, index) => (
          <Box key={index} className="activities">
            <Box display="flex" alignItems="center" gap={1}>
              <IconButton onClick={() => toggleActivity(index)} sx={{ padding: 0 }}>
                <Box className={`button-icon ${activity.completed ? 'completed' : ''}`}>
                  <Box className={`inside-button-icon ${activity.completed ? 'completed' : ''}`} />
                </Box>
              </IconButton>
              <Box>
                <Typography className="activity-date">{activity.date}</Typography>
                <Typography className="activity-details">{activity.details}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
        <Box className="load-more-deal-progress">
          <Button variant="text" color="primary" className="footer-button">
            Load More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DealProgressCard;
