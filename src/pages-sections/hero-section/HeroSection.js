import CustomButton from "@/components/CustomButton/CustomButton";
import Section from "@/components/Section/Section";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";

const HeroHeader = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 900,

  textAlign: "center",
}));

const HeroSubHeader = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "center",
  fontSize: "2.25rem",
  lineHeight: "2.5rem",
  fontWeight: 400,
  padding: "4rem 0",
  background:
    "-webkit-linear-gradient(270deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)",
  backgroundClip: "text",
  textFillColor: "transparent",
}));

// const HeroButton = styled(Button)(({ theme }) => ({
//   color: "white",
//   fontSize: "1.125rem",
//   lineHeight: "1.75rem",
//   fontWeight: 600,
//   padding: "1rem 2rem",
// }));

const HeroSection = () => {
  return (
    <Section bgColor='black'>
      <Wrapper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <HeroHeader
            variant='h1'
            sx={{ fontSize: { xs: "4.5rem", md: "6rem" } }}
          >
            SPEED is Money
          </HeroHeader>
          <HeroSubHeader variant='p'>
            Entwicklung von performanten Web- und E-Commerce Apps.
          </HeroSubHeader>
          <CustomButton bgColor='#40A8DD'>
            Unverbindliches Erstgespräch
          </CustomButton>
        </Box>
      </Wrapper>
    </Section>
  );
};

export default HeroSection;
