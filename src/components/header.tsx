import React from "react";
import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import { Search } from "@mui/icons-material";
import Button from "./button";
import AddIcon from "@mui/icons-material/Add";
import LogoImage from "./logo-image";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        borderBottom: "1px solid #EAEEF4",
        zIndex: 1201,
      }}
    >
      <Toolbar>
        <LogoImage />

        <Typography
          variant="h6"
          component="div"
          fontSize={24}
          fontWeight={700}
          sx={{
            flexGrow: 1,
            marginLeft: "21px",
            color: "#092C4C",
          }}
        >
          Dashboard
        </Typography>

        <Button title="Add New" icon={<AddIcon />} backgroundColor="#514EF3" />

        <Search
          sx={{
            width: 23,
            height: 23,
            color: "#7E92A2",
            backgroundColor: "#ffffff",
            borderRadius: "50px",
            border: "1px solid #EAEEF4",
            padding: "15px",
            margin: "0 20px",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        />
        <Avatar src="/profile.jpg" alt="User" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
