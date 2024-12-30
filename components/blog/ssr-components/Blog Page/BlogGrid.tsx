"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../../BlogWrap/Pagination";
import CategoryNav from "../../BlogWrap/CategoryNav";

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

interface BlogGridProps {
  initialPosts: BlogPost[];
}

const BlogGrid = ({ initialPosts }: BlogGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanging, setIsChanging] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "left"
  );

  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = initialPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(initialPosts.length / postsPerPage);

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
    <div className="flex flex-col mx-auto gap-4">
      <CategoryNav />

      {/* all blogs */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transform transition-transform duration-500 ease-in-out ${
          isChanging
            ? slideDirection === "left"
              ? "-translate-x-full opacity-0"
              : "translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        {currentPosts.map((post, index) => (
          <Link
            href={`/blog/${post.slug}`}
            key={index}
            className="flex flex-col rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-48">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  className="object-cover rounded-lg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
              )}
            </div>

            <div className="p-4 flex flex-col gap-3">
              {/* Title */}
              <h3 className="text-lg font-semibold">{post.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600">{post.description}</p>

              {/* Author and Tags Row */}
              <div className="flex items-center gap-2">
                {/* Author Section */}
                <div className="flex items-center gap-2 flex-1">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={post.authorImg}
                      alt={post.authorName}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <span className="text-sm font-medium">{post.authorName}</span>
                </div>

                {/* Tag */}
                <span className="px-3 py-1 bg-teal-400 text-white text-xs rounded-full">
                  {post.tag}
                </span>

                {/* Reading Time */}
                <span className="text-sm text-gray-500">{post.time} mins</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

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

export default BlogGrid;
