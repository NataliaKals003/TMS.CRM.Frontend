'use client';

import { usePathname, useRouter } from 'next/navigation';
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
import React from 'react';

const Menu: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: 'Home', path: '/', icon: <DashboardOutlined />, activeIcon: <Dashboard />, isActive: pathname === '/' },
    {
      name: 'Deals',
      path: '/deal',
      icon: <BusinessCenterOutlined />,
      activeIcon: <BusinessCenter />,
      isActive: pathname.startsWith('/deal'),
    },
    { name: 'Customers', path: '/customer', icon: <PeopleAltOutlined />, activeIcon: <PeopleAlt />, isActive: pathname.startsWith('/customer') },
    { name: 'Tasks', path: '/task', icon: <ChecklistOutlined />, activeIcon: <Checklist />, isActive: pathname.startsWith('/task') },
  ];

  return (
    <Drawer variant="permanent">
      <List>
        {menuItems.map(({ name, path, icon, activeIcon, isActive }) => (
          <ListItem key={name} sx={{ mb: 1, px: 2 }}>
            <ListItemButton
              onClick={() => router.push(path)}
              sx={{
                minHeight: 48,
                justifyContent: 'center',
                px: 2.5,
                borderRadius: '50px',
                backgroundColor: isActive ? '#514EF3' : '#ffffff',
                border: '1px solid #EAEEF4',
                '&:hover': {
                  backgroundColor: isActive ? '#514EF3' : '#ffffff',
                },
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: 'center',
                  color: isActive ? '#ffffff' : '#7E92A2',
                  padding: '8px',
                }}
              >
                {isActive ? activeIcon : icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
