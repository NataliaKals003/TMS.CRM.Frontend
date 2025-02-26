'use client';

import React from 'react';
import Image from 'next/image';
import Dote from '../../../assets/dote.png';
import Background from '../../../assets/background.png';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { mockNextAppointment } from '../../types/next-appointment';
import './next-appointment-card-style.css';

const NextAppointmentCard: React.FC = () => {
  const router = useRouter();
  const { id, street, city, appointmentDate, area, people, price, dealPicture } = mockNextAppointment;

  const handleDealDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`deal/${id}`);
  };

  return (
    <Card onClick={() => router.push(`deal/${id}`)} className="card" sx={{}}>
      <CardContent>
        <Box className="headerCard">
          <Typography className="titleCard">Next Appointment</Typography>
          <Image className="dote" src={Dote} alt="dote" width={10} height={10} />
        </Box>

        <Box className="addressCard">
          <Image src={dealPicture} alt="Profile" width={44} height={44} style={{ borderRadius: '50%' }} />
          <Box marginLeft={1.5} fontSize={14}>
            <Typography className="textBody">{street}</Typography>
            <Typography className="titleBody">{city}</Typography>
          </Box>
        </Box>

        <Box className="appointmentCard">
          <Box fontSize={14}>
            <Typography className="titleBody">Appointment Date</Typography>
            <Typography className="textBody">{appointmentDate}</Typography>
          </Box>
        </Box>

        <Box className="roomPeopleCard">
          <Box>
            <Typography className="titleBody">Room Area</Typography>
            <Typography className="textBody">
              {area} M<sup style={{ fontSize: '0.6em' }}>2</sup>
            </Typography>
          </Box>

          <Box>
            <Typography className="titleBody">People</Typography>
            <Typography className="textBody">{people}</Typography>
          </Box>
        </Box>

        <Box className="footerCard">
          <Box display={'flex'} flexDirection={'column'}>
            <Typography className="titleBody">Price</Typography>
            <Typography className="textBody">${price}</Typography>
          </Box>

          <Button className="seeDetail" variant="contained" color="secondary" onClick={handleDealDetailsClick}>
            See Detail
          </Button>
        </Box>

        <Image
          src={Background}
          alt="Background"
          width={300}
          height={300}
          style={{
            position: 'absolute',
            right: '-101.13px',
            top: '200px',
            borderRadius: '50%',
          }}
        />
      </CardContent>
    </Card>
  );
};

export default NextAppointmentCard;
