"use client";

import { useEffect, useState } from "react";
import Logo from "@/public/header-img/logo.svg";
import LightDark from "@/public/header-img/lightDark.svg";
import Image from "next/image";
import Link from "next/link";
import { builder } from "@builder.io/sdk";
import Announcement from "./Announcement";
import { NavItem } from "./NavItem";
import MobileMenu from "./MobileMenu";
import { NavLink, NavLinkContent } from "@/types";

export default function Header() {
  const [navItems, setNavItems] = useState<NavLink[]>([]);

  useEffect(() => {
    const fetchNavLinks = async () => {
      builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

      try {
        const navLinks = (await builder.getAll("navlink", {
          cachebust: true,
          options: {
            includeRefs: true,
          },
        })) as NavLinkContent[];

        const processedNavLinks = navLinks.map((link) => {
          const title = link.data?.title;
          const slug = `blog/${link.data?.slug?.Default?.value?.data?.slug}`;

          const subItems =
            link.data?.subItems?.map((subItem) => ({
              title: subItem?.title,
              slug: `blog/${subItem?.slug?.value?.data?.slug}`,
            })) || [];

          return {
            title,
            slug,
            subItems,
          } as NavLink;
        });

        const reversedNavItems = [...processedNavLinks]
          .reverse()
          .map((item) => ({
            title: item.title,
            slug: item.slug,
            subItems: item.subItems.map((sub) => ({
              title: sub.title,
              slug: sub.slug,
            })),
          }));

        setNavItems(reversedNavItems);
      } catch (error) {
        console.error("Error fetching nav links:", error);
      }
    };

    fetchNavLinks();
  }, []);

  return (
    <>
      <Announcement />
      <header className="bg-white w-full">
        <div className="container flex p-4 justify-between w-full items-center">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                priority
                className="w-24 md:w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 text-black">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                title={item.title}
                url={item.slug}
                subItems={item.subItems.map((sub) => ({
                  item: sub.title,
                  url: sub.slug,
                }))}
              />
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-2">
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

          {/* Mobile Menu Button */}
          <MobileMenu
            items={navItems.map((link) => ({
              title: link.title,
              slug: link.slug,
              subItems: link.subItems.map((sub) => ({
                title: sub.title,
                slug: sub.slug,
              })),
            }))}
          />
        </div>
      </header>
    </>
  );
}
