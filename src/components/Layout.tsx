"use client";
import type { PropsWithChildren } from "react";
import { Box, Stack } from "@mui/material";
import { Header } from "./Header";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack height="100%">
      <Header />
      <Box flexGrow={1}>{children}</Box>
    </Stack>
  );
};
