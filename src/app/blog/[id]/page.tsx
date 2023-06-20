import { notFound } from "next/navigation";
import { FullPost } from "../../../components/FullPost";
import { fetchPost } from "../../../services/fetchPost";

type PostParams = {
  id: string;
};

export default async function Post({ params }: { params: PostParams }) {
  const post = await fetchPost(params.id);

  if (!post) {
    notFound();
  }

  return <FullPost post={post} />;
}
