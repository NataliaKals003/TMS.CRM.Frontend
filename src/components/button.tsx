import React from "react";
import { Button } from "@mui/material";

interface CustomButtonProps {
  title: string;
  icon?: React.ReactElement<{ style?: React.CSSProperties }>;
  backgroundColor?: string;
  color?: string;
}

const CustomButton = ({
  title,
  icon,
  backgroundColor,
  color,
}: CustomButtonProps) => {
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
        color: color || "#ffffff",
        backgroundColor: backgroundColor || "#514EF3",
        padding: "10px 16px 10px 20px",
        textTransform: "none",
        borderRadius: 20,
        boxShadow: "none",
        fontWeight: "normal",
        zIndex: 1, // Add zIndex
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
