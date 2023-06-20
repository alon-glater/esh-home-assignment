"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import type { Post } from "../types";
import Image from "next/image";

type FullPostProps = {
  post: Post;
};

export const FullPost: React.FC<FullPostProps> = ({ post }) => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 3 }}>
      <Stack gap={2}>
        <Stack>
          <Typography variant="h4" component="h1">
            {post.title}
          </Typography>
          <Typography>{post.published.toLocaleDateString()}</Typography>
        </Stack>

        <Box position="relative">
          <Image
            src={post.imageUrl}
            height={0}
            width={0}
            alt={post.title}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        <Typography>{post.content}</Typography>
      </Stack>
    </Container>
  );
};
