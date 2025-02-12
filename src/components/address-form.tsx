import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';

const AddressForm: React.FC = () => {
  return (
    <>
      <Box marginTop={'0px'}>
        <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
          Address
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 12 }}>
            <TextField type="text" label="Street" variant="outlined" fullWidth />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <TextField type="text" label="City" variant="outlined" fullWidth />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField type="text" label="State" variant="outlined" fullWidth />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField type="text" label="Zip Code" variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddressForm;
