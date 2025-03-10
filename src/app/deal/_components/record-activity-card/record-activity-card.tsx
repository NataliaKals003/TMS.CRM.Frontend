'use client';

import React from 'react';
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import '../../../../styles/modal.css';
import './record-activity-card.css';
import AlertSnackbar from '@/components/alert-snackbar/alert-snackbar';
import DatePickerController from '../../../../components/form/date-picker-controller';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Grid from '@mui/material/Grid2';
import TextFieldController from '@/components/form/text-field-controller';

interface FormValues {
  description: string;
  activityDate: Date;
}

const RecordActivityCard: React.FC = () => {
  const [fileName, setFileName] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'saved' | 'deleted'>('saved');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const schema = yup.object().shape({
    description: yup.string().required('Record activity description is required'),
    activityDate: yup.date().required('Due date is required'),
    // imageUrl: yup.string(),
  });

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: undefined,
      activityDate: undefined,
    },
  });

  const onSubmit = form.handleSubmit(() => {
    form.reset();
    setSnackbarMessage('Activity Recorded');
    setSnackbarSeverity('saved');
    setSnackbarOpen(true);
  });

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <main>
        <Box className="box-record-activity">
          <Box sx={{ padding: '24px', paddingBottom: '36px' }}>
            <Typography variant="h5" className="title-header-record-activity">
              Record Activity
            </Typography>
          </Box>

          <FormProvider {...form}>
            <Grid container spacing={3} className="form-box-record-activity">
              <Grid size={{ xs: 12, md: 12 }}>
                <Typography className="label">Description</Typography>
                <TextFieldController name="description" type="text" placeholder="Enter task description" />
              </Grid>
              <Grid size={{ xs: 12, md: 12 }}>
                <DatePickerController name="activityDate" />
              </Grid>

              <Grid size={{ xs: 12, md: 12 }}>
                <Typography className="label">Images</Typography>
                <label htmlFor="upload-image" style={{ cursor: 'pointer' }}>
                  <input id="upload-image" name="file" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                  <Button variant="contained" component="span" className="upload-button" sx={{ width: '100%' }}>
                    <span style={{ display: 'block' }}>{fileName || 'ADD'}</span>
                  </Button>
                </label>
              </Grid>

              <Grid size={{ xs: 12, md: 12 }} className="footer-record-activity">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ padding: '10px 33px', fontWeight: 500, fontSize: '14px', lineHeight: '30px', borderRadius: '70px' }}
                  onClick={onSubmit}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </FormProvider>
        </Box>
      </main>

      <AlertSnackbar open={snackbarOpen} message={snackbarMessage} severity={snackbarSeverity} onClose={handleSnackbarClose} />
    </>
  );
};

export default RecordActivityCard;
