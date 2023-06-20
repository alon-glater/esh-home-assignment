"use client";
import { Container, List, ListItem } from "@mui/material";
import { Post } from "./Post";

const posts = [
  {
    title: "Post 1",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: new Date(),
    imageUrl:
      "https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
  },
  {
    title: "Post 2",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: new Date(),
    imageUrl:
      "https://images.unsplash.com/photo-1551260627-fd1b6daa6224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2667&q=80",
  },
  {
    title: "Post 3",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: new Date(),
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1676782583940-633240617c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
  },
];

export const Posts: React.FC = () => {
  return (
    <Container maxWidth="md">
      <List>
        {posts.map((post, index) => (
          <ListItem
            key={post.title}
            divider
            sx={{ justifyContent: index % 2 === 0 ? "start" : "end" }}
          >
            <Post
              title={post.title}
              subtitle={post.subtitle}
              published={post.published}
              imageUrl={post.imageUrl}
              align={index % 2 === 0 ? "left" : "right"}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
