"use client";
import {
  CssBaseline,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Link from "next/link";
import { useLanguageContext } from "@/context/language";
import { LanguagesMenu } from "./LanguagesMenu";
import type { Language } from "../types";

const pages = (language: Language) => [
  {
    title: language.appBarHomeButtonText,
    path: "/",
  },
  {
    title: language.appBarBlogButtonText,
    path: "/blog",
  },
];

export const Header: React.FC = () => {
  const { language } = useLanguageContext();

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  letterSpacing: "0.2rem",
                  textDecoration: "none",
                  direction: "ltr",
                }}
              >
                esh.
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1 }}>
              {pages(language).map((page) => (
                <Link key={page.title} href={page.path}>
                  <Button sx={{ my: 2, color: "rgba(0, 0, 0, 0.87)" }}>
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Box>

            <LanguagesMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
