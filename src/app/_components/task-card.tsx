'use client';

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Container } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import AddNewTask from '../../components/new-task-modal';
import { mockTasks, Task } from '../types/task';
import { useRouter } from 'next/navigation';
import Grid from '@mui/material/Grid2';

const TaskCard: React.FC = () => {
  const router = useRouter();

  const handleTaskClick = () => {
    router.push('/task');
  };

  const [addNewTaskOpen, setAddNewTaskOpen] = useState(false);

  return (
    <>
      <Container style={{ paddingTop: '24px', backgroundColor: '#EEF6FB', flex: 1 }}>
        <Card
          sx={{
            backgroundColor: '#F6FAFD',
            border: '1px solid #EAEEF4',
            color: '#092C4C',
            boxShadow: 'none',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            cursor: 'pointer',
          }}
        >
          <CardContent
            sx={{
              backgroundColor: '#F6FAFD',
              padding: '24px 24px 0',
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={3}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 700, fontSize: 18 }}>
                Task To Do
              </Typography>
              <Button
                onClick={handleTaskClick}
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

            <Box
              sx={{
                maxHeight: '250px',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
            >
              {mockTasks.map((task: Task) => {
                const hasIcon = task.id < 4;
                return (
                  <Grid key={task.id} container sx={{ marginBottom: 3, alignContent: 'center' }}>
                    <Grid size={{ xs: 3, md: 4 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: hasIcon ? '#FE8084' : '#092C4C',
                          fontWeight: 400,
                        }}
                      >
                        {task.dueDate}
                      </Typography>
                    </Grid>

                    <Grid size={{ xs: 1, md: 1 }}>
                      <Box>{hasIcon && <ReportIcon sx={{ color: '#FE8084', width: '16px', height: '16px' }} />}</Box>
                    </Grid>

                    <Grid size={{ xs: 8, md: 7 }}>
                      <Typography variant="body2" color="#092C4C" fontWeight={400}>
                        {task.description}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Box>
          </CardContent>

          <Box
            onClick={() => setAddNewTaskOpen(true)}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            borderTop={'1px solid #EAEEF4'}
            padding={'16px 24px'}
            sx={{
              backgroundColor: '#FFFFFF',
              marginTop: 3,
              cursor: 'pointer',
            }}
          >
            <Button sx={{ color: '#7E92A2', fontSize: '16px', fontWeight: 400 }}>Add new task</Button>
            <ArrowForwardOutlinedIcon sx={{ color: '#514EF3', width: 24, height: 24, cursor: 'pointer' }} />
          </Box>
        </Card>
      </Container>
      <AddNewTask open={addNewTaskOpen} onClose={() => setAddNewTaskOpen(false)} />
    </>
  );
};

export default TaskCard;
