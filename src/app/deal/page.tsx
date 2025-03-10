'use client';

import React, { useEffect } from 'react';
import { mockDeals, Deal } from '../../types/deal';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SectionHeader from '@/components/section-header/section-header';
import Image from 'next/image';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import '../../styles/table.css';
import { useRouter } from 'next/navigation';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { HeaderModalType, useHeader } from '@/context/header-context';
import Grid from '@mui/material/Grid2';

const Deals: React.FC = () => {
  const { setTitle, setButtonTitle, setModalType } = useHeader();

  useEffect(() => {
    setTitle('Deals');
    setButtonTitle('Add New Deal');
    setModalType(HeaderModalType.newDeal);
  }, [setTitle, setButtonTitle, setModalType]);

  const router = useRouter();

  const columnHeaders = [
    { label: 'Profile', icon: <InsertPhotoIcon /> },
    { label: 'Name' },
    { label: 'Area' },
    { label: 'Appointment Date' },
    { label: 'Price' },
    { label: 'Status' },
    { label: 'Edit', isRightAligned: true },
  ];

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
                {mockDeals.map((deal: Deal) => (
                  <TableRow
                    className="table-row"
                    key={deal.id}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: '#f9f9f9' },
                    }}
                    onClick={() => router.push(`deal/${deal.id}`)}
                  >
                    <TableCell>
                      <Image src={deal.dealPicture} alt="Profile" width={44} height={44} style={{ borderRadius: '50%' }} />
                    </TableCell>

                    <TableCell>
                      <Typography className="text-body" variant="body2" fontWeight="500">
                        {deal.street}, {deal.city}, {deal.state}, {deal.zipCode}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="text-body">{deal.roomArea} M&sup2;</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="text-body">
                        {new Date(deal.appointmentDate).toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="text-body">${deal.price}</Typography>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        sx={{
                          padding: '10px 20px',
                          backgroundColor: '#ECECFE',
                          color: '#514EF3',
                          textTransform: 'none',
                          fontSize: '12PX',
                          width: 120,
                        }}
                      >
                        {deal.progress === 'inProgress' ? 'IN PROGRESS' : 'CLOSED'}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ textAlign: 'right' }}>
                        <DriveFileRenameOutlineOutlinedIcon />
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

export default Deals;
