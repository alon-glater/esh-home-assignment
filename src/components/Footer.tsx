"use client";
import { Container, Divider, Stack, Typography } from "@mui/material";

type FooterProps = {
  invertColors?: boolean;
};

export const Footer: React.FC<FooterProps> = ({ invertColors = false }) => {
  return (
    <Container
      maxWidth="lg"
      component="footer"
      sx={{ zIndex: 1, ...(invertColors ? { color: "white" } : {}) }}
    >
      <Stack sx={{ marginBottom: 1 }}>
        <Divider
          sx={{
            marginBottom: 1,
            ...(invertColors ? { borderColor: "white" } : {}),
          }}
        />
        <Typography variant="caption">Privacy Policy</Typography>
        <Typography variant="caption">Accessibiliy Statement</Typography>
      </Stack>
    </Container>
  );
};
