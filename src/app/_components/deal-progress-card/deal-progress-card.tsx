'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Avatar } from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import './deal-progress-card.css';
import { useRouter } from 'next/navigation';
import { Activity, mockActivity } from '@/types/activity-log';
import RadioIcon from '@/components/radio-icon/radio-icon';
import { mockDeals, Deal } from '@/types/deal';

const DealProgressCard = () => {
  const router = useRouter();
  const [deal, setDeal] = useState<Deal | null>(null);
  const [activity, setActivity] = useState<Activity[] | null>(null);

  useEffect(() => {
    const fetchDealAndActivity = async () => {
      const mostRecentDeal = mockDeals.reduce((prev, current) =>
        new Date(prev.appointmentDate) > new Date(current.appointmentDate) ? prev : current
      );

      setDeal(mostRecentDeal);

      if (mostRecentDeal) {
        const associatedActivity = mockActivity.filter((act) => act.dealId === mostRecentDeal.id);
        setActivity(associatedActivity);
      }
    };

    fetchDealAndActivity();
  }, []);

  //!!!change it
  if (!deal) {
    return <div>Loading...</div>;
  }

  const handleDealIdClick = () => {
    router.push(`deal/${deal.id}`);
  };

  return (
    <Card className="recent-card" onClick={handleDealIdClick}>
      <CardContent>
        <Box className="header-progress-card">
          <Box className="deal-profile">
            <Avatar src={deal.dealPicture} alt="Profile" />
            <Box>
              <Typography className="deal-street-progress-card">{deal.street}</Typography>
              <Typography className="deal-city-progress-card" variant="body2" color="textSecondary">
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

        {activity &&
          activity.slice(0, 4).map((act) => (
            <Box key={act.id} className="activities">
              <Box display="flex" alignItems="center" gap={1}>
                <RadioIcon />
                <Box>
                  <Typography className="activity-date">{act.date}</Typography>
                  <Typography className="activity-details">{act.details}</Typography>
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
