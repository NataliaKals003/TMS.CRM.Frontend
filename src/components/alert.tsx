import React from 'react';
import { Snackbar, Alert, IconButton } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import '../styles/alert-style.css';

interface AlertSnackbarProps {
  open: boolean;
  message: string;
  severity: 'saved' | 'deleted';
  onClose: () => void;
}

const AlertSnackbar: React.FC<AlertSnackbarProps> = ({ open, message, severity, onClose }) => {
  const Icon = severity === 'saved' ? CelebrationIcon : WhatshotIcon;

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert
        className="alert"
        onClose={onClose}
        severity={severity === 'saved' ? 'success' : 'error'}
        icon={<Icon className={`icon-${severity}`} />}
        action={
          <IconButton onClick={onClose} className="close-button">
            <HighlightOffIcon />
          </IconButton>
        }
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
