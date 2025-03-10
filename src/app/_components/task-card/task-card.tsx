'use client';

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Container } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import AddNewTask from '../../../components/task-form-modal/task-form-modal';
import { mockTasks, Task } from '../../../types/task';
import { useRouter } from 'next/navigation';
import Grid from '@mui/material/Grid2';
import './task-card.css';

const TaskCard: React.FC = () => {
  const router = useRouter();

  const handleTaskClick = () => {
    router.push('/task');
  };

  const [addNewTaskOpen, setAddNewTaskOpen] = useState(false);

  return (
    <>
      <Container className="container-task">
        <Card className="task-card">
          <CardContent className="card-content-task">
            <Box className="header-task-card">
              <Typography className="title-task">Task To Do</Typography>
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
                      <Typography className="text-task" data-has-icon={hasIcon}>
                        {new Date(task.dueDate).toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 1, md: 1, lg: 1 }}>
                      <Box>{hasIcon && <ReportIcon className="report-icon" />}</Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 8, md: 9, lg: 7 }}>
                      <Typography className="text-task">{task.description}</Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Box>
          </CardContent>

          <Box onClick={() => setAddNewTaskOpen(true)} className="add-new-task-box">
            <Button className="add-new-task-button">Add new task</Button>
            <ArrowForwardOutlinedIcon className="arrow-task-card" />
          </Box>
        </Card>
      </Container>
      <AddNewTask open={addNewTaskOpen} onClose={() => setAddNewTaskOpen(false)} />
    </>
  );
};

export default TaskCard;
