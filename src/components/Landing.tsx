"use client";
import { Box, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";

export const Landing: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
      }}
    >
      <Stack alignItems="center" gap="4rem">
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
    </Box>
  );
};
