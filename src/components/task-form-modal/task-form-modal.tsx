import React, { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import './task-form-modal.css';
import AlertSnackbar from '../alert-snackbar/alert-snackbar';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFieldController from '../form/text-field-controller';
import DatePickerController from '../form/date-picker-controller';

interface AddNewTaskFormProps {
  open: boolean;
  onClose: () => void;
}

interface FormValues {
  description: string;
  dueDate: Date;
}

const TaskModal: React.FC<AddNewTaskFormProps> = ({ open, onClose }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'saved' | 'deleted'>('saved');

  const schema = yup.object().shape({
    description: yup.string().required('Task description is required'),
    dueDate: yup.date().required('Due date is required'),
  });

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: undefined,
      dueDate: undefined,
    },
  });

  const onSubmit = form.handleSubmit(() => {
    form.reset();
    onClose();
    setSnackbarMessage('Task Saved');
    setSnackbarSeverity('saved');
    setSnackbarOpen(true);
  });

  const handleCancel = () => {
    form.reset();
    if (open) {
      onClose();
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box
          className="box"
          sx={{
            width: { xs: 290, sm: 350, md: 400 },
            maxHeight: 700,
          }}
        >
          <Box className="box-header">
            <Typography variant="h5" marginBottom={0} fontWeight={700} fontSize={18} color={'#092C4C'}>
              Add New Task
            </Typography>
            <Button sx={{ minWidth: 0, margin: 0 }} endIcon={<CancelIcon sx={{ color: '#7E92A2' }} />} onClick={onClose} />
          </Box>
          <FormProvider {...form}>
            <Box className="task-box-new-task">
              <TextFieldController name="description" type="text" multiline rows={4} placeholder="Enter task description" />

              <Box className="due-date-box-new-task">
                <Typography className="label">Due Date</Typography>
                <DatePickerController name="dueDate" />
              </Box>

              <Box className="footer-new-task">
                <Box className="footer-details-new-task">
                  <Button onClick={handleCancel} variant="outlined" className="cancel-button">
                    Cancel
                  </Button>

                  <Button variant="contained" color="primary" className="save-button" onClick={onSubmit}>
                    Save Task
                  </Button>
                </Box>
              </Box>
            </Box>
          </FormProvider>
        </Box>
      </Modal>
      <AlertSnackbar open={snackbarOpen} message={snackbarMessage} severity={snackbarSeverity} onClose={handleSnackbarClose} />
    </>
  );
};

export default TaskModal;
