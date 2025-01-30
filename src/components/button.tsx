import React from "react";
import { Button } from "@mui/material";

interface CustomButtonProps {
  title: string;
  icon?: React.ReactElement<{ style?: React.CSSProperties }>; // Allow `style` prop
}

const CustomButton = ({ title, icon }: CustomButtonProps) => {
  return (
    <Button
      variant="contained"
      endIcon={
        icon && React.isValidElement(icon)
          ? React.cloneElement(icon, {
              style: { height: 20, width: 20 }, // Add `style` prop
            })
          : null
      }
      sx={{
        backgroundColor: "#514EF3",
        color: "#ffffff",
        padding: "10px 16px 10px 20px",
        textTransform: "none",
        borderRadius: 20,
        boxShadow: "none",
        fontWeight: "normal",
        "&:hover": {
          backgroundColor: "#4c49df",
          boxShadow: "none",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
