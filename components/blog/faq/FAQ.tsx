"use client";
import {  useState } from "react";

interface FAQItem {
  title: string;
  description: string;
}

interface FAQProps {
  faqItems?: FAQItem[];
  itemsToShow?: number;
  subtitle?: string;
  title?: string;
  description?: string;
}

export default function FAQ({
  faqItems = [],
  itemsToShow = 4,
  subtitle = 'Blog',
  title = "Frequently asked questions",
  description ='Explore to learn more about how Symbiofy can empower your business with AI-driven solutions.',
 
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const hasMoreItems = faqItems.length > itemsToShow;

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <>
      {/* heading */}
      <div className="my-10 mx-auto px-2 lg:px-0 text-center lg:text-left">
        {subtitle && (
          <p className="text-center text-[#00C7BE] text-[14px]" dangerouslySetInnerHTML={{ __html: subtitle }} />
        )}
        <h1
          className="font-bold text-[#000000] text-[25px] lg:text-[40px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && (
          <p
            className="text-[#595959] text-[12px] lg:text-[14px] px-6 lg:px-0"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
      {/* content  */}
      <div
        className="w-full max-w-4xl flex flex-col px-4 sm:px-6 md:px-0 mx-auto"
        style={{ gap: showAll ? "2rem sm:3rem" : "0" }}
      >
        <div className="space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ease-in-out ${
                index >= itemsToShow
                  ? showAll
                    ? "opacity-100 scale-100 max-h-[1000px] mb-3 sm:mb-4"
                    : "opacity-0 scale-95 max-h-0 mb-0 pointer-events-none"
                  : "opacity-100 scale-100 max-h-[1000px] mb-3 sm:mb-4"
              }`}
              onTransitionEnd={() => {
                setIsTransitioning(false);
              }}
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                <div
                  className="flex justify-between items-center p-3 sm:p-4 cursor-pointer gap-3 sm:gap-4"
                  onClick={() => toggleDescription(index)}
                >
                  {/* title */}
                  <h3 className="text-[14px] lg:text-sm sm:text-base font-normal text-gray-900 pr-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                  
                  {/* button */}
                  {item.description && (
                    <button
                      className="min-w-[24px] min-h-[24px] sm:w-6 sm:h-6 flex items-center justify-center text-[#00C7BE] text-lg sm:text-xl font-bold bg-[#007AFF26] rounded-md flex-shrink-0"
                      aria-label={openIndex === index ? "Collapse" : "Expand"}
                    >
                      {openIndex === index ? "−" : "+"}
                    </button>
                  )}
                </div>

                {/* description */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                > 
                  <div className="overflow-hidden">
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-[12px] lg:text-xs text-[#B3B3B3]" dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreItems && (
          <div className="flex justify-center mt-4 sm:mt-6">
            <button
              onClick={toggleView}
              disabled={isTransitioning}
              className="w-full sm:w-auto mx-4 sm:mx-0 px-6 sm:px-8 py-2.5 sm:py-2 border border-[#00C7BE] text-[#00C7BE] rounded-md 
                     text-sm sm:text-base
                     hover:bg-[#00C7BE] hover:text-white transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {showAll ? "View less" : "View all"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
