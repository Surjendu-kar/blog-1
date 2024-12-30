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
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanging, setIsChanging] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "left"
  );
  const [searchQuery, setSearchQuery] = useState("");
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
        setFilteredPosts(transformedPosts);
      } catch (error) {
        console.error("Transformation error:", error);
      }
    }
    fetchPosts();
  }, []);

  // Handle search
  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();
    if (query === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query)
      );
      setFilteredPosts(filtered);
    }
    setCurrentPage(1);
  }, [searchQuery, posts]);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setSlideDirection(pageNumber > currentPage ? "right" : "left");
    setIsChanging(true);

    setTimeout(() => {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        setIsChanging(false);
      }, 50);
    }, 500);
  };

  return (
    <div className="container mx-auto px-4">
      <CategoryNav searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {filteredPosts.length === 0 && (
        <div className="text-center py-8 text-gray-600">
          No blogs found matching your search.
        </div>
      )}

      <BlogCard
        posts={currentPosts}
        slideDirection={slideDirection}
        isChanging={isChanging}
      />

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
