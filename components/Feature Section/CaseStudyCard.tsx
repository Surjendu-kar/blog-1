"use client";
import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import Image from "next/image";

interface InsightCard {
  image: string;
  tag: string;
  time: number;
  title: string;
  description: string;
  link: string;
}

const CaseStudyCard = () => {
  const [cards, setCards] = useState<InsightCard[]>([]);

  useEffect(() => {
    async function fetchCards() {
      builder.init("d0b1ab2c80db47c9afbc018dd30f96d7");
      const builderData = await builder.getAll("case-study-card");

      try {
        const transformedCards = builderData.map((item) => ({
          image: item.data?.image ?? "",
          tag: item.data?.tag ?? "",
          time: item.data?.time ?? 0,
          title: item.data?.title ?? "",
          description: item.data?.description ?? "",
          link: item.data?.link ?? "#",
        }));
        setCards(transformedCards);
      } catch (error) {
        console.error("Transformation error:", error);
      }
    }
    fetchCards();
  }, []);

  const isExternalUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="flex">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 rounded-lg bg-white w-96"
        >
          {/* Card Image */}
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              className="object-cover"
              fill
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
            <h3 className="text-sm font-semibold text-gray-900">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-600">{card.description}</p>

            {/* Read More Link */}
            <div className="mt-2">
              <a
                href={card.link}
                className="text-cyan-500 text-sm underline inline-flex items-center"
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
      ))}
    </div>
  );
};

export default CaseStudyCard;
