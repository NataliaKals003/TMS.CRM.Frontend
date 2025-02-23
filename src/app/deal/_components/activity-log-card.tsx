'use client';

import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { CardContent, Typography, Box, Button, IconButton } from '@mui/material';
import { mockActivityLog, ActivityLog } from '../../types/activity-log';
import Image from 'next/image';
import '../../../styles/activity-log-card-style.css';

const ActivityLogCard: React.FC = () => {
  const [activities, setActivities] = useState<ActivityLog[]>(mockActivityLog);

  const toggleActivity = (id: number) => {
    setActivities((prev) => prev.map((activity) => (activity.id === id ? { ...activity, completed: !activity.completed } : activity)));
  };

  return (
    <CardContent sx={{ padding: 0, paddingLeft: '12px' }}>
      <Box sx={{ padding: '24px', display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" marginBottom={0} fontWeight={700} fontSize={18} color={'#092C4C'} lineHeight={'30px'}>
          Activity Log
        </Typography>
      </Box>

      <Grid container>
        {activities.slice(0, 3).map((activity) => (
          <Box key={activity.id} display="flex" alignItems="flex-start" marginBottom={2.5} gap={'23px'} width={'100%'} sx={{ cursor: 'pointer' }}>
            <Grid size={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
              <IconButton onClick={() => toggleActivity(activity.id)} sx={{ padding: 0, paddingTop: '11px' }}>
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
            </Grid>

            <Grid size={{ xs: 11, sm: 11, md: 11, lg: 11 }}>
              <Typography variant="body2" color="#7E92A2" fontWeight={400}>
                {activity.date}
              </Typography>
              <Typography variant="body2" color="#092C4C" fontWeight={500}>
                {activity.details}
              </Typography>
              {activity.image && (
                <Box sx={{ width: 315, height: 120, overflow: 'hidden', marginTop: '12px' }}>
                  <Image className="logImage" src={activity.image} alt="Activity" width={315} height={100} />
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
