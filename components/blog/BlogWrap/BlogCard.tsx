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
    <div className="overflow-hidden">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6 transform transition-transform duration-500 ease-in-out ${getSlideAnimation()}`}
      >
        {posts.map((post, index) => (
          <Link
            href={`/blog/${post.slug}`}
            key={index}
            className="flex flex-col rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
          >
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
                      unoptimized={isExternalUrl(post.authorImg)}
                      loader={
                        isExternalUrl(post.authorImg)
                          ? ({ src }: { src: string }) => src
                          : undefined
                      }
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
    </div>
  );
};

export default BlogCard;
