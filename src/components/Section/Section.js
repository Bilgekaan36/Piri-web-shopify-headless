import { Box, styled } from "@mui/material";
import React from "react";

const StyledSectionBox = styled(Box)(({ theme }) => ({
  color: "black",
  paddingTop: "60px",
  paddingBottom: "60px",
}));

const Section = (props) => {
  return (
    <StyledSectionBox sx={{ backgroundColor: props.bgColor }}>
      {props.children}
    </StyledSectionBox>
  );
};

export default Section;
