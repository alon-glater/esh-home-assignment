"use client";
import { useEffect, type PropsWithChildren } from "react";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useLanguageContext } from "@/context/language";
import { Header } from "./Header";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { language } = useLanguageContext();

  useEffect(() => {
    document.dir = language.rtl ? "rtl" : "ltr";
  }, [language]);

  return (
    <ThemeProvider
      theme={(theme) =>
        createTheme({
          ...theme,
          direction: language.rtl ? "rtl" : "ltr",
        })
      }
    >
      <Stack height="100%">
        <Header />
        <Box flexGrow={1}>{children}</Box>
      </Stack>
    </ThemeProvider>
  );
};
