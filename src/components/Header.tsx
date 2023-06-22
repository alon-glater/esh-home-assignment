"use client";
import {
  CssBaseline,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { useLanguageContext } from "@/context/language";
import type { Language } from "../types";

const pages = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export const Header: React.FC = () => {
  const {
    languages,
    language: selectedLanguage,
    setLanguage,
  } = useLanguageContext();
  const [languagesElement, setLanguagesElement] = useState<HTMLElement | null>(
    null
  );

  const openLanguagesMenu = (event: MouseEvent<HTMLElement>) => {
    setLanguagesElement(event.currentTarget);
  };

  const closeLanguagesMenu = () => {
    setLanguagesElement(null);
  };

  const selectLanguage = (language: Language) => {
    setLanguage(language);
    closeLanguagesMenu();
  };

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: "0.2rem",
                textDecoration: "none",
              }}
            >
              esh.
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              {pages.map((page) => (
                <Link key={page.title} href={page.path}>
                  <Button sx={{ my: 2, color: "rgba(0, 0, 0, 0.87)" }}>
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Box>
            <IconButton onClick={openLanguagesMenu} aria-label="language">
              <LanguageIcon />
            </IconButton>
            <Menu
              anchorEl={languagesElement}
              open={!!languagesElement}
              onClose={closeLanguagesMenu}
              aria-label="languages-menu"
            >
              {languages.map((language) => (
                <MenuItem
                  key={language.value}
                  onClick={() => selectLanguage(language)}
                  disabled={language === selectedLanguage}
                >
                  <Typography>{language.display}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
