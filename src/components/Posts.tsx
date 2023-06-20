"use client";
import { Container, List, ListItem } from "@mui/material";
import { PostStub } from "./PostStub";
import type { Post } from "../types";
import Link from "next/link";

type PostsProps = {
  posts: Array<Post>;
};

export const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Container maxWidth="md">
      <List>
        {posts.map((post, index) => (
          <ListItem
            key={post.title}
            divider
            sx={{ justifyContent: index % 2 === 0 ? "start" : "end" }}
          >
            <Link href={`/blog/${post.id}`}>
              <PostStub
                post={post}
                align={index % 2 === 0 ? "left" : "right"}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
