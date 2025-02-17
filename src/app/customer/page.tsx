'use client';

import React from 'react';
import { mockCustomers, Customer } from '../types/customer';
import Box from '@mui/material/Box';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import '../../styles/table-style.css';
import { useRouter } from 'next/navigation';

const Customers: React.FC = () => {
  const router = useRouter();

  const columnHeaders = [
    { label: 'Profile', icon: <AccountBoxIcon /> },
    { label: 'Name' },
    { label: 'Email ' },
    { label: 'Phone' },
    { label: 'Address' },
    { label: 'Edit' },
  ];
  return (
    <main>
      <Box>
        <SectionHeader
          title="Total"
          counter={23}
          sortByValue={['Date Created', 'Alphabetic']}
          filterOptions={['Name', 'Email', 'Phone', 'Address']}
        />

        <TableContainer component={Box}>
          <Table>
            <TableHead>
              <TableRow className="tableRow">
                {columnHeaders.map((header, index) => (
                  <TableCell key={index} className="tableCell">
                    {header.icon || header.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {mockCustomers.map((customer: Customer) => (
                <TableRow className="tableRow" key={customer.id} sx={{ cursor: 'pointer' }} onClick={() => router.push(`customer/${customer.id}`)}>
                  <TableCell>
                    <Image src={customer.avatar} alt="Profile" width={44} height={44} style={{ borderRadius: '50%' }} />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{customer.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{customer.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{customer.phone}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {customer.street}, {customer.city}, {customer.state}, {customer.zipCode}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="#092C4C">
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
