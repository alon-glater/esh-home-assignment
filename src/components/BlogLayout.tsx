"use client";
import type { PropsWithChildren } from "react";
import { Box, Stack } from "@mui/material";
import { Footer } from "./Footer";

export const BlogLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack height="100%">
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Stack>
  );
};
