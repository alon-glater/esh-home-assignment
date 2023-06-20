import { Posts } from "../../components/Posts";
import { fetchPosts } from "@/services/fetchPosts";

export default async function Blog() {
  const posts = await fetchPosts();

  return <Posts posts={posts} />;
}
