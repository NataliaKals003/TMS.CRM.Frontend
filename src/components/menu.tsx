"use client";

import {
  Dashboard,
  DashboardOutlined,
  BusinessCenter,
  BusinessCenterOutlined,
  PeopleAlt,
  PeopleAltOutlined,
  Checklist,
  ChecklistOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";

const Menu: React.FC = () => {
  const [selected, setSelected] = useState<string | null>("Home");

  const menuItems = [
    {
      name: "Home",
      icon: <DashboardOutlined />,
      activeIcon: <Dashboard />,
    },
    {
      name: "Deals",
      icon: <BusinessCenterOutlined />,
      activeIcon: <BusinessCenter />,
    },
    {
      name: "Customers",
      icon: <PeopleAltOutlined />,
      activeIcon: <PeopleAlt />,
    },
    {
      name: "Tasks",
      icon: <ChecklistOutlined />,
      activeIcon: <Checklist />,
    },
  ];

  return (
    <div
      style={{
        width: "fit-content",
        backgroundColor: "#f5f5f5",
        height: "100vh",
        padding: "20px",
        borderRight: "1px solid #EAEEF4", // Added right border
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {menuItems.map(({ name, icon, activeIcon }) => (
          <li key={name} style={{ marginBottom: "15px" }}>
            <a
              //   href={`/${name.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault(); // Prevent page refresh
                setSelected(name);
              }}
              style={{
                textDecoration: "none",
                backgroundColor: selected === name ? "#514EF3" : "#ffffff", // Change background color when selected
                color: selected === name ? "#ffffff" : "#7E92A2", // Change background color when selected
                borderRadius: "50px",
                border: "1px solid #EAEEF4",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                transition: "background-color 0.3s",
              }}
            >
              <span>{selected === name ? activeIcon : icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
