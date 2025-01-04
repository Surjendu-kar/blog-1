"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ArrowDown from "@/public/arrowDown.svg";
import { NavLink } from "@/types";

interface MobileNavItemProps extends NavLink {
  onClose: () => void;
}

function MobileNavItem({ title, slug, subItems, onClose }: MobileNavItemProps) {
  const router = useRouter();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const hasSubItems = subItems && subItems.length > 0;

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
    onClose();
  };

  return (
    <div className="py-2">
      <div className="flex items-center justify-between">
        <span
          onClick={() => handleNavigation(slug)}
          className="text-md font-medium text-[#000000] hover:text-[#00C7BE] transition-colors cursor-pointer"
        >
          {title}
        </span>
        {hasSubItems && (
          <button
            type="button"
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            className="p-2 text-gray-600"
            title="Toggle submenu"
          >
            <Image
              src={ArrowDown}
              alt="Toggle menu"
              className={`w-4 h-4 transition-transform duration-200 ${
                isSubMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {/* Mobile Submenu */}
      {hasSubItems && isSubMenuOpen && (
        <div className="pl-4 mt-2 space-y-2">
          {subItems.map((subItem, index) => (
            <span
              key={index}
              onClick={() => handleNavigation(subItem.slug)}
              className="block py-2 text-sm text-[#000000] hover:text-[#00C7BE] transition-colors cursor-pointer"
            >
              {subItem.title}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileNavItem;
