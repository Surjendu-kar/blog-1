import Image from "next/image";
import { FC } from "react";

export interface CardData {
  title: string;
  description: string;
  authorImg: string;
  authorName: string;
  tag: string;
  time: string;
}

interface RelatedPostCardProps {
  card: CardData;
}

const RelatedPostCard: FC<RelatedPostCardProps> = ({ card }) => {
  const { title, description, authorImg, authorName, tag, time } = card;

  return (
    <div className="flex flex-col gap-3 sm:gap-4 bg-[#F1F1F3] p-2 sm:p-4 rounded-lg">
      {/* Title & Description */}
      <div className="flex flex-col gap-2 sm:gap-4">
        <p className="text-[#000000] text-[14px] sm:text-lg font-bold line-clamp-2">
          {title}
        </p>
        <p className="text-[#595959] text-[12px] sm:text-base line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {/* Author Image and Name */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {authorImg && (
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden">
              <Image
                src={authorImg}
                alt={authorName || "Author"}
                className="object-cover"
                fill
                sizes="(max-width: 640px) 24px, 32px"
              />
            </div>
          )}
          <span className="text-[11px] sm:text-sm text-[#595959] line-clamp-1">
            {authorName}
          </span>
        </div>

        {/* Tag */}
        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-teal-400 text-white text-[10px] sm:text-xs rounded-full whitespace-nowrap">
          {tag}
        </span>

        {/* Reading Time */}
        <span className="text-[11px] sm:text-sm text-[#595959] whitespace-nowrap">
          {time} mins
        </span>
      </div>
    </div>
  );
};

export default RelatedPostCard;