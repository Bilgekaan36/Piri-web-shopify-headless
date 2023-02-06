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
        <StyledCompetenceBox sx={{ marginTop: { xs: "-120px", md: "-250px" } }}>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={3} md={3}>
              <CustomCard
                headerLink='https://www.shopify.com/enterprise/headless-commerce'
                header='Shopify Headless'
                content='Wir sind davon überzeugt, dass die Zukunft des E-Commerce Headless ist. Ladezeiten und Flexibilität sind die Gründe dafür.'
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
                content='Vercel, die Erfinder von Next.js, stellen uns alle Werkzeuge und die Infrastruktur zur Verfügung um performante Apps zu erstellen.'
                firstLink='https://vercel.com/'
                firstLinkItem='Vercel'
                secondLink='https://mui.com/'
                secondLinkItem='React Mui'
                thirdLink='https://supabase.com/'
                thirdLinkItem='SupaBase'
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <CustomCard
                headerLink='https://geekflare.com/de/react-native-for-mobile-app/'
                header='App Entwicklung'
                content='Mit einer nativen App konvertierst Du Besucher zu wiederkehrenden Kunden. Wir entwickeln Dir mit React Native eine Cross Plattform App für iOS & Android.'
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
                headerLink='https://www.shopify.com/enterprise/headless-commerce'
                header='Webflow Webseite'
                content='Mach dir keine Sorge um Design oder Inhalt. Ich setze Deinen Web Auftritt professionell um. Strahle mit einer neuen & frischen Website für dein Unternehmen.'
                firstLink='https://hydrogen.shopify.dev/'
                firstLinkItem='Shopify Hydrogen'
                secondLink='https://shopify.dev/api/storefront'
                secondLinkItem='Shopify GraphQL'
                thirdLink='https://nextjs.org/'
                thirdLinkItem='Next.js'
              />
            </Grid>
          </Grid>
        </StyledCompetenceBox>
      </Wrapper>
    </Section>
  );
};

export default CompetenceSection;
