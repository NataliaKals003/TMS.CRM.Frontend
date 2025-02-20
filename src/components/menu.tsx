'use client';

import React from 'react';
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
import '../styles/menu-style.css';

const Menu: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: 'Home', path: '/', icon: <DashboardOutlined className="icon" />, activeIcon: <Dashboard className="icon" />, isActive: pathname === '/' },
    {
      name: 'Deals',
      path: '/deal',
      icon: <BusinessCenterOutlined className="icon" />,
      activeIcon: <BusinessCenter className="icon" />,
      isActive: pathname.startsWith('/deal'),
    },
    {
      name: 'Customers',
      path: '/customer',
      icon: <PeopleAltOutlined className="icon" />,
      activeIcon: <PeopleAlt className="icon" />,
      isActive: pathname.startsWith('/customer'),
    },
    {
      name: 'Tasks',
      path: '/task',
      icon: <ChecklistOutlined className="icon" />,
      activeIcon: <Checklist className="icon" />,
      isActive: pathname.startsWith('/task'),
    },
  ];

  return (
    <Drawer variant="permanent">
      <List className="list">
        {menuItems.map(({ name, path, icon, activeIcon, isActive }) => (
          <ListItem key={name} className="listItem">
            <ListItemButton
              onClick={() => router.push(path)}
              className="listButton"
              sx={{
                backgroundColor: isActive ? '#514EF3' : '#ffffff',
                border: '1px solid #EAEEF4',
                '&:hover': {
                  backgroundColor: isActive ? '#514EF3' : '#ffffff',
                },
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              <ListItemIcon
                className="icon"
                sx={{
                  color: isActive ? '#ffffff' : '#7E92A2',
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
