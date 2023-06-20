import { posts } from "./posts";
import type { Post } from "../types";

/**
 * This function is a mock for an actual API call.
 */
export function fetchPost(id: string): Promise<Post | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts.find((post) => post.id === id));
    }, 500);
  });
}
