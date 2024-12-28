import { FC, useState } from "react";
import CustomCard from "../CustomCard/CustomCard";
import { CardContainerProps } from ".";

const CardContainer: FC<CardContainerProps> = ({ cards, cardType }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const visibleCards = showAll ? cards : cards.slice(0, 3);
  const hasMoreCards = cards.length > 3;

  const toggleView = () => {
    setShowAll(!showAll);
    // Smooth scroll to top of container when collapsing
    if (showAll) {
      window.scrollTo({ top: window.scrollY - 500, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {visibleCards.map((card, index) => (
          <CustomCard key={`${cardType}-${index}`} card={card} />
        ))}
      </div>

      {hasMoreCards && (
        <button
          onClick={toggleView}
          className="px-8 py-2 border border-[#00C7BE] text-[#00C7BE] rounded-md 
                   hover:bg-[#00C7BE] hover:text-white transition-colors"
        >
          {showAll ? "View less" : "View all"}
        </button>
      )}
    </div>
  );
};

export default CardContainer;
