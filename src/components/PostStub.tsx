"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import type { Post } from "../types";

type PostStubProps = {
  post: Post;
  align?: "left" | "right";
};

export const PostStub: React.FC<PostStubProps> = ({
  post: { title, content, published, imageUrl },
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
          {content}
        </Typography>
      </Box>
    </Stack>
  );
};
