'use client';

import React, { useEffect } from 'react';
import { mockTasks, Task } from '../types/task';
import Box from '@mui/material/Box';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SectionHeader from '@/components/section-header';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ReportIcon from '@mui/icons-material/Report'; // Importando o ReportIcon
import '../../styles/task-page-style.css';
import '../../styles/table-style.css';
import { useHeader } from '@/context/header-context';

const Customers: React.FC = () => {
  const { setTitle, setButtonTitle } = useHeader();

  useEffect(() => {
    setTitle('Tasks');
    setButtonTitle('Add New Task');
  }, [setTitle, setButtonTitle]);

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
      <Box>
        <SectionHeader title="tasks" counter={23} sortByValue={['Date Created', 'Alphabetic']} filterOptions={['Due Date', 'Task', 'Done']} />

        <TableContainer component={Box} sx={{ width: '100%' }}>
          <Table sx={{ width: '100%' }}>
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
                    <Typography variant="body2">
                      {getDateIcon(task.dueDate)}
                      {task.done}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{task.dueDate}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{task.description}</Typography>
                  </TableCell>

                  <TableCell sx={{ textAlign: 'right' }}>
                    <Typography variant="body2">
                      <BorderColorOutlinedIcon className="tableCell" sx={{ width: '24px', height: '24px', cursor: 'pointer' }} />
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </main>
  );
};

export default Customers;
