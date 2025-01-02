"use client";
import { useEffect, useState } from "react";

interface HeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  titleFontSize?: string;
  descriptionFontSize?: string;
}

const Heading: React.FC<HeadingProps> = ({
  subtitle = "BLOG",
  title,
  description,
  titleFontSize = "50px",
  descriptionFontSize = "14px",
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
  return (
    <div className="my-10 mx-5">
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
  );
};

export default Heading;
