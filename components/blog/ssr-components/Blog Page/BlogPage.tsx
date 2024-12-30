import React from "react";
import { builder } from "@builder.io/sdk";
import BlogGrid from "./BlogGrid";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function BlogPage() {
  const builderData = await builder.getAll("blog-post-card", {
    prerender: false,
  });

  const transformedPosts = builderData.map((item) => ({
    image: item.data?.image || "",
    title: item.data?.title || "",
    description: item.data?.description || "",
    authorName: item.data?.authorName || "",
    authorImg: item.data?.authorImg || "",
    tag: item.data?.tag || "",
    time: item.data?.time || 0,
    slug: item.data?.slug || "",
  }));

  return <BlogGrid initialPosts={transformedPosts} />;
}
