'use client';

import React, { useState } from 'react';
import { CardContent, Typography, Box, Button, IconButton } from '@mui/material';
import { mockActivityLog, ActivityLog } from '../../../types/activity-log';
import Image from 'next/image';

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

      {activities.slice(0, 3).map((activity) => (
        <Box key={activity.id} display="flex" alignItems="flex-start" marginBottom={2.5} gap={'23px'} width={'100%'} sx={{ cursor: 'pointer' }}>
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

          <Box>
            <Typography variant="body2" color="#7E92A2" fontWeight={400}>
              {activity.date}
            </Typography>
            <Typography variant="body2" color="#092C4C" fontWeight={500}>
              {activity.details}
            </Typography>
            {activity.image && (
              <Box sx={{ width: 315, height: 120, overflow: 'hidden', marginTop: '12px' }}>
                <Image src={activity.image} alt="Activity" width={315} height={100} />
              </Box>
            )}
          </Box>
        </Box>
      ))}

      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button variant="text" color="primary">
          Load More
        </Button>
      </Box>
    </CardContent>
  );
};

export default ActivityLogCard;
