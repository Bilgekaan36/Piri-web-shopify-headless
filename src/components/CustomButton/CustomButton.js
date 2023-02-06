import React from "react";

import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "white",
  lineHeight: "1.75rem",
  fontWeight: 600,
  padding: "1rem 2rem",
  borderRadius: "0.5rem",
  ":hover": {
    backgroundColor: "#0C94E7",
  },
}));

const CustomButton = (props) => {
  return (
    <StyledButton variant='contained' sx={{ backgroundColor: props.bgColor }}>
      {props.children}
    </StyledButton>
  );
};

export default CustomButton;
