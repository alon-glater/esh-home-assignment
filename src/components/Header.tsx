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
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
