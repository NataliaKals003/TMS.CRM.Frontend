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
import './menu.css';

const Menu: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      name: 'Home',
      path: '/',
      icon: <DashboardOutlined className="icon-menu" />,
      activeIcon: <Dashboard className="icon-menu" />,
      isActive: pathname === '/',
    },
    {
      name: 'Deals',
      path: '/deal',
      icon: <BusinessCenterOutlined className="icon-menu" />,
      activeIcon: <BusinessCenter className="icon-menu" />,
      isActive: pathname.startsWith('/deal'),
    },
    {
      name: 'Customers',
      path: '/customer',
      icon: <PeopleAltOutlined className="icon-menu" />,
      activeIcon: <PeopleAlt className="icon-menu" />,
      isActive: pathname.startsWith('/customer'),
    },
    {
      name: 'Tasks',
      path: '/task',
      icon: <ChecklistOutlined className="icon-menu" />,
      activeIcon: <Checklist className="icon-menu" />,
      isActive: pathname.startsWith('/task'),
    },
  ];

  return (
    <Drawer variant="permanent">
      <List className="list-menu">
        {menuItems.map(({ name, path, icon, activeIcon, isActive }) => (
          <ListItem key={name} className="list-item-menu">
            <ListItemButton
              onClick={() => router.push(path)}
              className="list-button-menu"
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
                className="icon-menu"
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
