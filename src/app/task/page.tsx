'use client';

import React, { useEffect, useState } from 'react';
import { mockTasks, Task } from '../../types/task';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SectionHeader from '@/components/section-header/section-header';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ReportIcon from '@mui/icons-material/Report';
import './task-page.css';
import '../../styles/table.css';
import { HeaderModalType, useHeader } from '@/context/header-context';
import Grid from '@mui/material/Grid2';
import TaskModal from '@/components/task-form-modal/task-form-modal';
import { ChecklistOutlined } from '@mui/icons-material';

const Tasks: React.FC = () => {
  const { setTitle, setButtonTitle, setModalType } = useHeader();
  const [taskId, setTaskId] = useState<number | null>(null);
  const [editTaskOpen, setEditTaskOpen] = useState(false);

  useEffect(() => {
    setTitle('Tasks');
    setButtonTitle?.('Add New Task');
    setModalType(HeaderModalType.newTask);
  }, [setTitle, setButtonTitle, setModalType]);

  const columnHeaders = [
    { label: 'Done', icon: <CheckBoxIcon className="check-box-task-page" /> },
    { label: 'Due Date ' },
    { label: 'Task ' },
    { label: 'Edit', isRightAligned: true },
  ];

  const getStatusIcon = (task: Task) => {
    const currentDate = new Date();
    const dueDate = new Date(task.dueDate);

    if (task.complete) {
      return <CheckBoxIcon className="check-box-icon-task-page" />;
    } else if (dueDate < currentDate) {
      return <ReportIcon className="report-icon-task-page" />;
    }
    return null;
  };

  const hasTask = mockTasks.length > 0;

  if (!hasTask) {
    return (
      <Box className="not-found-task-page">
        <ChecklistOutlined className="icon-not-found-page" />
        <Typography>No tasks found.</Typography>
      </Box>
    );
  }

  return (
    <main>
      <Grid container sx={{ padding: { xs: '12px', sm: '16px', md: '24px ' } }}>
        <Grid size={{ xs: 12, md: 12 }}>
          <SectionHeader title="Deals" counter={23} sortByValue={['Date Created', 'Alphabetic']} filterOptions={['Area', 'Price', 'Status']} />
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow className="table-row">
                  {columnHeaders.map((header, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        textAlign: header.isRightAligned ? 'right' : 'left',
                      }}
                    >
                      {header.icon || header.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {mockTasks.map((task: Task) => (
                  <TableRow
                    onClick={() => {
                      setEditTaskOpen(true);
                      setTaskId(task.id);
                    }}
                    className="table-row"
                    key={task.id}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell>
                      <Typography className="text-body">{getStatusIcon(task)}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="text-body">
                        {new Date(task.dueDate).toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="text-body">{task.description}</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="body2" sx={{ textAlign: 'right' }}>
                        <DriveFileRenameOutlineOutlinedIcon className="table-cell" />
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <TaskModal
        open={editTaskOpen}
        onClose={() => {
          setEditTaskOpen(false);
        }}
        taskId={Number(taskId)}
      />
    </main>
  );
};

export default Tasks;
