'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Dote from '../../../assets/dote.png';
import Background from '../../../assets/background.png';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import './next-appointment-card.css';
import { Deal, mockDeals } from '@/types/deal';
import SelectCustomerModal from '@/components/select-customer-modal/select-customer-modal';
import DealFormModal from '@/components/deal-form-modal/deal-form-modal';

const NextAppointmentCard: React.FC = () => {
  const router = useRouter();
  const [deal, setDeal] = useState<Deal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addNewDealOpen, setAddNewDealOpen] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  useEffect(() => {
    if (mockDeals.length > 0) {
      const mostRecentDeal = mockDeals.reduce((prev, current) =>
        new Date(prev.appointmentDate) > new Date(current.appointmentDate) ? prev : current
      );
      setDeal(mostRecentDeal);
    }
  }, []);

  if (!deal) {
    return (
      <>
        <Card
          className="card-next-appointment"
          sx={{
            height: { xs: 290, sm: 350, md: 400 },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box className="header-card-next-appointment">
              <Typography className="title-card-next-appointment">Next Appointment</Typography>
              <Image className="dote" src={Dote} alt="dote" width={10} height={10} />
            </Box>

            <Box className="box-content-not-found-next-appointment">
              <CalendarMonthOutlinedIcon className="icon-not-found-next-appointment" />
              <Typography sx={{ alignItens: 'centre' }}>No upcoming appointments.</Typography>
            </Box>
          </CardContent>

          <Box
            sx={{
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button className="add-new-deal-not-found-next-appointment" variant="contained" color="secondary" onClick={() => setIsModalOpen(true)}>
              Add Deal?
            </Button>
          </Box>

          <Image src={Background} alt="Background" width={300} height={300} className="bg-image-next-appointment" />
        </Card>
        <SelectCustomerModal
          open={!!isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCustomerSelected={(customerId) => {
            setSelectedCustomerId(customerId);
            setIsModalOpen(false);
            setAddNewDealOpen(true);
          }}
        />
        {selectedCustomerId && (
          <DealFormModal
            open={addNewDealOpen}
            onClose={() => {
              setAddNewDealOpen(false);
            }}
            onChangeCustomerRequested={() => {
              setAddNewDealOpen(false);
              setIsModalOpen(true);
            }}
            customerId={selectedCustomerId}
          />
        )}
      </>
    );
  }

  const handleDealDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`deal/${deal.id}`);
  };

  return (
    <Card onClick={() => router.push(`deal/${deal.id}`)} className="card-next-appointment">
      <CardContent>
        <Box className="header-card-next-appointment">
          <Typography className="title-card-next-appointment">Next Appointment</Typography>
          <Image className="dote" src={Dote} alt="dote" width={10} height={10} />
        </Box>

        <Box className="address-card-next-appointment">
          <Image src={deal.dealPicture} alt="Profile" width={44} height={44} style={{ borderRadius: '50%' }} />
          <Box marginLeft={1.5} fontSize={14}>
            <Typography className="text-body-next-appointment">{deal.street}</Typography>
            <Typography className="title-body-next-appointment">
              {deal.city}, {deal.state} {deal.zipCode}
            </Typography>
          </Box>
        </Box>

        <Box className="appointment-card">
          <Box fontSize={14}>
            <Typography className="title-body-next-appointment">Appointment Date</Typography>
            <Typography className="text-body-next-appointment">
              {new Date(deal.appointmentDate)
                .toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })
                .replace(',', '')}
            </Typography>
          </Box>
        </Box>

        <Box className="room-people-card">
          <Box>
            <Typography className="title-body-next-appointment">Room Area</Typography>
            <Typography className="text-body-next-appointment">
              {deal.roomArea} M<sup style={{ fontSize: '0.6em' }}>2</sup>
            </Typography>
          </Box>

          <Box>
            <Typography className="title-body-next-appointment">People</Typography>
            <Typography className="text-body-next-appointment">{deal.numberOfPeople}</Typography>
          </Box>
        </Box>

        <Box className="footer-card-next-appointment">
          <Box display={'flex'} flexDirection={'column'}>
            <Typography className="title-body-next-appointment">Price</Typography>
            <Typography className="text-body-next-appointment">${deal.price}</Typography>
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
