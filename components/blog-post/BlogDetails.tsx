"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface BlogDetailProps {
  title?: string;
  content?: string;
  image?: string;
  secondParagraph?: string;
  bulletPoints?: { point: string }[];
  conclusion?: string;
  titleFontSize?: string;
  contentFontSize?: string;
  secondParagraphFontSize?: string;
  bulletPointsFontSize?: string;
  conclusionFontSize?: string;
}

const BlogDetail: FC<BlogDetailProps> = ({
  title,
  content,
  image,
  secondParagraph,
  bulletPoints = [],
  conclusion,
  titleFontSize = "35px",
  contentFontSize = "16px",
  secondParagraphFontSize = "16px",
  bulletPointsFontSize = "16px",
  conclusionFontSize = "16px",
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  const isExternalUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <article className="container ">
      {/* Title */}
      <h1
        className="font-bold mb-6 text-[#000000] capitalize"
        style={{ fontSize: isMobile ? "25px" : titleFontSize }}
      >
        {title}
      </h1>

      {/* Main content */}
      <p
        className="text-[#595959] mb-8 opacity-90 leading-5"
        style={{ fontSize: isMobile ? "14px" : contentFontSize }}
      >
        {content}
      </p>

      {/* Featured Image */}
      {image && (
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-lg sm:rounded-2xl overflow-hidden mb-6 sm:mb-8">
          <Image
            src={image}
            alt={title || "Featured image"}
            className="object-cover"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
            priority
            unoptimized={isExternalUrl(image)}
            loader={
              isExternalUrl(image)
                ? ({ src }: { src: string }) => src
                : undefined
            }
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.jpg";
            }}
          />
        </div>
      )}

      {/* Second paragraph */}
      <p
        className="text-[#595959] mb-8 opacity-90 leading-5"
        style={{ fontSize: isMobile ? "14px" : secondParagraphFontSize }}
      >
        {secondParagraph}
      </p>

      {/* Bullet points */}
      {bulletPoints.length > 0 && (
        <ul className="list-disc list-inside mb-8 space-y-3 bg-[#F1F1F3] p-5 rounded-xl">
          {bulletPoints.map((item, index) => (
            <li
              key={index}
              className="text-[#000000]"
              style={{ fontSize: isMobile ? "14px" : bulletPointsFontSize }}
            >
              {item.point}
            </li>
          ))}
        </ul>
      )}

      {/* Conclusion */}
      <p
        className="text-[#595959] opacity-90 leading-5"
        style={{ fontSize: isMobile ? "14px" : conclusionFontSize }}
      >
        {conclusion}
      </p>
    </article>
  );
};

export default BlogDetail;
