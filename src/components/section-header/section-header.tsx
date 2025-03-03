'use client';

import React from 'react';
import { Box, Typography, Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import './section-header.css';

interface SectionHeaderProps {
  title: string;
  counter: number;
  sortByValue: string[];
  filterOptions: string[];
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, counter, sortByValue, filterOptions }) => {
  const [selectedValue, setSelectedValue] = React.useState<string>('Date Created');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElFilter, setAnchorElFilter] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (option?: string) => {
    setAnchorEl(null);
    if (option && option !== selectedValue) {
      setSelectedValue(option);
    }
  };

  const handleFilterMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElFilter(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setAnchorElFilter(null);
  };

  return (
    <Box className="container-section-header">
      <Typography className="title-section-header">{`Total: ${counter} ${title}`}</Typography>

      <Box className="filters-section-header" display="flex" alignItems="center" gap="16px">
        <Button
          variant="outlined"
          onClick={handleMenuOpen}
          endIcon={<KeyboardArrowDownIcon sx={{ width: '24px', height: '24px', color: '#7E92A2' }} />}
          className="filter-button-section-header"
        >
          Sort By: {selectedValue}
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleMenuClose()}>
          {sortByValue.map((val, index) => (
            <MenuItem key={index} onClick={() => handleMenuClose(val)}>
              {val}
            </MenuItem>
          ))}
        </Menu>

        <Button
          className="filter-button-section-header"
          variant="outlined"
          onClick={handleFilterMenuOpen}
          startIcon={<FilterAltOutlinedIcon sx={{ width: '24px', height: '24px', color: '#7E92A2' }} />}
        >
          Filter
        </Button>
        <Menu anchorEl={anchorElFilter} open={Boolean(anchorElFilter)} onClose={handleFilterMenuClose}>
          {filterOptions.map((option, index) => (
            <MenuItem key={index} onClick={() => handleFilterMenuClose()}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};

export default SectionHeader;
