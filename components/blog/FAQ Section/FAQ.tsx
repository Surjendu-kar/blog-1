"use client";
import { builder } from "@builder.io/sdk";
import { useEffect, useState } from "react";

interface Data {
  title: string;
  description: string;
}

export default function FAQ() {
  const [data, setData] = useState<Data[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const ITEMS_TO_SHOW = 4;
  const hasMoreItems = data.length > ITEMS_TO_SHOW;

  useEffect(() => {
    async function fetchCards() {
      builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
      const builderData = await builder.getAll("faq");

      try {
        const transformedCards = builderData.map((item) => ({
          title: item.data?.title ?? "",
          description: item.data?.description ?? "",
        }));

        setData(transformedCards);
      } catch (error) {
        console.error("Transformation error:", error);
      }
    }
    fetchCards();
  }, []);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleView = () => {
    setIsTransitioning(true);
    setShowAll(!showAll);

    if (showAll) {
      // Smooth scroll up when collapsing
      setTimeout(() => {
        window.scrollTo({ top: window.scrollY - 500, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div
      className="max-w-4xl flex flex-col"
      style={{ gap: showAll ? "3rem" : "0" }}
    >
      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`transform transition-all duration-500 ease-in-out ${
              index >= ITEMS_TO_SHOW
                ? showAll
                  ? "opacity-100 scale-100 max-h-[1000px] mb-4"
                  : "opacity-0 scale-95 max-h-0 mb-0 pointer-events-none"
                : "opacity-100 scale-100 max-h-[1000px] mb-4"
            }`}
            onTransitionEnd={() => {
              setIsTransitioning(false);
            }}
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div
                className="flex justify-between items-center p-4 cursor-pointer gap-4"
                onClick={() => toggleDescription(index)}
              >
                <h3 className="text-base font-normal text-gray-900">
                  {item.title}
                </h3>
                <button
                  className="w-6 h-6 flex items-center justify-center text-[#00C7BE] text-xl font-bold bg-[#007AFF26] rounded-md"
                  aria-label={openIndex === index ? "Collapse" : "Expand"}
                >
                  {openIndex === index ? "−" : "+"}
                </button>
              </div>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 text-sm text-[#B3B3B3]">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMoreItems && (
        <div className="flex justify-center ">
          <button
            onClick={toggleView}
            disabled={isTransitioning}
            className="px-8 py-2 border border-[#00C7BE] text-[#00C7BE] rounded-md 
                     hover:bg-[#00C7BE] hover:text-white transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {showAll ? "View less" : "View all"}
          </button>
        </div>
      )}
    </div>
  );
}
