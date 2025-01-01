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
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cards.map((card, index) => (
          <div
            key={`${cardType}-${index}`}
            className={`transform transition-all duration-500 ease-in-out ${
              index >= 3
                ? showAll
                  ? "opacity-100 scale-100 max-h-[1000px] mb-4 sm:mb-6"
                  : "opacity-0 scale-95 max-h-0 mb-0 pointer-events-none"
                : "opacity-100 scale-100 max-h-[1000px] mb-4 sm:mb-6"
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
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={toggleView}
            disabled={isTransitioning}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-2 border border-[#00C7BE] text-[#00C7BE] rounded-sm 
                     hover:bg-[#00C7BE] hover:text-white transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed
                     text-sm sm:text-base mx-4 sm:mx-0"
          >
            {showAll ? "View less" : "View all"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
