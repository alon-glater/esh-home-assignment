"use client";

import { PropsWithChildren } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { LanguageProvider } from "@/context/language";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LanguageProvider>
  );
};
