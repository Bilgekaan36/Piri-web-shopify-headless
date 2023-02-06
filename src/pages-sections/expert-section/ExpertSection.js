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

const ExpertSection = () => {
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
                <Typography variant='h2'>Shopify</Typography>
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <StyledPerformanceText variant='p'>
                  Ich arbeite seit Jahren mit Shopify und habe bereits viele
                  Themes und Apps für Kunden entwickelt. Für internationale
                  Projekte nutze ich Übersetzungstools, mit der sie ihren Online
                  Shop in mehrere Sprachen übersetzen können. Diese verwendet
                  die
                  <Link
                    href='https://shopify.dev/api/examples/i18n-app-translations'
                    underline='always'
                    color='#4b5563'
                  >
                    {" GraphQL translation API von Shopify"}
                  </Link>
                  , die garantiert, dass alle gespeicherten Übersetzungen von
                  der skalierbaren Infrastruktur von Shopify geladen werden.
                </StyledPerformanceText>
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <StyledPerformanceText variant='p'>
                  Traditionelle Shopify Storefronts, die Liquid und Online Store
                  2.0 verwenden, sind eine sehr gute Wahl für ihren Online Shop.
                  Aber{" "}
                  <b style={{ color: "black", fontWeight: 700 }}>
                    ich bin davon überzeugt, dass die Zukunft Headless
                  </b>{" "}
                  ist und schnelle Seitenlade-Zeiten absolut notwendig sind.
                </StyledPerformanceText>
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <StyledPerformanceText variant='p'>
                  Eine E-Commerce Schnitstelle gepaart mit einer
                  <Link
                    href='https://geekflare.com/de/single-page-applications/'
                    underline='always'
                    color='#4b5563'
                  >
                    {" Single-Page-Applikation "}
                  </Link>
                  sind von der Ladezeit überwältigend. Hydrogen, Next.js und
                  React Server Components (RSC) sind die Weiterentwicklung
                  dieser Idee. Das wird die Art und Weise wie wir das Web
                  verwenden nachhaltig verändern!
                </StyledPerformanceText>
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <StyledPerformanceText variant='p'>
                  Eine exzellente Suche ist für große Produktkataloge
                  entscheidend. Für unsere Projekte haben ich bereits
                  Integrationen mit
                  <Link
                    href='https://www.algolia.com/de/'
                    underline='always'
                    color='#4b5563'
                  >
                    {" Algolia Search "}
                  </Link>
                  und Shopify unter Verwendung von
                  <Link
                    href='https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/'
                    underline='always'
                    color='#4b5563'
                  >
                    {" Algolia InstantSearch "}
                  </Link>
                  entwickelt.
                </StyledPerformanceText>
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <StyledPerformanceText variant='p'>
                  Möchten Sie mit mir arbeiten, dann
                  <Link href='#' underline='always' color='#4b5563'>
                    {" kontaktieren Sie mich"}
                  </Link>
                  .
                </StyledPerformanceText>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
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
                  und Suchmaschinen Optimierung (SEO) nachdenken können.
                  <Link
                    href='https://developers.google.com/search/docs/advanced/experience/page-experience'
                    underline='always'
                    color='#4b5563'
                  >
                    {" Google misst viele Signale "}
                  </Link>
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
                  <b style={{ color: "black", fontWeight: 700 }}>vorüber</b>.
                  Immer mehr Dienste bieten dem Nutzer ein sofortiges
                  Ladeerlebnis. Der Benutzer erwartet schnell ladende Seiten.
                  Daher müssen ihre Apps und Websites optimiert sein um
                  konkurrenzfähig zu bleiben.
                  <Link
                    href='https://developers.google.com/search/docs/advanced/experience/page-experience'
                    underline='always'
                    color='#4b5563'
                  >
                    {" Google misst viele Signale "}
                  </Link>
                  um die Nutzerfreundlichkeit einer Seite zu ermitteln.
                </StyledPerformanceText>
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <StyledPerformanceText variant='p'>
                  Wir helfen ihnen bei der Auswahl der richtigen Technologien
                  und der geeigneten
                  <Link
                    href='https://nextjs.org/docs/basic-features/data-fetching/overview'
                    underline='always'
                    color='#4b5563'
                  >
                    {" data fetching strategy "}
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

export default ExpertSection;
