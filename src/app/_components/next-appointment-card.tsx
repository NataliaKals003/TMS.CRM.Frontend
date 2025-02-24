'use client';

import React from 'react';
import Image from 'next/image';
import Dote from '../../assets/dote.png';
import Background from '../../assets/background.png';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { mockNextAppointment } from '../types/next-appointment';

const NextAppointmentCard: React.FC = () => {
  const router = useRouter();
  const { id, street, city, appointmentDate, area, people, price, dealPicture } = mockNextAppointment;

  const handleDealDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`deal/${id}`);
  };

  return (
    <Card
      onClick={() => router.push(`deal/${id}`)}
      sx={{
        backgroundColor: '#514EF3',
        color: 'white',
        position: 'relative',
        borderRadius: '12px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <CardContent>
        <Box display="flex" gap={5.5} alignItems="center" marginBottom={3}>
          <Typography component="div" style={{ fontSize: 18, fontWeight: 700 }}>
            Next Appointment
          </Typography>
          <Image src={Dote} alt="dote" width={10} height={10} />
        </Box>

        <Box display="flex" alignItems="center" marginTop={2}>
          <Image src={dealPicture} alt="Profile" width={44} height={44} style={{ borderRadius: '50%' }} />
          <Box marginLeft={1.5} fontSize={14}>
            <Typography variant="body2" color="white" style={{ fontWeight: 700 }}>
              {street}
            </Typography>
            <Typography variant="body2" color="#D6E1E6" style={{ fontWeight: 400 }}>
              {city}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" marginTop={3}>
          <Box fontSize={14}>
            <Typography variant="body2" color="#D6E1E6" style={{ fontWeight: 400 }}>
              Appointment Date
            </Typography>
            <Typography variant="body1" lineHeight={2} fontWeight={700}>
              {appointmentDate}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" marginTop={3} fontSize={14} gap={5.5}>
          <Box>
            <Typography variant="body2" color="#D6E1E6" style={{ fontWeight: 400 }}>
              Room Area
            </Typography>
            <Typography variant="body1" fontWeight={700}>
              {area} M<sup style={{ fontSize: '0.6em' }}>2</sup>
            </Typography>
          </Box>

          <Box>
            <Typography variant="body2" color="#D6E1E6">
              People
            </Typography>
            <Typography variant="body1">{people}</Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems={'center'} marginTop={3.5} fontSize={14}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant="body2" color="white">
              Price
            </Typography>
            <Typography variant="body1" fontWeight={700} lineHeight={2}>
              ${price}
            </Typography>
          </Box>

          <Button variant="contained" color="secondary" style={{ padding: '10px 16px', backgroundColor: '#fff' }} onClick={handleDealDetailsClick}>
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
