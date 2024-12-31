"use client";
import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategoryNav from "./CategoryNav";
import CustomCard from "../CustomCard/CustomCard";

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

interface CustomCardData {
  image: string;
  tag: string;
  time: number;
  title: string;
  description: string;
  link: string;
}

export type CardType = "blogs" | "insight-update-data" | "case-study-data";

const BlogWrap = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [customCards, setCustomCards] = useState<CustomCardData[]>([]);
  const [currentCategory, setCurrentCategory] = useState<CardType>("blogs");
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanging, setIsChanging] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "left"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [originalPosts, setOriginalPosts] = useState<BlogPost[]>([]);
  const [originalCustomCards, setOriginalCustomCards] = useState<
    CustomCardData[]
  >([]);
  const postsPerPage = 6;

  useEffect(() => {
    fetchData(currentCategory);
  }, [currentCategory]);

  const fetchData = async (category: CardType) => {
    builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
    const builderData = await builder.getAll(category);

    try {
      if (category === "blogs") {
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
        setOriginalPosts(transformedPosts);
        setCustomCards([]);
        setOriginalCustomCards([]);
      } else {
        const transformedCards = builderData.map((item) => ({
          image: item.data?.image ?? "",
          tag: item.data?.tag ?? "",
          time: item.data?.time ?? 0,
          title: item.data?.title ?? "",
          description: item.data?.description ?? "",
          link: item.data?.link ?? "#",
        }));
        setCustomCards(transformedCards);
        setOriginalCustomCards(transformedCards);
        setPosts([]);
        setOriginalPosts([]);
      }
      setCurrentPage(1);
    } catch (error) {
      console.error("Transformation error:", error);
    }
  };

  const handleCategoryChange = (category: CardType) => {
    setCurrentCategory(category);
    setSearchQuery("");
  };

  // Updated search effect
  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();
    if (currentCategory === "blogs") {
      if (query === "") {
        setPosts(originalPosts);
      } else {
        const filtered = originalPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(query) ||
            post.description.toLowerCase().includes(query)
        );
        setPosts(filtered);
      }
    } else {
      if (query === "") {
        setCustomCards(originalCustomCards);
      } else {
        const filtered = originalCustomCards.filter(
          (card) =>
            card.title.toLowerCase().includes(query) ||
            card.description.toLowerCase().includes(query)
        );
        setCustomCards(filtered);
      }
    }
    setCurrentPage(1);
  }, [searchQuery, originalPosts, originalCustomCards]);

  // Calculate pagination
  const currentItems = currentCategory === "blogs" ? posts : customCards;
  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  const currentPageItems = currentItems.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(currentItems.length / postsPerPage);

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
      <CategoryNav
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
      />

      {currentItems.length === 0 && (
        <div className="text-center py-8 text-gray-600">
          No items found matching your search.
        </div>
      )}

      {currentCategory === "blogs" ? (
        <BlogCard
          posts={currentPageItems as BlogPost[]}
          slideDirection={slideDirection}
          isChanging={isChanging}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPageItems.map((card, index) => (
            <CustomCard key={index} card={card as CustomCardData} />
          ))}
        </div>
      )}

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
