"use client";
import { useState } from "react";
import MenuBar from "@/public/menubar.svg";
import CloseIcon from "@/public/closeicon.svg";
import Image from "next/image";
import MobileNavItem from "./MobileNavItem";
import { NavLink } from "@/types";

function MobileMenu({ items }: { items: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-900"
      >
        {isOpen ? (
          <Image src={CloseIcon} alt="Close menu icon" className="w-4 h-4" />
        ) : (
          <Image src={MenuBar} alt="Menu bar icon" className="w-4 h-4" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-600 hover:text-gray-900"
                aria-label="Close navigation menu"
                title="Close navigation menu"
              >
                <Image
                  src={CloseIcon}
                  alt="Close menu icon"
                  className="w-5 h-5"
                />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav
              className="flex flex-col px-4 py-2"
              aria-label="Mobile navigation"
            >
              {items.map((item, index) => (
                <MobileNavItem
                  key={index}
                  title={item.title}
                  slug={item.slug}
                  subItems={item.subItems}
                  onClose={() => setIsOpen(false)}
                />
              ))}
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-4 flex flex-col space-y-2">
              <button className="w-full border border-[#00C7BE] text-[#00C7BE] px-4 py-3 rounded-md capitalize hover:bg-[#00C7BE] hover:text-white transition-colors">
                login
              </button>
              <button className="w-full bg-[#00C7BE] text-white px-4 py-3 rounded-md capitalize hover:bg-[#00C7BE]/90 transition-colors">
                register now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
