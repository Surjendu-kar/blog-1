"use client";
import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import Logo from "@/public/header-img/logo.svg";
import LightDark from "@/public/header-img/lightDark.svg";
import Image from "next/image";
import Link from "next/link";

interface NavData {
  nav1: string;
  nav2: string;
  nav3: string;
  nav4: string;
}

export default function Header() {
  const [navLinks, setNavLinks] = useState<NavData[]>([]);

  useEffect(() => {
    async function fetchNavData() {
      builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
      const builderData = await builder.getAll("nav-data");

      try {
        const transformedData = builderData.map((item) => ({
          nav1: item.data?.aiConsulting ?? "",
          nav2: item.data?.aiToolbox ?? "",
          nav3: item.data?.contentHealth ?? "",
          nav4: item.data?.resources ?? "",
        }));
        setNavLinks(transformedData);
      } catch (error) {
        console.error("Transformation error:", error);
      }
    }
    fetchNavData();
  }, []);

  return (
    <header className="bg-white w-full">
      <div className="container flex p-4 justify-between w-full">
        <div>
          <Image src={Logo} alt="logo" />
        </div>

        <div className="flex items-center space-x-4 text-black">
          {navLinks.length > 0 && (
            <>
              <Link
                href={navLinks[0].nav1}
                className="hover:text-[#00C7BE] transition-colors"
              >
                AI Consulting
              </Link>
              <Link
                href={navLinks[0].nav2}
                className="hover:text-[#00C7BE] transition-colors"
              >
                AI Toolbox
              </Link>
              <Link
                href={navLinks[0].nav3}
                className="hover:text-[#00C7BE] transition-colors"
              >
                Content Health
              </Link>
              <Link
                href={navLinks[0].nav4}
                className="hover:text-[#00C7BE] transition-colors"
              >
                Resources
              </Link>
            </>
          )}
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
          />
        </div>
      </div>
    </header>
  );
}
