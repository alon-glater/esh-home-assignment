"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export const ErrorPage: React.FC = () => {
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack alignItems="center" gap={1}>
        <Typography variant="h3">Not Found</Typography>
        <Typography>Could not find the requested post.</Typography>
        <Link style={{ marginTop: "1rem" }} href="/">
          <Button variant="contained" color="warning">
            Go back to home page
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};
