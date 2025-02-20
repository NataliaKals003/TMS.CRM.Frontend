'use client';

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Container } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import AddNewTask from '../../components/new-task-modal';
import { mockTasks, Task } from '../types/task';
import { useRouter } from 'next/navigation';
import Grid from '@mui/material/Grid2';
import '../../styles/task-card-style.css';

const TaskCard: React.FC = () => {
  const router = useRouter();

  const handleTaskClick = () => {
    router.push('/task');
  };

  const [addNewTaskOpen, setAddNewTaskOpen] = useState(false);

  return (
    <>
      <Container className="containerTask">
        <Card className="taskCard">
          <CardContent className="cardContentTask">
            <Box className="headerTaskCard">
              <Typography className="titleHeaderTaskCard">Task To Do</Typography>
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
                    <Grid size={{ xs: 12, sm: 3, md: 2, lg: 4 }}>
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

                    <Grid size={{ xs: 12, sm: 1, md: 1, lg: 1 }}>
                      <Box>{hasIcon && <ReportIcon sx={{ color: '#FE8084', width: '16px', height: '16px' }} />}</Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 8, md: 9, lg: 7 }}>
                      <Typography variant="body2" color="#092C4C" fontWeight={400}>
                        {task.description}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Box>
          </CardContent>

          <Box onClick={() => setAddNewTaskOpen(true)} className="addNewTaskBox">
            <Button className="addNewTaskButton">Add new task</Button>
            <ArrowForwardOutlinedIcon className="arrowTaskCard" />
          </Box>
        </Card>
      </Container>
      <AddNewTask open={addNewTaskOpen} onClose={() => setAddNewTaskOpen(false)} />
    </>
  );
};

export default TaskCard;
