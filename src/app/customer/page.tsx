'use client';

import React, { useEffect } from 'react';
import { mockCustomers, Customer } from '../types/customer';
import Box from '@mui/material/Box';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import '../../styles/table-style.css';
import { useRouter } from 'next/navigation';
import { HeaderModalType, useHeader } from '@/context/header-context';

const Customers: React.FC = () => {
  const { setTitle, setButtonTitle, setModalType } = useHeader();

  useEffect(() => {
    setTitle('Customers');
    setButtonTitle('Add New Customer');
    setModalType(HeaderModalType.newCustomer);
  }, [setTitle, setButtonTitle, setModalType]);

  const router = useRouter();

  const columnHeaders = [
    { label: 'Profile', icon: <AccountBoxIcon /> },
    { label: 'Name' },
    { label: 'Email ' },
    { label: 'Phone' },
    { label: 'Address' },
    { label: 'Edit', isRightAligned: true },
  ];
  return (
    <main>
      <Box>
        <SectionHeader
          title="customers"
          counter={23}
          sortByValue={['Date Created', 'Alphabetic']}
          filterOptions={['Name', 'Email', 'Phone', 'Address']}
        />

        <TableContainer component={Box}>
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
                    <Typography variant="body2" sx={{ textAlign: 'right' }}>
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
