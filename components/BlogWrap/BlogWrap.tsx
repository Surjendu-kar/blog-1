import React, { useState } from "react";
import BlogCard from "./BlogCard";
import CategoryNav from "./CategoryNav";
import Pagination from "./Pagination";
import BlogImg from "@/public/blog-img/blog-img.jpg";

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
};

const BlogWrap: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogs: BlogCardProps[] = Array(9).fill({
    image: BlogImg,
    title: "Unlocking AI's potential in AI Healthcare",
    description:
      "Our AI Hackathons are intensive, collaborative sessions that spark innovation",
  });

  return (
    <div className="w-full">
      <CategoryNav />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BlogWrap;