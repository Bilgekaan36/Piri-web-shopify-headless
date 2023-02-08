import React from "react";
import Section from "@/components/Section/Section";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Box, Grid, styled, Typography, Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const StyledFooterText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#6b7280",
}));

const FooterSection = () => {
  return (
    <Section bgColor='#F9FAFB'>
      <Wrapper>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box>
                <StyledFooterText variant='p'>PIRI Web</StyledFooterText>
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <Link
                  href='mailto:bilgekaan.yilmaz36@gmail.com'
                  underline='always'
                  color='#6b7280'
                  sx={{ fontWeight: 400, fontSize: "14px" }}
                >
                  {"piridevelopment@gmail.com"}
                </Link>{" "}
              </Box>
              <Box sx={{ marginBottom: "12px" }}>
                <StyledFooterText variant='p' sx={{ color: "#9ca3af" }}>
                  Created with{" "}
                  <Link
                    href='https://nextjs.org/'
                    underline='always'
                    color='#9ca3af'
                  >
                    {"Next.js"}
                  </Link>{" "}
                  and{" "}
                  <Link
                    href='https://mui.com/'
                    underline='always'
                    color='#9ca3af'
                  >
                    {"MUI/material"}
                  </Link>{" "}
                  running on{" "}
                  <Link
                    href='https://vercel.com'
                    underline='always'
                    color='#9ca3af'
                  >
                    {"Vercel."}
                  </Link>{" "}
                </StyledFooterText>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Link
                href='/imprint'
                underline='none'
                color='#6b7280'
                sx={{ fontSize: "14px" }}
              >
                {"Impressum"}
              </Link>{" "}
              <TwitterIcon
                sx={{ marginLeft: "12px", color: "#6b7280", fontSize: "32px" }}
              />
              <LinkedInIcon
                sx={{ marginLeft: "12px", color: "#6b7280", fontSize: "32px" }}
              />
              <InstagramIcon
                sx={{ marginLeft: "12px", color: "#6b7280", fontSize: "32px" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Wrapper>
    </Section>
  );
};

export default FooterSection;
