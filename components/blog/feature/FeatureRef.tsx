"use client";
import { FC, useEffect, useState } from "react";
import CustomCard from "../customCard/CustomCard";
import { CardData } from "../customCard";
interface FeatureRefData {
  
  value: {
    value: {
      data: {
        image: string;
        tag: string;
        time: number;
        title: string;
        description: string;
        link: string;
      };
    };
  };
}
interface FeatureRefProps {
  reference?: FeatureRefData[];
  title?: string;
  subtitle?: string;
  description?: string;
  titleFontSize?: string;
  descriptionFontSize?: string;
}
const FeatureRef: FC<FeatureRefProps> = ({
  reference = [],
  title = "BLOG",
  subtitle,
  description,
  titleFontSize = "45px",
  descriptionFontSize = "14px",
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const hasMoreCards = reference.length > 3;
  const toggleView = () => {
    setIsTransitioning(true);
    setShowAll(!showAll);
    if (showAll) {
      setTimeout(() => {
        window.scrollTo({ top: window.scrollY - 500, behavior: "smooth" });
      }, 100);
    }
  };
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  if (!reference || reference.length === 0) {
    return <div>No references available.</div>;
  }

  return (
    <>
      {/* heading */}
      <div className="my-10 mx-auto">
        {subtitle && (
          <p className="text-center text-sm text-[#00C7BE]">{subtitle}</p>
        )}
        <h1
          className="font-bold text-[#000000]"
          style={{ fontSize: isMobile ? "25px" : titleFontSize }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="text-[#595959]"
            style={{ fontSize: isMobile ? "12px" : descriptionFontSize }}
          >
            {description}
          </p>
        )}
      </div>
      {/* content  */}
      <div className="w-full max-w-[1200px] mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {reference.map((ref, index) => {
            const cardData: CardData = {
              image: ref?.value?.value?.data?.image,
              tag: ref?.value?.value?.data?.tag,
              time: ref?.value?.value?.data?.time,
              title: ref?.value?.value?.data?.title,
              description: ref?.value?.value?.data?.description,
              link: ref?.value?.value?.data?.link,
            };
            return (
              <div
                key={index}
                className={`transform transition-all duration-300 ease-in-out ${
                  index >= 3
                    ? showAll
                      ? "opacity-100 scale-100 max-h-[800px] mb-3 sm:mb-6"
                      : "opacity-0 scale-95 max-h-0 mb-0 pointer-events-none"
                    : "opacity-100 scale-100 max-h-[800px] mb-3 sm:mb-6"
                }`}
                onTransitionEnd={() => setIsTransitioning(false)}
              >
                <CustomCard card={cardData} />
              </div>
            );
          })}
        </div>
        {/* view all and view less button */}
        {hasMoreCards && (
          <div className="flex justify-center mt-6 pb-6 sm:mt-8">
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
    </>
  );
};
export default FeatureRef;
