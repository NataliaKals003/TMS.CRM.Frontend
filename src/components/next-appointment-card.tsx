import React from 'react';
import Image from 'next/image';
import Badge from '../../public/Badge.png';
import Background from '../../public/Background.png';
import ProfileImage from '../../public/profile.jpg';
import CustomButton from './button';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface NextAppointmentCardProps {
  street: string;
  city: string;
  date: string;
  roomArea: number;
  people: number;
  price: string;
}

const NextAppointmentCard: React.FC<NextAppointmentCardProps> = ({ street, city, date, roomArea, people, price }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 3,
        padding: 2,
        backgroundColor: '#514EF3',
        color: 'white',
        position: 'relative',
        borderRadius: '12px',
      }}
    >
      <CardContent>
        <Box display="flex" gap={5.5} alignItems={'center'} marginBottom={3}>
          <Typography component="div" style={{ fontSize: 18, fontWeight: 700 }}>
            Next Appointment
          </Typography>

          <Image src={Badge} alt="Badge" width={10} height={10} />
        </Box>

        <Box display="flex" alignItems="center" marginTop={2}>
          <Image src={ProfileImage} alt="Profile" width={44} height={44} style={{ borderRadius: '50%' }} />
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
              {date}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" marginTop={3} fontSize={14} gap={5.5}>
          <Box>
            <Typography variant="body2" color="#D6E1E6" style={{ fontWeight: 400 }}>
              Room Area
            </Typography>

            <Typography variant="body1" fontWeight={700}>
              {roomArea} M<sup style={{ fontSize: '0.6em' }}>2</sup>
            </Typography>
          </Box>

          <Box>
            <Typography variant="body2" color="#D6E1E6">
              People
            </Typography>
            <Typography variant="body1">{people}</Typography>
          </Box>
        </Box>

        <Box display={'flex'} justifyContent={'space-between'} marginTop={3.5} fontSize={14}>
          <Box>
            <Typography variant="body2" color="white">
              Price
            </Typography>

            <Typography variant="body1" fontWeight={700}>
              {price}
            </Typography>
          </Box>

          <CustomButton title="See Details" backgroundColor="white" color="#092C4C" />
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
