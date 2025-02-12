'use client';

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Container } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import AddNewTask from './add-new-task-form';

const TaskCard: React.FC = () => {
  const tasks = Array(12).fill({ date: '17 Nov 2021', details: 'Meeting with partners', completed: false });

  const [addNewTaskOpen, setAddNewTaskOpen] = useState(false);

  const handleOpenAddNewTask = () => {
    setAddNewTaskOpen(true);
  };

  const handleCloseAddNewTask = () => {
    setAddNewTaskOpen(false);
  };

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
                paddingRight: '8px',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
            >
              {tasks.map((task, index) => {
                const hasIcon = index < 2;
                return (
                  <Box key={index} display="flex" alignItems="center" marginBottom={3} sx={{ gap: '10px' }}>
                    <Typography variant="body2" color="#FE8084" fontWeight={400} minWidth="80px">
                      {task.date}
                    </Typography>

                    <Box width="24px" display="flex" justifyContent="center">
                      {hasIcon && <ReportIcon sx={{ color: '#FE8084' }} />}
                    </Box>

                    <Typography variant="body2" color="#092C4C" fontWeight={400} flex={1}>
                      {task.details}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </CardContent>

          <Box
            onClick={handleOpenAddNewTask}
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
      <AddNewTask open={addNewTaskOpen} onClose={handleCloseAddNewTask} />
    </>
  );
};

export default TaskCard;
