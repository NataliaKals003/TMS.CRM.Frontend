'use client';

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Avatar, IconButton } from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import '../../styles/deal-progress-card-style.css';

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
    <Card className="recentCard">
      <CardContent>
        <Box className="header">
          <Box className="dealProfile">
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
          <Box className="inProgressButton">
            <Button variant="contained" className="headerButton">
              IN PROGRESS
            </Button>
            <ArrowForwardOutlinedIcon className="arrowIcon" />
          </Box>
        </Box>

        {activities.map((activity, index) => (
          <Box key={index} className="activities">
            <Box display="flex" alignItems="center" gap={1}>
              <IconButton onClick={() => toggleActivity(index)} sx={{ padding: 0 }}>
                <Box
                  className="buttonIcon"
                  sx={{
                    backgroundColor: activity.completed ? '#514EF3' : 'transparent',
                  }}
                >
                  <Box
                    className="insideButtonIcon"
                    sx={{
                      backgroundColor: activity.completed ? 'white' : 'transparent',
                    }}
                  />
                </Box>
              </IconButton>
              <Box>
                <Typography className="activityDate">{activity.date}</Typography>
                <Typography className="activityDetails">{activity.details}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
        <Box display="flex" justifyContent="center" marginTop={4}>
          <Button variant="text" color="primary" className="footerButton">
            Load More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DealProgressCard;
