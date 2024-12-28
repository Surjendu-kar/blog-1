import Image from "next/image";
import Link from "next/link";

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
}

const BlogCard = ({ posts }: BlogCardProps) => {
  const isExternalUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((post, index) => (
        <Link
          href={`/blog/${post.slug}`}
          key={index}
          className="flex flex-col rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
        >
          {/* Blog image */}
          <div className="relative w-full h-48">
            <Image
              src={post.image}
              alt={post.title}
              className="object-cover"
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
  );
};

export default BlogCard;
