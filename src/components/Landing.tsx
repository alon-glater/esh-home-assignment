"use client";
import { Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import { Footer } from "./Footer";

export const Landing: React.FC = () => {
  return (
    <Stack
      sx={{
        height: "100%",
        width: "100%",
        color: "white",
        background: "black",
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        gap="4rem"
        flexGrow={1}
        zIndex={1}
      >
        <Typography
          variant="h1"
          sx={{
            letterSpacing: "0.3rem",
          }}
        >
          esh.
        </Typography>
        <Stack gap="1.2rem" alignItems="center">
          <Typography textAlign="center" variant="h5">
            A new bank is coming
          </Typography>
          <Link href="/blog">
            <Button variant="contained">Read Latest Updates</Button>
          </Link>
        </Stack>
      </Stack>
      <Footer invertColors />
    </Stack>
  );
};
