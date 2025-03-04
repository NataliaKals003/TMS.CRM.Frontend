'use client';

import React from 'react';
import Image from 'next/image';
import Dote from '../../../assets/dote.png';
import Background from '../../../assets/background.png';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { mockNextAppointment } from '../../../types/next-appointment';
import './next-appointment-card.css';

const NextAppointmentCard: React.FC = () => {
  const router = useRouter();
  const { id, street, city, appointmentDate, area, people, price, dealPicture } = mockNextAppointment;

  const handleDealDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`deal/${id}`);
  };

  return (
    <Card onClick={() => router.push(`deal/${id}`)} className="card-next-appointment" sx={{}}>
      <CardContent>
        <Box className="header-card-next-appointment">
          <Typography className="title-card-next-appointment">Next Appointment</Typography>
          <Image className="dote" src={Dote} alt="dote" width={10} height={10} />
        </Box>

        <Box className="address-card-next-appointment">
          <Image src={dealPicture} alt="Profile" width={44} height={44} style={{ borderRadius: '50%' }} />
          <Box marginLeft={1.5} fontSize={14}>
            <Typography className="text-body-next-appointment">{street}</Typography>
            <Typography className="title-body-next-appointment">{city}</Typography>
          </Box>
        </Box>

        <Box className="appointment-card">
          <Box fontSize={14}>
            <Typography className="title-body-next-appointment">Appointment Date</Typography>
            <Typography className="text-body-next-appointment">{appointmentDate}</Typography>
          </Box>
        </Box>

        <Box className="room-people-card">
          <Box>
            <Typography className="title-body-next-appointment">Room Area</Typography>
            <Typography className="text-body-next-appointment">
              {area} M<sup style={{ fontSize: '0.6em' }}>2</sup>
            </Typography>
          </Box>

          <Box>
            <Typography className="title-body-next-appointment">People</Typography>
            <Typography className="text-body-next-appointment">{people}</Typography>
          </Box>
        </Box>

        <Box className="footer-card-next-appointment">
          <Box display={'flex'} flexDirection={'column'}>
            <Typography className="title-body-next-appointment">Price</Typography>
            <Typography className="text-body-next-appointment">${price}</Typography>
          </Box>

          <Button className="see-detail-next-appointment" variant="contained" color="secondary" onClick={handleDealDetailsClick}>
            See Detail
          </Button>
        </Box>

        <Image src={Background} alt="Background" width={300} height={300} className="bg-image-next-appointment" />
      </CardContent>
    </Card>
  );
};

export default NextAppointmentCard;
