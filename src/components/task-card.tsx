'use client';

import React from 'react';
import { Card, CardContent, Typography, Box, Button, Container } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';

const TaskCard = () => {
  const tasks = [
    { date: '17 Nov 2021', details: 'Meeting with partners', completed: false },
    { date: '17 Nov 2021', details: 'Meeting with partners', completed: false },
    { date: '17 Nov 2021', details: 'Meeting with partners', completed: false },
    { date: '17 Nov 2021', details: 'Meeting with partners', completed: false },
    { date: '17 Nov 2021', details: 'Meeting with partners', completed: false },
  ];

  return (
    <Container style={{ maxWidth: '414px', paddingTop: '24px', backgroundColor: '#EEF6FB' }}>
      <Card
        sx={{
          // maxWidth: 329,
          width: '100%',
          borderRight: '12px',
          padding: 1,
          margin: 0,
          backgroundColor: '#FFFFFF',
          border: '1px solid #EAEEF4',
          color: '#092C4C',
          boxShadow: 'none',
          borderRadius: '12px',
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={3}>
            <Typography variant="h5" component="div" style={{ fontWeight: 700, fontSize: 18 }}>
              Task To Do
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

          {tasks.map((task, index) => {
            const hasIcon = index < 2;
            return (
              <Box key={index} display="flex" alignItems="center" marginBottom={2.5} sx={{ gap: hasIcon ? 0 : '10px' }}>
                <Typography variant="body2" color="#FE8084" fontWeight={400}>
                  {task.date}
                </Typography>
                {hasIcon && <ReportIcon sx={{ color: '#FE8084', margin: '0 8px' }} />}

                <Typography variant="body2" color="#092C4C" fontWeight={400}>
                  {task.details}
                </Typography>
              </Box>
            );
          })}
        </CardContent>
      </Card>
    </Container>
  );
};

export default TaskCard;
