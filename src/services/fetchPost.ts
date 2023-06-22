import { posts } from "./posts";
import type { Post } from "../types";

/**
 * This function is a mock for an actual API call.
 */
export function fetchPost(id: string): Promise<Post | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from(posts.values())
          .flatMap((post) => post)
          .find((post) => post.id === id)
      );
    }, 500);
  });
}
