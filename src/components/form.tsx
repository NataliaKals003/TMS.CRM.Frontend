import React, { ReactNode, useState } from 'react';
import { Modal, Box, Typography, Button, IconButton, TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid2';
import { Theme } from '@mui/material/styles';

interface FormModalProps {
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
  fields?: {
    label: ReactNode;
    labelTitle: ReactNode;
    type?: string;
  }[];
  address: { label: string }[];
  timestamp?: string;
  onAddImage?: (file: File) => void;
  fileTitle?: string;
  onDelete?: () => void;
  onDone?: () => void;
  onCancel?: () => void;
  onSave?: () => void;
  saveText?: string;
}

const FormModal: React.FC<FormModalProps> = ({
  open,
  onClose,
  title,
  fields = [],
  address = [],
  timestamp,
  onAddImage,
  fileTitle,
  onDelete,
  onDone,
  onCancel,
  onSave,
  saveText,
}) => {
  const [fileName, setFileName] = useState('');
  const showAddress = address && address.length > 0;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      if (onAddImage) {
        onAddImage(file);
      }
    }
  };

  const handleCancel = () => {
    setFileName('');
    if (onClose) {
      onClose();
    }
  };

  const textFieldStyles = {
    background: (theme: Theme) => theme.palette.background.default,
    borderRadius: '8px',
    '& fieldset': {
      border: '1px solid #EAEEF4',
    },
    '& .MuiInputLabel-root': {
      color: '#7E92A2',
    },
    fontWeight: 400,
  };

  return (
    <Modal open={open}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          maxWidth: '620px',
          boxShadow: 24,
          borderRadius: 2,
          width: 620,
        }}
      >
        <Box sx={{ padding: '24px 14px 24px 32px', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" marginBottom={0} fontWeight={700} fontSize={18} color={'#092C4C'}>
            {title}
          </Typography>
          <Button endIcon={<CancelIcon sx={{ color: '#7E92A2' }} />} onClick={handleCancel} />
        </Box>
        <Box padding={4} paddingTop={0} display={'flex'} flexDirection={'column'}>
          {onAddImage && (
            <div>
              <Typography marginBottom={0} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                {fileTitle}
              </Typography>
              <label htmlFor="upload-image" style={{ cursor: 'pointer' }}>
                <input id="upload-image" name="file" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                <Button
                  variant="contained"
                  component="span"
                  sx={{
                    padding: '10px 20px',
                    background: (theme) => theme.palette.background.default,
                    color: '#7E92A2',
                    fontWeight: 400,
                    borderRadius: '8px',
                    border: '1px solid #EAEEF4',
                    marginTop: '12px',
                    marginBottom: '20px',
                  }}
                >
                  <span style={{ display: 'block' }}>{fileName || 'ADD'}</span>
                </Button>
              </label>
            </div>
          )}

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {fields.map((field, index) => (
              <Box key={index} sx={{ flex: '1 1 calc(50% - 16px)' }}>
                <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                  {field.labelTitle}
                </Typography>
                <TextField type="text" variant="outlined" fullWidth sx={textFieldStyles} />
              </Box>
            ))}
          </Box>

          {showAddress && (
            <Box marginTop={'20px'}>
              <Typography marginBottom={1.5} fontWeight={700} fontSize={16} lineHeight={'30px'} color={'#092C4C'}>
                Address
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 12 }}>
                  <TextField type="text" label="Street" variant="outlined" fullWidth sx={textFieldStyles} />
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <TextField type="text" label="City" variant="outlined" fullWidth sx={textFieldStyles} />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField type="text" label="State" variant="outlined" fullWidth sx={textFieldStyles} />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField type="text" label="Zip Code" variant="outlined" fullWidth sx={textFieldStyles} />
                </Grid>
              </Grid>
            </Box>
          )}

          {timestamp && (
            <Typography variant="caption" color="text.secondary" gutterBottom>
              {timestamp}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '16px 32px 18px 18px', paddingTop: 0 }}>
          <Box>
            {onDelete && (
              <IconButton color="error" onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
            )}
            {onCancel && (
              <Button variant="outlined" onClick={handleCancel} sx={{ mr: 2, color: '#092C4C', border: 'none', padding: '10px 24px' }}>
                Cancel
              </Button>
            )}
            {onSave && (
              <Button
                variant="contained"
                color="primary"
                sx={{ padding: '10px 24px', fontWeight: 500, fontSize: '14px', lineHeight: '30px', borderRadius: '70px' }}
                onClick={onSave}
              >
                {saveText}
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
