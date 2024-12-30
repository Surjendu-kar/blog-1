import Logo from "@/public/header-img/logo.svg";
import LightDark from "@/public/header-img/lightDark.svg";
import Image from "next/image";
import Link from "next/link";
import { builder, BuilderContent } from "@builder.io/sdk";
import Announcement from "../blog/Announcement/Announcement";
import { NavItem } from "./NavItem";

interface NavItemData {
  title?: string;
  url?: string;
  subItems?: { item: string; url: string }[];
}

export default async function Header() {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

  const builderData = await builder.getAll("nav-data", {
    prerender: false,
  });

  const navItems = [...builderData].reverse().map((item: BuilderContent) => ({
    title: (item.data as NavItemData).title || item.name || "",
    url: (item.data as NavItemData).url || "",
    subItems: (item.data as NavItemData).subItems || [],
  }));

  return (
    <>
      <Announcement />
      <header className="bg-white w-full">
        <div className="container flex p-4 justify-between w-full">
          <div>
            <Link href="/">
              <Image src={Logo} alt="logo" priority />
            </Link>
          </div>

          <div className="flex items-center space-x-4 text-black">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                title={item.title}
                url={item.url}
                subItems={item.subItems}
              />
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button className="border border-[#00C7BE] text-[#00C7BE] px-4 py-3 rounded-md capitalize hover:bg-[#00C7BE] hover:text-white transition-colors">
              login
            </button>
            <button className="bg-[#00C7BE] text-white px-4 py-3 rounded-md capitalize hover:bg-[#00C7BE]/90 transition-colors">
              register now
            </button>
            <Image
              src={LightDark}
              alt="lightDark mode"
              className="cursor-pointer"
              priority
            />
          </div>
        </div>
      </header>
    </>
  );
}
