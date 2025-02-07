import React, { ReactNode } from 'react';
import { Modal, Box, Typography, Button, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

interface FormModalProps {
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
  fields?: { label: string; type?: string }[];
  timestamp?: string;
  onAddImage?: () => void;
  onDelete?: () => void;
  onDone?: () => void;
  onCancel?: () => void;
  onSave?: () => void;
  save?: string;
  color?: string;
  fontWeight?: number;
  fontSize?: number;
}

const FormModal: React.FC<FormModalProps> = ({
  open,
  onClose,
  title,
  fields = [],
  timestamp,
  onAddImage,
  onDelete,
  onDone,
  onCancel,
  onSave,
  save,
  color,
  fontWeight,
  fontSize,
}) => {
  return (
    <Modal open={open}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
        }}
      >
        <Box sx={{ padding: '24px 14px 24px 32px', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" marginBottom={0} fontWeight={fontWeight || 700} fontSize={fontSize || 18} color={color || '#092C4C'}>
            {title}
          </Typography>
          <Button endIcon={<CancelIcon sx={{ color: '#7E92A2' }} />} onClick={onClose} />
        </Box>

        {timestamp && (
          <Typography variant="caption" color="text.secondary" gutterBottom>
            {timestamp}
          </Typography>
        )}
        {fields.map((field, index) => (
          <TextField key={index} fullWidth label={field.label} type={field.type || 'text'} variant="outlined" sx={{ mb: 2 }} />
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 3, paddingTop: 0 }}>
          <Box>
            {onAddImage && (
              <IconButton color="primary" onClick={onAddImage}>
                <AddIcon />
              </IconButton>
            )}
            {onDelete && (
              <IconButton color="error" onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
            )}
          </Box>
          <Box>
            {onCancel && (
              <Button variant="outlined" onClick={onCancel} sx={{ mr: 2, color: '#092C4C', border: 'none' }}>
                Cancel
              </Button>
            )}
            {onSave && (
              <Button variant="contained" color="primary" sx={{ padding: '10px 24px', fontWeight: 500 }} onClick={onSave}>
                {save}
              </Button>
            )}
            {onDone && (
              <Button variant="contained" startIcon={<DoneIcon />} onClick={onDone}>
                Done
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default FormModal;
