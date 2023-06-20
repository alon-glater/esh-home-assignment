"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

type PostProps = {
  title: string;
  subtitle: string;
  published: Date;
  imageUrl: string;
  align?: "left" | "right";
};

export const Post: React.FC<PostProps> = ({
  title,
  subtitle,
  published,
  imageUrl,
  align = "left",
}) => {
  return (
    <Stack
      direction={align === "left" ? "row" : "row-reverse"}
      justifyContent="space-between"
      gap="1rem"
    >
      <Box position="relative" minWidth={130}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Box>
        <Typography align={align}>{published.toLocaleDateString()}</Typography>
        <Typography variant="h6" align={align}>
          {title}
        </Typography>
        <Typography align={align} sx={{ WebkitLineClamp: 3 }}>
          {subtitle}
        </Typography>
      </Box>
    </Stack>
  );
};
