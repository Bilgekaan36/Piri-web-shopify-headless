import React from "react";
import Section from "@/components/Section/Section";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Box, Grid, styled, Typography, Link } from "@mui/material";
import webflow from "../../../public/images/webflow-workspace.png";
import Image from "next/image";

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
                <Typography variant='h2'>Webflow</Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: 350,
                  width: "100%",
                  boxShadow: "3px 24px 32px #E3E3E3",
                  marginBottom: "32px",
                }}
              >
                <Image
                  src={webflow}
                  alt='Picture from webflow'
                  provided='true'
                  automatically='true'
                  fill
                />
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <StyledPerformanceText variant='p'>
                  Webflow ist ein professioneller, komplexer und
                  leistungsstarker Website-Builder, mithilfe man sehr schnell
                  und agil Projekte umsetzen kann. Hier setzen wir je nach dem
                  Budget des Kunden Webflow als CMS für Shops oder Websites ein.
                  Durch das hauseigene
                  <Link
                    href='https://nextjs.org/docs/basic-features/data-fetching/overview'
                    underline='always'
                    color='#4b5563'
                  >
                    {" Webflow-Hosting "}
                  </Link>
                  kann der Kunde nach einer Einführung selbstständig Inhalte
                  hinzufügen und verwalten.
                </StyledPerformanceText>
              </Box>
              <Box sx={{ marginBottom: "32px" }}>
                <StyledPerformanceText variant='p'>
                  Durch
                  <Link
                    href='https://nextjs.org/docs/basic-features/data-fetching/overview'
                    underline='always'
                    color='#4b5563'
                  >
                    {" Amazon Web Services & Fastly "}
                  </Link>
                  nutzten wir den Hosting-Service nur nach Bedarf und sparen
                  somit Kosten und Ressourcen. Es besteht auch die Möglichkeit
                  nach Kundenwunsch extern zu hosten.
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
