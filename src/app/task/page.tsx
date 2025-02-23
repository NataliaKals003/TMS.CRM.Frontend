'use client';

import React, { useEffect } from 'react';
import { mockTasks, Task } from '../types/task';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SectionHeader from '@/components/section-header';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ReportIcon from '@mui/icons-material/Report';
import '../../styles/task-page-style.css';
import '../../styles/table-style.css';
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
    { label: 'Done', icon: <CheckBoxIcon className="checkBox" /> },
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
      return <ReportIcon className="reportIcon" />;
    }

    return <CheckBoxIcon className="checkBoxIcon" />;
  };

  return (
    <main>
      <Grid container>
        <Grid size={{ xs: 12, md: 12 }}>
          <SectionHeader title="Deals" counter={23} sortByValue={['Date Created', 'Alphabetic']} filterOptions={['Area', 'Price', 'Status']} />
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow className="tableRow">
                  {columnHeaders.map((header, index) => (
                    <TableCell
                      key={index}
                      className="tableHead"
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
                  <TableRow className="tableRow" key={task.id} sx={{ cursor: 'pointer' }}>
                    <TableCell>
                      <Typography className="textBody">
                        {getDateIcon(task.dueDate)}
                        {task.done}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="textBody">{task.dueDate}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="textBody">{task.description}</Typography>
                    </TableCell>

                    <TableCell className="iconCell">
                      <Typography variant="body2" sx={{ textAlign: 'right' }}>
                        <DriveFileRenameOutlineOutlinedIcon className="tableCell" />
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
