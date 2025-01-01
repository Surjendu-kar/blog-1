"use client";
import { FC, useState } from "react";
import CustomCard from "./CustomCard";
import { CardContainerProps } from ".";

const CardContainer: FC<CardContainerProps> = ({ cards, cardType }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const hasMoreCards = cards.length > 3;

  const toggleView = () => {
    setIsTransitioning(true);
    setShowAll(!showAll);

    if (showAll) {
      setTimeout(() => {
        window.scrollTo({ top: window.scrollY - 500, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {cards.map((card, index) => (
          <div
            key={`${cardType}-${index}`}
            className={`transform transition-all duration-500 ease-in-out ${
              index >= 3
                ? showAll
                  ? "opacity-100 scale-100 max-h-[1000px] mb-4 md:mb-6"
                  : "opacity-0 scale-95 max-h-0 mb-0 pointer-events-none"
                : "opacity-100 scale-100 max-h-[1000px] mb-4 md:mb-6"
            }`}
            onTransitionEnd={() => {
              setIsTransitioning(false);
            }}
          >
            <CustomCard card={card} />
          </div>
        ))}
      </div>

      {/* View All Button */}
      {hasMoreCards && (
        <div className="flex justify-center mt-6 md:mt-8">
          <button
            onClick={toggleView}
            disabled={isTransitioning}
            className="w-full md:w-auto px-6 md:px-8 py-2.5 md:py-2 border border-[#00C7BE] text-[#00C7BE] rounded-md 
                     hover:bg-[#00C7BE] hover:text-white transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed
                     text-sm md:text-base mx-4 md:mx-0"
          >
            {showAll ? "View less" : "View all"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
