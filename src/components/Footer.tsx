"use client";
import { Container, Divider, Stack, Typography } from "@mui/material";
import { useLanguageContext } from "@/context/language";

type FooterProps = {
  invertColors?: boolean;
};

export const Footer: React.FC<FooterProps> = ({ invertColors = false }) => {
  const { language } = useLanguageContext();

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
        <Typography variant="caption">
          {language.privacyPolicyLinkText}
        </Typography>
        <Typography variant="caption">
          {language.accessibilityStatementLinkText}
        </Typography>
      </Stack>
    </Container>
  );
};
