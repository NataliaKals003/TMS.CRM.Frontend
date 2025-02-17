'use client';

import React from 'react';
import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import TimeStamp from '../../../components/date-picker';
import '../../../styles/modal-style.css';

const RecordActivityCard: React.FC = () => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <main>
      <Box
        sx={{
          bgcolor: '#ffff',
          borderRadius: '12px',
          border: '1px solid #EAEEF4',
          marginLeft: '24px',
          marginBottom: '24px',
        }}
      >
        <Box sx={{ padding: '24px', paddingBottom: '36px', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" marginBottom={0} fontWeight={700} fontSize={18} color={'#092C4C'} lineHeight={'30px'}>
            Record Activity
          </Typography>
        </Box>

        <Box padding={'24px'} paddingBottom={'20px'} paddingTop={0} display={'flex'} flexDirection={'column'}>
          <Box>
            <Typography marginBottom={'12px'} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
              Description
            </Typography>
            <TextField type="text" variant="outlined" fullWidth placeholder="Write your notes" />
          </Box>

          <Box sx={{ marginTop: '24px' }}>
            <TimeStamp placeholder={'Nov 14 2021, 10:00'} />
          </Box>
          <Box sx={{ marginTop: '24px' }}>
            <Typography marginBottom={'12px'} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
              Images
            </Typography>
            <label htmlFor="upload-image" style={{ cursor: 'pointer' }}>
              <input id="upload-image" name="file" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
              <Button
                variant="contained"
                component="span"
                sx={{
                  width: '100%',
                  padding: '10px 20px',
                  background: (theme) => theme.palette.background.default,
                  color: '#7E92A2',
                  fontWeight: 400,
                  borderRadius: '8px',
                  border: '1px solid #EAEEF4',
                  marginBottom: '20px',
                  '&:hover': {
                    borderColor: '#7E92A2',
                  },
                }}
              >
                <span style={{ display: 'block' }}>{fileName || 'ADD'}</span>
              </Button>
            </label>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: '10px 33px', fontWeight: 500, fontSize: '14px', lineHeight: '30px', borderRadius: '70px' }}
              onClick={() => {}}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default RecordActivityCard;
