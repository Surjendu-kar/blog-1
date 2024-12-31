import Image from "next/image";
import Link from "next/link";
import { NavItemData } from "./Header";
import { useState } from "react";
import ArrowDown from "@/public/arrowDown.svg";

function MobileNavItem({
  title,
  url,
  subItems,
  onClose,
}: NavItemData & { onClose: () => void }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const hasSubItems = subItems && subItems.length > 0;

  return (
    <div className="py-2 ">
      <div className="flex items-center justify-between">
        <Link
          href={url || "#"}
          onClick={hasSubItems ? undefined : onClose}
          className="text-md font-medium text-[#000000] hover:text-[#00C7BE] transition-colors"
        >
          {title}
        </Link>
        {hasSubItems && (
          <button
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            className="p-2 text-gray-600"
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
            <Link
              key={index}
              href={subItem.url}
              onClick={onClose}
              className="block py-2 text-sm text-[#000000] hover:text-[#00C7BE] transition-colors"
            >
              {subItem.item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileNavItem;
