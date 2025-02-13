import React from 'react';
import { mockDeals, Deal } from '../types/deal';
import Box from '@mui/material/Box';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SectionHeader from '@/components/section-header';
import Image from 'next/image';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import '../../styles/table-style.css';

const Deals: React.FC = () => {
  const columnHeaders = [
    { label: 'Profile', icon: <InsertPhotoOutlinedIcon /> },
    { label: 'Name' },
    { label: 'Area' },
    { label: 'Appointment Date' },
    { label: 'Price' },
    { label: 'Status' },
    { label: 'Edit' },
  ];
  return (
    <main>
      <Box>
        <SectionHeader
          title="Total"
          counter={23}
          sortByValue={['Date Created', 'Area', 'Appointment Date', 'Price', 'Status']}
          filterOptions={['Area', 'Price', 'Status']}
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
              {mockDeals.map((deal: Deal) => (
                <TableRow className="tableRow" key={deal.id}>
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

export default Deals;
