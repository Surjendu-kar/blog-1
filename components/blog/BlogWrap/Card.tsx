import Image from "next/image";
import { FC } from "react";

interface CardProps {
  blogImage: string;
  blogTitle: string;
  blogDescription: string;
  authorImage: string;
  authorName: string;
  tag: string;
  readTime: string;
}

const Card: FC<CardProps> = ({
  blogImage,
  blogTitle,
  blogDescription,
  authorImage,
  authorName,
  tag,
  readTime,
}) => {
  const isExternalUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="rounded overflow-hidden w-96">
      {/* Blog image */}
      <div className="relative w-full h-48">
        <Image
          src={blogImage}
          alt={blogTitle}
          className="object-cover rounded-lg"
          fill
          unoptimized={isExternalUrl(blogImage)}
          loader={isExternalUrl(blogImage) ? ({ src }) => src : undefined}
        />
      </div>
      <div className="pt-4 gap-3 flex flex-col">
        {/* Blog title */}
        <h3 className="font-semibold text-xl">{blogTitle}</h3>

        {/* Blog description */}
        <p className="text-gray-600 text-sm">{blogDescription}</p>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {/* Avatar image */}
            <div className="relative w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <Image
                src={authorImage}
                alt={authorName}
                className="object-cover"
                fill
                unoptimized={isExternalUrl(authorImage)}
                loader={
                  isExternalUrl(authorImage) ? ({ src }) => src : undefined
                }
              />
            </div>
            {/* Author name */}
            <span className="text-sm">{authorName}</span>
          </div>

          {/* Tag */}
          <span className="bg-teal-400 text-white text-xs px-3 py-1 rounded-3xl">
            {tag}
          </span>

          {/* time */}
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
