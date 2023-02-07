import React from "react";
import Section from "@/components/Section/Section";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Box, Grid, styled, Typography, Link } from "@mui/material";

const StyledPerformanceText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "32px",
  color: "#4b5563",
}));

const PerformanceSection = () => {
  return (
    <Section bgColor='white'>
      <Wrapper>
        <Box>
          <Grid
            container
            sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "130px",
                  width: "130px",
                  backgroundColor: "#D7FAE2",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "9px solid #21C55E",
                  boxShadow: "3px 24px 32px #E3E3E3",
                }}
              >
                <Typography
                  variant='P'
                  sx={{
                    fontSize: "2.25rem",
                    lineHeight: "2.5rem",
                    fontWeight: 400,
                    color: "#21C55E",
                  }}
                >
                  99
                </Typography>
              </div>
              <Typography
                variant='p'
                sx={{
                  marginTop: "24px",
                  fontSize: "1.25rem",
                  lineHeight: "1.75rem ",
                  color: "#21C55E",
                }}
              >
                Performance
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  borderBottom: "1px solid rgb(229 231 235)",
                  marginBottom: "32px",
                }}
              >
                <Typography variant='h2'>
                  Page Experience und Web Vitals
                </Typography>
              </Box>
              <Box>
                <StyledPerformanceText variant='p'>
                  Wie gut ist die Nutzererfahrung für ihre Besucher? Gute Web
                  Vitals sind die Grundvoraussetzung bevor sie über guten Inhalt
                  und Suchmaschinen Optimierung (SEO) nachdenken können.{" "}
                  <Link
                    href='https://developers.google.com/search/docs/advanced/experience/page-experience'
                    underline='always'
                    color='#4b5563'
                  >
                    {"Google misst viele Signale"}
                  </Link>{" "}
                  um die Nutzerfreundlichkeit einer Seite zu ermitteln.
                </StyledPerformanceText>
              </Box>
              <Box
                sx={{
                  margin: "32px 0px",
                  paddingLeft: "12px",
                  borderLeft: "2px solid #4b5563",
                  color: "#4b5563",
                  opacity: 0.5,
                }}
              >
                <Typography variant='p' sx={{ fontStyle: "italic" }}>
                  Langsame Webseiten werden schlechter gereiht
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <StyledPerformanceText variant='p'>
                  Vor einigen Jahren war eine durchschnittliche Seitenlade-Zeit
                  von 3 Sekunden noch OK. Diese Tage sind{" "}
                  <b style={{ color: "#4B5563", fontWeight: 700 }}>vorüber</b>.
                  Immer mehr Dienste bieten dem Nutzer ein sofortiges
                  Ladeerlebnis. Der Benutzer erwartet schnell ladende Seiten.
                  Daher müssen ihre Apps und Websites optimiert sein um
                  konkurrenzfähig zu bleiben.{" "}
                  <Link
                    href='https://developers.google.com/search/docs/advanced/experience/page-experience'
                    underline='always'
                    color='#4b5563'
                  >
                    {"Google misst viele Signale"}
                  </Link>{" "}
                  um die Nutzerfreundlichkeit einer Seite zu ermitteln.
                </StyledPerformanceText>
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <StyledPerformanceText variant='p'>
                  Ich helfe ihnen bei der Auswahl der richtigen Technologien und
                  der geeigneten{" "}
                  <Link
                    href='https://nextjs.org/docs/basic-features/data-fetching/overview'
                    underline='always'
                    color='#4b5563'
                  >
                    {"data fetching strategy"}
                  </Link>{" "}
                  für ihr Projekt.
                </StyledPerformanceText>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Wrapper>
    </Section>
  );
};

export default PerformanceSection;
