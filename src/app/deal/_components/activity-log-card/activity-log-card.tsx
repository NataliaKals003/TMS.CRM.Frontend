'use client';

import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { CardContent, Typography, Box, Button, IconButton } from '@mui/material';
import { mockActivityLog, ActivityLog } from '../../../../types/activity-log';
import Image from 'next/image';
import './activity-log-card.css';

const ActivityLogCard: React.FC = () => {
  const [activities, setActivities] = useState<ActivityLog[]>(mockActivityLog);

  const toggleActivity = (id: number) => {
    setActivities((prev) => prev.map((activity) => (activity.id === id ? { ...activity, completed: !activity.completed } : activity)));
  };

  return (
    <CardContent className="card-activity-log">
      <Box className="box-header-activity-log">
        <Typography className="title-activity-log">Activity Log</Typography>
      </Box>

      <Grid container>
        {activities.slice(0, 3).map((activity) => (
          <Box key={activity.id} className="box-content-activity-log">
            <Grid size={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
              <IconButton onClick={() => toggleActivity(activity.id)} className="icon-button-activity-log">
                <Box className={`pin-icon-button-activity-log ${activity.completed ? 'completed' : ''}`}>
                  <Box className={`inside-pin-icon ${activity.completed ? 'completed' : ''}`} />
                </Box>
              </IconButton>
            </Grid>

            <Grid className="log-content-activity-log-card" size={{ xs: 11, sm: 11, md: 11, lg: 11 }}>
              <Typography variant="body2" className="date-log-activity-log">
                {activity.date}
              </Typography>
              <Typography variant="body2" className="text-log-activity-log">
                {activity.details}
              </Typography>
              {activity.image && (
                <Box sx={{ width: 315, height: 120, overflow: 'hidden', marginTop: '12px' }}>
                  <Image className="log-image-activity-log-card" src={activity.image} alt="Activity" width={315} height={100} />
                </Box>
              )}
            </Grid>
          </Box>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button variant="text" color="primary">
          Load More
        </Button>
      </Box>
    </CardContent>
  );
};

export default ActivityLogCard;
