'use client';

import React, { useEffect } from 'react';
import { mockDeals, Deal } from '../types/deal';
import Box from '@mui/material/Box';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import '../../styles/table-style.css';
import { useRouter } from 'next/navigation';
import { HeaderModalType, useHeader } from '@/context/header-context';

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
      <Box>
        <SectionHeader
          title="deals"
          counter={23}
          sortByValue={['Date Created', 'Area', 'Appointment Date', 'Price', 'Status']}
          filterOptions={['Area', 'Price', 'Status']}
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
              {mockDeals.map((deal: Deal) => (
                <TableRow className="tableRow" key={deal.id} sx={{ cursor: 'pointer' }} onClick={() => router.push(`deal/${deal.id}`)}>
                  <TableCell>
                    <Image src={deal.dealPicture} alt="Profile" width={44} height={44} style={{ borderRadius: '50%' }} />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {deal.street}, {deal.city}, {deal.state}, {deal.zipCode}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="#092C4C">
                      {deal.area} M&sup2;
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{deal.appointmentDate}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="#092C4C">
                      ${deal.price}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      sx={{
                        padding: '10px 20px',
                        backgroundColor: '#ECECFE',
                        color: '#514EF3',
                        textTransform: 'none',
                        fontSize: '12PX',
                        width: 120,
                      }}
                    >
                      {deal.status}
                    </Button>
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

export default Deals;
