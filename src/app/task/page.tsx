'use client';

import React, { useEffect } from 'react';
import { mockTasks, Task } from '../../types/task';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SectionHeader from '@/components/section-header/section-header';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ReportIcon from '@mui/icons-material/Report';
import './task-page.css';
import '../../styles/table.css';
import { HeaderModalType, useHeader } from '@/context/header-context';
import Grid from '@mui/material/Grid2';

const Customers: React.FC = () => {
  const { setTitle, setButtonTitle, setModalType } = useHeader();

  useEffect(() => {
    setTitle('Tasks');
    setButtonTitle('Add New Task');
    setModalType(HeaderModalType.newTask);
  }, [setTitle, setButtonTitle, setModalType]);

  const columnHeaders = [
    { label: 'Done', icon: <CheckBoxIcon className="check-box-task-page" /> },
    { label: 'Due Date ' },
    { label: 'Task ' },
    { label: 'Edit', isRightAligned: true },
  ];

  const getDateIcon = (dueDate: string) => {
    const monthMap: { [key: string]: string } = {
      Jan: 'Jan',
      Fev: 'Feb',
      Mar: 'Mar',
      Abr: 'Apr',
      Mai: 'May',
      Jun: 'Jun',
      Jul: 'Jul',
      Ago: 'Aug',
      Sep: 'Sep',
      Oct: 'Oct',
      Nov: 'Nov',
      Dec: 'Dec',
    };

    const [day, month, year] = dueDate.split(' ');

    const formattedDate = `${year}-${monthMap[month]}-${day.padStart(2, '0')}`;

    const currentDate = new Date();
    const dueDateObj = new Date(formattedDate);

    if (dueDateObj > currentDate) {
      return <ReportIcon className="report-icon-task-page" />;
    }

    return <CheckBoxIcon className="check-box-icon-task-page" />;
  };

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
                      className="table-head"
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
                  <TableRow className="table-row" key={task.id} sx={{ cursor: 'pointer' }}>
                    <TableCell>
                      <Typography className="text-body">
                        {getDateIcon(task.dueDate)}
                        {task.done}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="text-body">{task.dueDate}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="text-body">{task.description}</Typography>
                    </TableCell>

                    <TableCell className="icon-cell">
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
    </main>
  );
};

export default Customers;
