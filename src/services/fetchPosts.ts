import { posts } from "./posts";
import type { Post } from "../types";

/**
 * This function is a mock for an actual API call.
 */
export function fetchPosts(): Promise<Array<Post>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 500);
  });
}
