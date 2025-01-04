import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

interface BlogCardProps {
  posts: BlogPost[];
  slideDirection?: "left" | "right";
  isChanging: boolean;
}

const BlogCard = ({
  posts,
  slideDirection = "left",
  isChanging,
}: BlogCardProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isExternalUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const getSlideAnimation = () => {
    if (!mounted) return "translate-x-0";
    if (isChanging) {
      return slideDirection === "left"
        ? "-translate-x-full"
        : "translate-x-full";
    }
    return "translate-x-0";
  };

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transform transition-transform duration-500 ease-in-out ${getSlideAnimation()}`}
    >
      {posts.map((post, index) => (
        <Link
          href={`/blog/${post.slug}`}
          key={index}
          className="flex flex-col rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
        >
          <div className="relative w-full h-40 sm:h-48">
            <Image
              src={post.image}
              alt={post.title}
              className="object-cover rounded-lg"
              fill
              loading="lazy"
              unoptimized={isExternalUrl(post.image)}
              loader={
                isExternalUrl(post.image)
                  ? ({ src }: { src: string }) => src
                  : undefined
              }
            />
          </div>

          <div className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
            <h3 className="text-base sm:text-lg font-semibold line-clamp-2 text-left">
              {post.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 text-left">
              {post.description}
            </p>

            <div className="flex items-center justify-start gap-1.5 sm:gap-2 mt-1 sm:mt-2">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-1">
                <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden">
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
                <span className="text-xs sm:text-sm font-medium truncate">
                  {post.authorName}
                </span>
              </div>

              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-teal-400 text-white text-[10px] sm:text-xs rounded-full">
                {post.tag}
              </span>

              <span className="text-xs sm:text-sm text-gray-500">
                {post.time} mins
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
