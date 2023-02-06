import "@/styles/globals.css";
import { Inter } from "@next/font/google";

import { createTheme, ThemeProvider } from "@mui/material";

const inter = Inter({
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {},
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 940,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h2: {
      fontWeight: 900,
      fontSize: "1.6em",
      marginBottom: "1em",
      lineHeight: "1.33",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
