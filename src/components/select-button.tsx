import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectButtonProps {
  value: string[];
  defaultValue?: string;
}

const SelectButton: React.FC<SelectButtonProps> = ({ value, defaultValue }) => {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue || '');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      <Select
        IconComponent={KeyboardArrowDownIcon}
        fullWidth
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {value.map((val, index) => (
          <MenuItem key={index} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectButton;
