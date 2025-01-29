import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#ffffff", boxShadow: "none" }}
    >
      <Toolbar>
        {/* Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#000000" }}
        >
          Dashboard
        </Typography>

        {/* Add New Button */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "#1976d2", // MUI primary color
            color: "#ffffff",
            textTransform: "none", // Prevents uppercase transformation
            "&:hover": {
              backgroundColor: "#1565c0", // Darker shade for hover
            },
          }}
        >
          Add New
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
