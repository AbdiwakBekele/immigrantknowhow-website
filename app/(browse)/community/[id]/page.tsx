import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  fetchPublicCommunityComments,
  fetchPublicCommunityPost,
} from "@/app/lib/api/community";

import CommunityPostView from "../CommunityPostView";
import { stripHtml } from "../community-utils";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchPublicCommunityPost(Number(id));

  if (!post) {
    return { title: "Post not found - Community" };
  }

  return {
    title: `${post.title} | Community`,
    description: stripHtml(post.description).slice(0, 160),
  };
}

export default async function CommunityPostPage({ params }: Props) {
  const { id } = await params;
  const postId = Number(id);

  if (!Number.isFinite(postId) || postId < 1) {
    notFound();
  }

  const [post, comments] = await Promise.all([
    fetchPublicCommunityPost(postId),
    fetchPublicCommunityComments(postId),
  ]);

  if (!post) {
    notFound();
  }

  return <CommunityPostView post={post} comments={comments} />;
}
