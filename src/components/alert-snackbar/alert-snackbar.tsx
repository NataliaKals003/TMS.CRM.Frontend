import React from 'react';
import { Snackbar, Alert, IconButton } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './alert.css';

interface AlertSnackbarProps {
  open: boolean;
  message: string | null;
  severity: 'saved' | 'deleted';
  onClose: () => void;
}

const AlertSnackbar: React.FC<AlertSnackbarProps> = ({ open, message, severity, onClose }) => {
  const Icon = severity === 'saved' ? CelebrationIcon : WhatshotIcon;

  return (
    <Snackbar
      className="snack-bar-alert"
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={onClose}
        severity={severity === 'saved' ? 'success' : 'error'}
        icon={<Icon className={`icon-${severity}`} />}
        action={
          <IconButton onClick={onClose} className="close-button">
            <HighlightOffIcon />
          </IconButton>
        }
        sx={{
          backgroundColor: '#000000',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          padding: '13px 20px 13px 22px',
          gap: '12px',
          borderRadius: '8px',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.25)',
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
