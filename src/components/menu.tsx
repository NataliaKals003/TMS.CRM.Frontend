'use client';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import {
  Dashboard,
  DashboardOutlined,
  BusinessCenter,
  BusinessCenterOutlined,
  PeopleAlt,
  PeopleAltOutlined,
  Checklist,
  ChecklistOutlined,
} from '@mui/icons-material';
import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [selected, setSelected] = useState<string | null>('Home');

  const menuItems = [
    {
      name: 'Home',
      icon: <DashboardOutlined />,
      activeIcon: <Dashboard />,
    },
    {
      name: 'Deals',
      icon: <BusinessCenterOutlined />,
      activeIcon: <BusinessCenter />,
    },
    {
      name: 'Customers',
      icon: <PeopleAltOutlined />,
      activeIcon: <PeopleAlt />,
    },
    {
      name: 'Tasks',
      icon: <ChecklistOutlined />,
      activeIcon: <Checklist />,
    },
  ];

  return (
    <Drawer variant="permanent">
      <List>
        {menuItems.map(({ name, icon, activeIcon }) => (
          <ListItem key={name} sx={{ mb: 1, px: 2 }}>
            <ListItemButton
              onClick={() => setSelected(name)}
              sx={{
                minHeight: 48,
                justifyContent: 'center',
                px: 2.5,
                borderRadius: '50px',
                backgroundColor: selected === name ? '#514EF3' : '#ffffff',
                border: '1px solid #EAEEF4',
                '&:hover': {
                  backgroundColor: selected === name ? '#514EF3' : '#ffffff',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: 'center',
                  color: selected === name ? '#ffffff' : '#7E92A2',
                }}
              >
                {selected === name ? activeIcon : icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
