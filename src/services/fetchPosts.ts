import { posts } from "./posts";
import type { Post, Language } from "../types";

/**
 * This function is a mock for an actual API call.
 */
export function fetchPosts(language: Language["value"]): Promise<Array<Post>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts.get(language) ?? []);
    }, 500);
  });
}
