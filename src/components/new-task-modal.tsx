import React from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import TimeStamp from './date-picker';
import '../styles/modal-style.css';

interface AddNewTaskFormProps {
  open: boolean;
  onClose: () => void;
}

const NewTaskModal: React.FC<AddNewTaskFormProps> = ({ open, onClose }) => {
  return (
    <>
      <Modal open={open}>
        <Box
          className="box"
          sx={{
            maxWidth: '400px',
            maxHeight: 700,
          }}
        >
          <Box sx={{ padding: '24px 29px 24px 32px', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5" marginBottom={0} fontWeight={700} fontSize={18} color={'#092C4C'}>
              Add New Task
            </Typography>
            <Button sx={{ minWidth: 0, margin: 0 }} endIcon={<CancelIcon sx={{ color: '#7E92A2' }} />} onClick={onClose} />
          </Box>

          <Box padding={'0 32px'} display={'flex'} flexDirection={'column'}>
            <TextField type="text" variant="outlined" fullWidth multiline rows={4} placeholder="Enter task description" />

            <Box sx={{ flex: 1, marginTop: '24px' }}>
              <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                Due Date
              </Typography>
              <TimeStamp placeholder={'Due date'} />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '16px 0 28px' }}>
              <Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'} marginTop={'22px'}>
                <Button onClick={onClose} variant="outlined" sx={{ mr: 2, color: '#092C4C', border: 'none', padding: '10px 24px' }}>
                  Cancel
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ padding: '10px 24px', fontWeight: 500, fontSize: '14px', lineHeight: '30px', borderRadius: '70px' }}
                  onClick={() => {}}
                >
                  Save Task
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default NewTaskModal;
