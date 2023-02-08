import React from "react";
import Section from "@/components/Section/Section";
import Wrapper from "@/components/Wrapper/Wrapper";

import CustomCard from "@/components/CustomCard/CustomCard";
import { Box, Grid, styled } from "@mui/material";

const StyledCompetenceBox = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const CompetenceSection = () => {
  return (
    <Section bgColor='white'>
      <Wrapper>
        <StyledCompetenceBox sx={{ marginTop: { xs: "-100px", md: "-200px" } }}>
          <Grid container spacing={{ xs: 2, md: 1 }}>
            <Grid item xs={12} sm={3} md={3}>
              <CustomCard
                headerLink='https://www.shopify.com/enterprise/headless-commerce'
                header='Shopify Headless'
                content='Ich bin davon überzeugt, dass die Zukunft des E-Commerce Headless ist. Ladezeiten und Flexibilität sind die besten Gründe dafür.'
                firstLink='https://hydrogen.shopify.dev/'
                firstLinkItem='Shopify Hydrogen'
                secondLink='https://shopify.dev/api/storefront'
                secondLinkItem='Shopify GraphQL'
                thirdLink='https://nextjs.org/'
                thirdLinkItem='Next.js'
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <CustomCard
                headerLink='https://nextjs.org/'
                header='Next.js Apps'
                content='Vercel, die Erfinder von Next.js, stellen alle Werkzeuge und die Infrastruktur zur Verfügung um performante Apps zu erstellen.'
                firstLink='https://vercel.com/'
                firstLinkItem='Vercel'
                secondLink='https://mui.com/'
                secondLinkItem='MUI/Material'
                thirdLink='https://supabase.com/'
                thirdLinkItem='SupaBase'
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <CustomCard
                headerLink='https://geekflare.com/de/react-native-for-mobile-app/'
                header='App Entwicklung'
                content='Mit einer nativen App konvertierev Sie Besucher zu wiederkehrenden Kunden. Ich entwickel Ihnen mit React Native eine Cross Plattform App für iOS & Android.'
                firstLink='https://reactnative.dev/'
                firstLinkItem='React Native'
                secondLink='https://reactnativepaper.com/'
                secondLinkItem='reactnativepaper'
                thirdLink='https://nodejs.org/de/about/'
                thirdLinkItem='Node.js'
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <CustomCard
                headerLink='https://webflow.com/?r=0'
                header='Webflow Webseite'
                content=' Ich setze Ihren Web Auftritt professionell um, Sorgen Sie sich nicht um Design und Inhalt. Strahlen Sie mit einer neuen & frischen Website für Ihr Unternehmen.'
                firstLink='https://webflow.com/hosting'
                firstLinkItem='Webflow Hosting'
                secondLink='https://webflow.com/cms'
                secondLinkItem='Webflow CMS'
                thirdLink='https://webflow.com/ecommerce'
                thirdLinkItem='Webflow Ecommerce'
              />
            </Grid>
          </Grid>
        </StyledCompetenceBox>
      </Wrapper>
    </Section>
  );
};

export default CompetenceSection;
