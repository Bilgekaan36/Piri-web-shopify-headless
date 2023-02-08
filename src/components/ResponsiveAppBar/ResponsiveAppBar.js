import { useState } from "react";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  styled,
  Container,
  FormControl,
  NativeSelect,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "../CustomButton/CustomButton";
import { useRouter } from "next/router";

const pages = ["Referenzen", "Über uns", "Blog", "FAQ", "Kontakt"];

const ResponsiveAppBar = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale, pathname } = router;
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const changeLanguage = (event) => {
    let locale = event.target.textContent;
    console.log("locale: ", event.target.textContent);
    if (locale === "de") {
      locale = "en";
      router.push(pathname, pathname, { locale });
    } else if (locale === "en") {
      locale = "tr";
      router.push(pathname, pathname, { locale });
    } else if (locale === "tr") {
      locale = "de";
      router.push(pathname, pathname, { locale });
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position='static'
      sx={{ backgroundColor: "#000000", padding: "32px" }}
    >
      <Container maxWidth='md'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 100,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <strong> PIRI</strong>
            <p style={{ color: "#9DA3AF" }}> WEB</p>
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 100,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PIRI WEB
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              },
            }}
          >
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "none",
                  padding: 2,
                }}
              >
                {page}
              </Button>
            ))} */}
            <Button
              sx={{
                color: "white",
                lineHeight: "1.75rem",
                fontWeight: 400,
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                backgroundColor: "#2C3645",
                ":hover": {
                  backgroundColor: "#0C94E7",
                },
              }}
              onClick={changeLanguage}
            >
              {locale}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

// {locales.map((locale) => (
//   <option value={locale} key={locale}>
//     {locale.toUpperCase()}
//   </option>
// ))}
