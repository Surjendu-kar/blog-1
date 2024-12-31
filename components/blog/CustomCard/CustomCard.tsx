import { FC } from "react";
import Image from "next/image";
import { CardProps } from ".";

const CustomCard: FC<CardProps> = ({ card }) => {
  const isExternalUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white w-full hover:shadow-lg transition-all duration-300">
      {/* Card Image */}
      <div className="relative h-48 rounded-lg overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={isExternalUrl(card.image)}
          loader={
            isExternalUrl(card.image)
              ? ({ src }: { src: string }) => src
              : undefined
          }
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-3 px-3 pb-4">
        {/* Category and Read Time */}
        <div className="flex items-center gap-4">
          <span className="bg-[#00C7BE] text-white text-xs px-3 py-1 rounded-sm">
            {card.tag}
          </span>
          <span className="text-sm text-[#000000]">{card.time} mins</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900">{card.title}</h3>

        {/* Description */}
        <p className="text-xs text-gray-600">{card.description}</p>

        {/* Read More Link */}
        <div className="mt-2">
          <a
            href={card.link}
            className="text-[#00C7BE] text-sm underline inline-flex items-center hover:text-[#00a59e] transition-colors"
          >
            Read more
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
