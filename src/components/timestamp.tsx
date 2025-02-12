import React from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Dayjs } from 'dayjs';
import { Box } from '@mui/material';

interface TimeStampProps {
  placeholder?: string;
}

const TimeStamp: React.FC<TimeStampProps> = ({ placeholder }) => {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box width="100%">
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            format="LL"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            slots={{
              openPickerIcon: CalendarMonthOutlinedIcon,
            }}
            sx={{ width: '100%' }}
            slotProps={{
              textField: { placeholder: placeholder },
            }}
          />
        </DemoContainer>
      </Box>
    </LocalizationProvider>
  );
};

export default TimeStamp;
