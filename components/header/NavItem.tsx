"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowDown from "@/public/arrowDown.svg";

interface NavItemProps {
  title: string;
  url: string;
  subItems?: { item: string; url: string }[];
}

export function NavItem({ title, url, subItems }: NavItemProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const hasSubItems = subItems && subItems.length > 0;

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleNavigation = (path: string) => {
    const cleanPath = path.split("/").filter(Boolean);
    const blogIndex = cleanPath.indexOf("blog");

    if (blogIndex !== -1) {
      cleanPath.splice(
        blogIndex + 1,
        cleanPath.lastIndexOf("blog") - blogIndex
      );
    }

    const finalPath = `/${cleanPath.join("/")}`;
    router.push(finalPath);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-1 cursor-pointer">
        <span
          onClick={() => handleNavigation(url)}
          className="hover:text-[#00C7BE] transition-colors cursor-pointer"
        >
          {title}
        </span>
        {hasSubItems && (
          <Image
            src={ArrowDown}
            alt="Toggle menu"
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {hasSubItems && isOpen && (
        <div className="absolute left-0 mt-2 py-2 bg-white shadow-lg rounded-md min-w-[200px] z-50">
          {subItems.map((subItem, index) => (
            <span
              key={index}
              onClick={() => handleNavigation(subItem.url)}
              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#00C7BE] transition-colors w-full text-left cursor-pointer"
            >
              {subItem.item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
