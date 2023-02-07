import React from "react";
import Section from "@/components/Section/Section";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Box, Grid, styled, Typography, Link } from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";

const StyledPerformanceText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "32px",
  color: "#4b5563",
}));

const CtaSection = () => {
  return (
    <Section bgColor='white'>
      <Wrapper>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderBottom: "1px solid rgb(229 231 235)",
                  marginBottom: "32px",
                }}
              >
                <Typography variant='h2'>
                  Möchten Sie mit mir arbeiten?
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <StyledPerformanceText variant='p'>
                  Wir unterhalten uns gemeinsam in einem 30-Minütigen Call über
                  Ihr Vorhaben. Ganz unverbindlich und ohne Kosten.
                </StyledPerformanceText>
              </Box>
              <Box sx={{ marginBottom: "12px" }}>
                <StyledPerformanceText variant='p'>
                  Buchen Sie direkt einen kostenlosen Termin
                </StyledPerformanceText>
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <Link
                  href='mailto:bilgekaan.yilmaz36@gmail.com'
                  underline='always'
                  color='#4b5563'
                  sx={{ fontWeight: 700 }}
                >
                  {"Termin reservieren"}
                </Link>{" "}
              </Box>
              <Box sx={{ marginBottom: "12px" }}>
                <StyledPerformanceText variant='p'>
                  Schreiben sie mir einfach eine Email unter
                </StyledPerformanceText>
              </Box>
              <Box>
                <Link
                  href='mailto:bilgekaan.yilmaz36@gmail.com'
                  underline='always'
                  color='#4b5563'
                  sx={{ fontWeight: 700 }}
                >
                  {"piridevelopment@gmail.com"}
                </Link>{" "}
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DraftsIcon sx={{ fontSize: "200px", opacity: 0.1 }} />
            </Grid>
          </Grid>
        </Box>
      </Wrapper>
    </Section>
  );
};

export default CtaSection;
