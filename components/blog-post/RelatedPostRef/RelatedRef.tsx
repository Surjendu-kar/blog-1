"use client";
import { FC, useEffect, useState } from "react";
import RelatedPostCard, { CardData } from "./RelatedPostCard";

interface ReferenceData {
  value: {
    value: {
      data: {
        title: string;
        description: string;
        authorImg: string;
        authorName: string;
        tag: string;
        time: string;
      };
    };
  };
}

interface RelatedPostProps {
  reference: ReferenceData[];
  heading?: string;
  titleFontSize?: string;
}

const RelatedRef: FC<RelatedPostProps> = ({
  reference,
  heading = "Related Posts",
  titleFontSize = "24px",
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  if (!reference || reference.length === 0) {
    return <div>No related posts available.</div>;
  }

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

  return (
    <>
      {/* heading */}
      <div className="mb-4">
        <h1
          className="font-bold text-[#000000]"
          style={{ fontSize: isMobile ? "20px" : titleFontSize }}
        >
          {heading}
        </h1>
      </div>
      {/* content  */}
      <div className="flex flex-col gap-4">
        {reference.map((ref, index) => {
          const cardData: CardData = {
            title: ref.value.value.data.title,
            description: ref.value.value.data.description,
            authorImg: ref.value.value.data.authorImg,
            authorName: ref.value.value.data.authorName,
            tag: ref.value.value.data.tag,
            time: ref.value.value.data.time,
          };

          return (
            <div key={index}>
              <RelatedPostCard card={cardData} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RelatedRef;
