import React from "react";
import Section from "@/components/Section/Section";
import Wrapper from "@/components/Wrapper/Wrapper";

import CustomCard from "@/components/CustomCard/CustomCard";
import { Box, Grid, Link, styled, Typography } from "@mui/material";
import ToolCard from "@/components/ToolCard/ToolCard";

const StyledCompetenceBox = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const ToolSection = () => {
  return (
    <Section bgColor='white'>
      <Wrapper>
        <StyledCompetenceBox>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} sm={4} md={4}>
              <ToolCard header='React/Next.js'>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: "18px",
                    padding: "0.75rem 0",
                    color: "#6C7280",
                  }}
                >
                  <Link
                    href='https://reactjs.org/'
                    underline='always'
                    color='#4b5563'
                  >
                    {"React"}
                  </Link>{" "}
                  ist nach wie vor das meistgenutzte Javascript Framework. Und
                  wird die dominierende Frontend Technologie der nächsten Jahre
                  bleiben.
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: "18px",
                    padding: "0.75rem 0",
                    color: "#6C7280",
                  }}
                >
                  Und{" "}
                  <Link
                    href='https://vercel.com'
                    underline='always'
                    color='#4b5563'
                  >
                    {"Vercel"}
                  </Link>{" "}
                  der Erinder von{" "}
                  <Link
                    href='https://nextjs.org/'
                    underline='always'
                    color='#4b5563'
                  >
                    {"Next.js,"}
                  </Link>{" "}
                  bietet die perfekte Infrastruktur um React-basierende
                  skalierbare Anwendungen zu erstellen und zu hosten.
                </Typography>
              </ToolCard>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <ToolCard header='MUI/Material'>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: "18px",
                    padding: "0.75rem 0",
                    color: "#6C7280",
                  }}
                >
                  <Link
                    href='https://mui.com/'
                    underline='always'
                    color='#4b5563'
                  >
                    {"MUI/Material"}
                  </Link>{" "}
                  ist das ideale CSS Framework um wiederverwendbare React
                  Komponenten zu nutzen und zu erstellen.
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: "18px",
                    padding: "0.75rem 0",
                    color: "#6C7280",
                  }}
                >
                  Gemeinsam mit Next.js erhöht es die Produktivität signifikant.
                  Ich verwende fast kein reines CSS mehr, außer vielleicht für
                  customized Components.
                </Typography>
              </ToolCard>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <ToolCard header='Supabase'>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: "18px",
                    padding: "0.75rem 0",
                    color: "#6C7280",
                  }}
                >
                  <Link
                    href='https://supabase.com/'
                    underline='always'
                    color='#4b5563'
                  >
                    {"Supabase"}
                  </Link>{" "}
                  ist nicht nur eine skalierbare Postgres Datenbank in der
                  Cloud. Es bietet großartige vorkonfigurierte Datenbank-Dienste
                  wie Row-Level-Security und PostgREST.
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: "18px",
                    padding: "0.75rem 0",
                    color: "#6C7280",
                  }}
                >
                  Aber es inkludiert zusätzlich noch Authentifizierung, Instant
                  API's, Realtime Subscriptions und Speicher.
                </Typography>
              </ToolCard>
            </Grid>
          </Grid>
        </StyledCompetenceBox>
      </Wrapper>
    </Section>
  );
};

export default ToolSection;
