import Image from "next/image";
import { FC } from "react";

interface RelatedPostProps {
  title?: string;
  description?: string;
  authorImage?: string;
  authorName?: string;
  tag?: string;
  readTime?: string;
}

const RelatedPost: FC<RelatedPostProps> = ({
  title,
  description,
  authorImage,
  authorName,
  tag,
  readTime,
}) => {
  const isExternalUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-[#F1F1F3] p-4 rounded-lg">
      {/* Title & Description */}
      <div className="flex flex-col gap-4">
        <p className="text-[#000000] text-lg font-medium">{title}</p>
        <p className="text-[#595959]">{description}</p>
      </div>

      <div className="flex items-center gap-2">
        {/* Author Image and Name */}
        <div className="flex items-center gap-2">
          {authorImage && (
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={authorImage}
                alt={authorName || "Author"}
                className="object-cover"
                fill
                sizes="32px"
                unoptimized={isExternalUrl(authorImage)}
                loader={
                  isExternalUrl(authorImage)
                    ? ({ src }: { src: string }) => src
                    : undefined
                }
              />
            </div>
          )}
          <span className="text-sm text-[#595959]">{authorName}</span>
        </div>

        {/* Tag */}
        <span className="px-3 py-1 bg-teal-400 text-white text-xs rounded-full">
          {tag}
        </span>

        {/* Reading Time */}
        <span className="text-sm text-[#595959]">{readTime}</span>
      </div>
    </div>
  );
};

export default RelatedPost;
