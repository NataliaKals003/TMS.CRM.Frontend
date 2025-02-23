'use client';

import React, { useEffect } from 'react';
import { mockCustomers, Customer } from '../types/customer';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import '../../styles/table-style.css';
import { useRouter } from 'next/navigation';
import { HeaderModalType, useHeader } from '@/context/header-context';
import Grid from '@mui/material/Grid2';

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
                {mockCustomers.map((customer: Customer) => (
                  <TableRow className="tableRow" key={customer.id} sx={{ cursor: 'pointer' }} onClick={() => router.push(`customer/${customer.id}`)}>
                    <TableCell>
                      <Image src={customer.avatar} alt="Profile" width={44} height={44} style={{ borderRadius: '50%' }} />
                    </TableCell>
                    <TableCell>
                      <Typography className="textBody">{customer.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="textBody">{customer.email}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="textBody">{customer.phone}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="textBody">
                        {customer.street}, {customer.city}, {customer.state}, {customer.zipCode}
                      </Typography>
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
