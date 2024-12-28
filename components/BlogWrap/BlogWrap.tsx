"use client";
import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategoryNav from "./CategoryNav";

interface BlogPost {
  image: string;
  title: string;
  description: string;
  authorName: string;
  authorImg: string;
  tag: string;
  time: number;
  slug: string;
}

const BlogWrap = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    async function fetchPosts() {
      builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
      const builderData = await builder.getAll("blog-post-card");

      try {
        const transformedPosts = builderData.map((item) => ({
          image: item.data?.image ?? "",
          title: item.data?.title ?? "",
          description: item.data?.description ?? "",
          authorName: item.data?.authorName ?? "",
          authorImg: item.data?.authorImg ?? "",
          tag: item.data?.tag ?? "",
          time: item.data?.time ?? 0,
          slug: item.data?.slug ?? "",
        }));
        setPosts(transformedPosts);
      } catch (error) {
        console.error("Transformation error:", error);
      }
    }
    fetchPosts();
  }, []);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Optionally scroll to top of blog section
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4">
      <CategoryNav />
      <BlogCard posts={currentPosts} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default BlogWrap;
