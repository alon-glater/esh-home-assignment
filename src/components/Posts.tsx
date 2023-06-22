"use client";
import { useState, useEffect } from "react";
import { Container, List, ListItem } from "@mui/material";
import { PostStub } from "./PostStub";
import Link from "next/link";
import { useLanguageContext } from "@/context/language";
import { fetchPosts } from "@/services/fetchPosts";
import type { Post } from "@/types";

export const Posts: React.FC = () => {
  const [languagePosts, setLanguagePosts] = useState<Array<Post>>([]);
  const { language } = useLanguageContext();

  useEffect(() => {
    fetchPosts(language.value).then((posts) => setLanguagePosts(posts));
  }, [language]);

  return (
    <Container maxWidth="md">
      <List>
        {languagePosts.map((post, index) => (
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
