"use client";
import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import Image from "next/image";

interface BlogPost {
  image: string;
  title: string;
  description: string;
  authorName: string;
  authorImg: string;
  tag: string;
  time: number;
}

const BlogCard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      builder.init("d0b1ab2c80db47c9afbc018dd30f96d7");
      const builderData = await builder.getAll("blog-post-card");
      console.log("Builder Data:", builderData);

      try {
        const transformedPosts = builderData.map((item) => ({
          image: item.data?.image ?? "",
          title: item.data?.title ?? "",
          description: item.data?.description ?? "",
          authorName: item.data?.authorName ?? "",
          authorImg: item.data?.authorImg ?? "",
          tag: item.data?.tag ?? "",
          time: item.data?.time ?? 0,
        }));
        // console.log("Transformed Posts:", transformedPosts);
        setPosts(transformedPosts);
      } catch (error) {
        console.error("Transformation error:", error);
      }
    }
    fetchPosts();
  }, []);

  const isExternalUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="flex ">
      {posts.map((post, index) => (
        <div key={index} className="rounded overflow-hidden w-96">
          {/* Blog image */}
          <div className="relative w-full h-48">
            <Image
              src={post.image}
              alt={post.title}
              className="object-cover rounded-lg"
              fill
              unoptimized={isExternalUrl(post.image)}
              loader={
                isExternalUrl(post.image)
                  ? ({ src }: { src: string }) => src
                  : undefined
              }
            />
          </div>
          <div className="pt-4 gap-3 flex flex-col">
            {/* Blog title */}
            <h3 className="font-semibold text-xl">{post.title}</h3>

            {/* Blog description */}
            <p className="text-gray-600 text-sm">{post.description}</p>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {/* Avatar image */}
                <div className="relative w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src={post.authorImg}
                    alt={post.authorName}
                    className="object-cover"
                    fill
                    unoptimized={isExternalUrl(post.authorImg)}
                    loader={
                      isExternalUrl(post.authorImg)
                        ? ({ src }: { src: string }) => src
                        : undefined
                    }
                  />
                </div>
                {/* Author name */}
                <span className="text-sm">{post.authorName}</span>
              </div>

              {/* Tag */}
              <span className="bg-teal-400 text-white text-xs px-3 py-1 rounded-3xl">
                {post.tag}
              </span>

              {/* time */}
              <span className="text-sm text-gray-500">{post.time} mins</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
