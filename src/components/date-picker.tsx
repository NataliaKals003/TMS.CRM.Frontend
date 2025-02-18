'use client';

import React from 'react';
import { useState } from 'react';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Box } from '@mui/material';

interface DatePickerProps {
  placeholder?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ placeholder }) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Box width="100%">
      <MuiDatePicker
        format="MMM dd, yyyy"
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
    </Box>
  );
};

export default DatePicker;
