import React from "react";
import { builder, BuilderContent } from "@builder.io/sdk";

interface NavItemData {
  title?: string;
  url?: string;
  [key: string]: any;
}

const NavComponent = async () => {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

  const builderData = await builder.getAll("nav-data", {
    prerender: false,
  });

  const navItems = builderData.map((item: BuilderContent) => ({
    title: (item.data as NavItemData).title || item.name || "",
    url: (item.data as NavItemData).url || "",
  }));

  return (
    <nav className="p-4">
      <ul className="flex flex-col space-y-2">
        {navItems.map((item, index) => (
          <li key={index} className="hover:text-blue-600">
            <a href={item.url} className="text-gray-800 hover:underline">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavComponent;
